import Block from "../../core/Block";
import ChatItem from "../ChatItem/ChatItem";
import { Template } from "./Template";

interface IProps {
	items: ChatItem[];
	attr?: {
		class?: string;
	};
}

export default class ChatItems extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: `chat-items ${props?.attr?.class ?? ""}`,
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
