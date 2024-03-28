import { Template } from "./Template";
import "./ErrorTemplate.scss";
import Block from "../../../../core/Block.js";

interface IProps {
	errorType: string;
	errorText: string;
	backButton: string;
	cactusImg: string;
}

export default class ErrorTemplate extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "error-template",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
