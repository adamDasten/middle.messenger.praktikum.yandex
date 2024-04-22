import { Template } from "./Template";
import "./ActionBtn.scss";
import Block from "../../core/Block";
import Router from "../../core/Router";

interface IProps {
	textLink: string;
	path: string;
	indentify?: string;
	events?: {
		click: () => void;
	};
}

export default class AcitonBtn extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "action-btn-wrapper",
			},
		});

		const link = this.element?.querySelector(".action-btn");
		link?.addEventListener("click", (e) => {
			e.preventDefault();
			Router.go(props.path);
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
