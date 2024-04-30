import Block from "../../core/Block";
import Store from "../../services/Store";
import "./ChatItem.scss";
import { Template } from "./Template";

interface IProps {
	user: string;
	message: string;
	dateTime: string;
	notification: number;
	title: string;
	id: number;
}

export default class ChatItem extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "chat-item",
			},
		});

		if (!this.element) return;

		this.element.onclick = () => {
			const currentChatId = Store.getState()?.currentChatId;

			if (currentChatId === props.id) return;

			Store.setState("currentChatId", props.id);
		};
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
