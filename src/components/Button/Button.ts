import Block from "../../core/Block";
import "./Button.scss";
import { Template } from "./Template";

interface IProps {
	attr?: {
		class?: string;
	};
	events?: {
		onClick?: (e: HTMLButtonElement) => void;
	};
	text: string;
}

export default class Button extends Block<IProps> {
	constructor(props: IProps) {
		super("button", {
			...props,
			attr: {
				...props.attr,
				class: `button ${props.attr?.class}`,
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
