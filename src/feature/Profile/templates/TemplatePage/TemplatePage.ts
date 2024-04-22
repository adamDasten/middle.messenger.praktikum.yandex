import { Template } from "./Template";
import "./TemplatePage.scss";
import Block from "../../../../core/Block.js";
import About from "../../../../components/About";
import ProfileForm from "../../../../components/ProfileForm";
import Router from "../../../../core/Router";
import { Path } from "../../../../consts/routes";

interface IProps {
	about: About;
	imgSrc: string;
	page: string;
	form: ProfileForm;
}

export default class TemplatePage extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "template-page",
			},
		});

		const backButton = this.element?.querySelector(".template-page__backs a");

		backButton?.addEventListener("click", (e) => {
			e.preventDefault();
			Router.go(Path.CHATS);
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
