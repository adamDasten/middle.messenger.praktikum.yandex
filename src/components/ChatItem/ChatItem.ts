import ChatController from "../../controllers/ChatController";
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
	active?: boolean;
}

export default class ChatItem extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: `chat-item`,
			},
		});

		if (!this.element) return;

		this.element.onclick = () => {
			const currentChatId = Store.getState()?.currentChatId;

			document
				.querySelectorAll(".chat-item")
				?.forEach((item) => item.classList.remove("chat-item-active"));
			this.element?.classList.add("chat-item-active");

			if (currentChatId == props.id) return;

			ChatController.openChat(String(props.id), props.title);
		};
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
