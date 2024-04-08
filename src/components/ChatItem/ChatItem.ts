import Block from "../../core/Block";
import "./ChatItem.scss";
import { Template } from "./Template";

interface IProps {
	user: string;
	your: boolean | string;
	message: string;
	dateTime: string;
	notification: string | null;
}

export default class ChatItem extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "chat-item",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
