import ChatController from "../../controllers/ChatController";
import Block from "../../core/Block";
import "./AddChat.scss";
import { Template } from "./Template";

interface IProps {
	attr?: {
		class?: string;
	};
	events?: {
		onClick?: (e: HTMLButtonElement) => void;
	};
	text: string;
}

export default class AddChat extends Block<IProps> {
	constructor(props: IProps) {
		super("button", {
			...props,
			attr: {
				...props.attr,
				class: `add-chat ${props.attr?.class}`,
			},
		});

		this.element?.addEventListener("click", () => {
			const title = prompt("Введите название чата", "");
			ChatController.createChat({
				title: title ?? "Чат",
			});
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
