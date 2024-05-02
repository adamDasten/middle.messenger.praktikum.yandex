import { Template } from "./Template";
import "./ErrorTemplate.scss";
import Block from "../../../../core/Block.js";
import Router from "../../../../core/Router";
import { Path } from "../../../../consts/routes";

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

		const backButton = this.element?.querySelector(".error-content__back");
		backButton?.addEventListener("click", (e) => {
			e.preventDefault();
			Router.go(Path.CHATS);
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
