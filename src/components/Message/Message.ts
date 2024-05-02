import Block from "../../core/Block";
import "./Message.scss";
import { Template } from "./Template";

interface IProps {
	time: string;
	content: string;
}

export default class Message extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "dialog-chat__msg",
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
