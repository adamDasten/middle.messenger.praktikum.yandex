import Block from "../../core/Block";
import "./Message.scss";
import { Template } from "./Template";

interface IProps {
	your: string | boolean;
	read?: string;
	time: string;
	message: string;
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
