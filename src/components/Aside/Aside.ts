import { Path } from "../../consts/routes";
import Block from "../../core/Block";
import Router from "../../core/Router";
import ChatItem from "../ChatItem";
import "./Aside.scss";
import { Template } from "./Template";

interface IProps {
	items: ChatItem[];
	searchSvg: string;
	arrowImg: string;
}

export default class Aside extends Block<IProps> {
	constructor(props: IProps) {
		super("aside", {
			...props,
			attr: {
				class: "aside",
			},
		});

		// Для ссылки профиля делаем роутинг
		const link = this.element?.querySelector(".to-profile");

		link?.addEventListener("click", (e) => {
			e.preventDefault();
			Router.go(Path.INFO);
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
