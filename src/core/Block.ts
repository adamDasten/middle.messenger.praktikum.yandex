import { v4 as uuid } from "uuid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";

export type TEvent = Event | Nullable<HTMLElement>;

export type Nullable<T> = T | null;

interface IProps {
	events?: {
		[eventName: string]: (event: TEvent) => void;
	};
	attr?: Record<string, string>;
	props?: Record<string, string>;
	settings?: { withInternalID: string };
}

export interface IPropsAndStubs extends IProps {
	[key: string]: unknown;
}

export default class Block<T extends object = object> {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_CDU: "flow:component-did-update",
		FLOW_RENDER: "flow:render",
	} as const;

	protected props: IProps;

	protected children;

	protected id: string;

	protected lists;

	protected element: Nullable<HTMLElement> = null;

	protected meta: { tag: string; props: object };

	protected eventBus: EventBus;

	protected setUpdate = false;

	constructor(tag = "div", propsAndChilds = {}) {
		const { children, props, lists } = this._getChildren(propsAndChilds);

		this.eventBus = new EventBus();
		this.id = uuid();

		this.children = this.makePropsProxy(children);
		this.lists = this.makePropsProxy(lists);
		this.props = this.makePropsProxy({ ...props, __id: this.id });

		this.meta = { tag, props };

		this._registerEvents();

		this.eventBus.emit(Block.EVENTS.INIT);
	}

	private _registerEvents() {
		this.eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
		this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		this.eventBus.on(
			Block.EVENTS.FLOW_CDU,
			this._componentDidUpdate.bind(this)
		);
		this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _init(): void {
		this.element = this._createDocumentElement(this.meta.tag);
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
	}

	private _createDocumentElement(tag: string): HTMLElement {
		const element: HTMLElement = document.createElement(tag);

		if (this.props.settings?.withInternalID) {
			element.setAttribute("data-id", this.id);
		}

		return element;
	}

	private _render() {
		const block = this.render();

		if (!this.element || block == null) return;

		this._removeEvents();

		this.element.innerHTML = "";
		this.element.appendChild(block);

		this._addEvents();
		this._addAttribute();
	}

	protected render() {}

	protected _addEvents() {
		const { events } = this.props;

		if (!events) {
			return;
		}

		Object.keys(events).forEach((eventName) => {
			if (this.element) {
				this.element.addEventListener(eventName, events[eventName]);
			}
		});
	}

	protected _removeEvents() {
		const { events } = this.props;

		if (!events) {
			return;
		}

		Object.keys(events).forEach((eventName) => {
			if (this.element) {
				this.element.removeEventListener(eventName, events[eventName]);
			}
		});
	}

	private _addAttribute() {
		const { attr } = this.props;

		if (!attr) {
			return;
		}

		Object.entries(attr).forEach(([key, value]) => {
			if (this.element) {
				this.element.setAttribute(key, value);
			}
		});
	}

	private _getChildren(propsAndChilds: Record<string, unknown>) {
		const children: Record<string, unknown> = {};
		const props: Record<string, unknown> = {};
		const lists: Record<string, unknown> = {};

		Object.keys(propsAndChilds).forEach((key) => {
			if (propsAndChilds[key] instanceof Block) {
				children[key] = propsAndChilds[key];
			} else if (Array.isArray(propsAndChilds[key])) {
				lists[key] = propsAndChilds[key];
			} else {
				props[key] = propsAndChilds[key];
			}
		});

		return { children, props, lists };
	}

	protected compile(template: string, inputProps: IProps) {
		let props = inputProps;

		if (!props) {
			props = this.props;
		}

		let propsAndStubs: IPropsAndStubs = {};

		if (typeof props === "object") {
			propsAndStubs = { ...props };
		}

		Object.entries(this.children).forEach(([key, child]) => {
			propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
		});

		Object.keys(this.lists).forEach((key) => {
			propsAndStubs[key] = `<div data-id="_list_${key}"></div>`;
		});

		const fragment = this._createDocumentElement(
			"template"
		) as HTMLTemplateElement;

		fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

		Object.values(this.children).forEach((child) => {
			const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

			if (!stub) {
				return;
			}

			stub.replaceWith(child.getContent());
		});

		Object.entries(this.lists).forEach(([key, child]) => {
			const stub = fragment.content.querySelector(`[data-id="_list_${key}"]`);

			if (!stub) {
				return;
			}

			const listContent = this._createDocumentElement(
				"template"
			) as HTMLTemplateElement;

			child.forEach((item: Block<T>) => {
				if (item instanceof Block) {
					listContent.content.append(item.getContent());
				} else {
					listContent.content.append(`${item}`);
				}
			});

			stub.replaceWith(listContent.content);
		});

		return fragment.content;
	}

	_componentDidMount() {
		this.componentDidMount();
		Object.values(this.children).forEach((child) => {
			child.dispatchComponentDidMount();
		});
	}

	protected componentDidMount() {}

	public dispatchComponentDidMount() {
		this.eventBus.emit(Block.EVENTS.FLOW_CDM);

		if (Object.keys(this.children).length) {
			this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
		}
	}

	_componentDidUpdate() {
		const isReRender = this.componentDidUpdate();

		if (isReRender) {
			this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
		}
	}

	componentDidUpdate() {
		return true;
	}

	public setProps(newProps: Record<string, unknown>) {
		if (!newProps) {
			return;
		}

		const { children, props, lists } = this._getChildren(newProps);

		if (Object.values(children).length) {
			Object.assign(this.children, children);
		}

		if (Object.values(lists).length) {
			Object.assign(this.lists, lists);
		}

		if (Object.values(props).length) {
			Object.assign(this.props, props);
		}
	}

	private makePropsProxy(props: object): object {
		return new Proxy(props as unknown as object, {
			get: (target: Record<string, unknown>, prop: string) => {
				const value = target[prop];
				return typeof value === "function" ? value.bind(target) : value;
			},
			set: (target: Record<string, unknown>, prop: string, value: unknown) => {
				if (target[prop] !== value) {
					const old = target[prop];
					target[prop] = value;
					this.eventBus.emit(Block.EVENTS.FLOW_CDU, old, value);
				}
				return true;
			},
			deleteProperty() {
				throw new Error("No access");
			},
		}) as unknown as T;
	}

	public getContent(): HTMLElement {
		return this.element as HTMLElement;
	}

	public show() {
		this.getContent().style.display = "flex";
	}

	public hide() {
		this.getContent().style.display = "none";
	}
}
