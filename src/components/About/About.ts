import { Template } from "./Template";
import "./About.scss";
import Block from "../../core/Block";
import UserController from "../../controllers/UserController";

interface IProps {
	pathImg: string;
	name?: string;
}

export default class About extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "about",
			},
		});

		this.element?.querySelector("input")?.addEventListener("change", (e) => {
			const files = (e.target as HTMLInputElement).files;
			if (!files) return;
			const img = files[0];
			const formData = new FormData();
			formData.append("avatar", img);
			UserController.changeAvatar(formData);
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
