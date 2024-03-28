import { Template } from "./Template";
import "./ActionBtn.scss";
import Block from "../../core/Block";

// <div class="action-btn-wrapper">

interface IProps {
	textLink: string;
	path: string;
	indentify?: string;
}

export default class AcitonBtn extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "action-btn-wrapper",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
