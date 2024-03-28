import { Template } from "./Template";
import "./ChatTemplate.scss";
import Block from "../../../../core/Block";
import Aside from "../../../../components/Aside";

interface IProps {
	aside: Aside;
	content: unknown;
	img?: string;
}

export default class ChatTemplate extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "chat-template",
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
