import ChatController from "../../controllers/ChatController";
import UserController from "../../controllers/UserController";
import Block from "../../core/Block";
import UsersList from "../UsersList";
import { Template } from "./Template";

interface IProps {
	optionsSvg: string;
	users: UsersList;
}

export default class OptionsDiv extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "top-dialog__options-wrapper",
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
		const temp = this.compile(Template, this.props);
		this.eventChildListeners();
		return temp;
	}
}
