import Block from "../../core/Block";
import "./ToProfile.scss";
import { Template } from "./Template";
import Router from "../../core/Router";
import { Path } from "../../consts/routes";

interface IProps {
	attr?: {
		class?: string;
	};
	events?: {
		onClick?: (e: Event) => void;
	};
	arrowImg: string;
}

export default class ToProfile extends Block<IProps> {
	constructor(props: IProps) {
		super("a", {
			...props,
			attr: {
				href: "#",
				class: `to-profile ${props.attr?.class ?? ""}`,
			},
		});

		if (this.element) {
			this.element.onclick = (e: Event) => {
				e.preventDefault();
				Router.go(Path.INFO);
			};
		}
	}

	render() {
		return this.compile(Template, this.props);
	}
}
