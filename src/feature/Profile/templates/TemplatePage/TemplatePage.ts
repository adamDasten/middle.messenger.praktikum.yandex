import { Template } from "./Template";
import "./TemplatePage.scss";
import Block from "../../../../core/Block.js";
import About from "../../../../components/About";
import ProfileForm from "../../../../components/ProfileForm";

interface IProps {
	about: About;
	imgSrc: string;
	page: string;
	form: ProfileForm;
}

// <div class="template-page">
export default class TemplatePage extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "template-page",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
