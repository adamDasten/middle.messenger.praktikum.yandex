import { Template } from "./Template";
import "./Talking.scss";
import Block from "../../core/Block.js";
import FormDialog from "../FormDialog";
import Message from "../Message";
import UsersList from "../UsersList";
import UserController from "../../controllers/UserController";
import ChatController from "../../controllers/ChatController";
import ChatName from "../ChatName";

interface IProps {
	username: ChatName;
	optionsSvg: string;
	messages: Message[];
	form: FormDialog;
	users: UsersList;
}

export default class Talking extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "talking",
			},
		});
	}

	eventChildListeners() {
		if (!this.element) return;
		this.element.onclick = (e) => {
			const target = e.target as HTMLElement;
			if (
				target.classList.contains("top-dialog__options") ||
				target.parentElement?.classList.contains("top-dialog__options")
			) {
				this.element?.querySelector("nav")?.classList.toggle("active");
			}

			if (target.classList.contains("add-user")) {
				const idUser = String(
					prompt("Введите id пользователя для добавления", "")
				);
				if (!idUser) return;

				ChatController.addUserToChat(idUser);
			}

			if (target.classList.contains("delete-user")) {
				const idUser = String(
					prompt("Введите id пользователя для удаления", "")
				);
				if (!idUser) return;
				ChatController.removeUserFromChat(idUser);
			}

			if (target.classList.contains("top-dialog-users-search")) {
				const userSearchInput = this.element?.querySelector(
					".top-dialog-users-input"
				);

				const val = (userSearchInput as HTMLInputElement)?.value;
				UserController.searchByLogin({
					login: val,
				});
			}
		};
	}

	render() {
		const elementLayout = this.compile(Template, this.props);
		this.eventChildListeners();
		return elementLayout;
	}
}
