import { Template } from "./Template";
import "./Talking.scss";
import Block from "../../core/Block.js";
import FormDialog from "../FormDialog";
import Message from "../Message";
import UsersList from "../UsersList";
import UserController from "../../controllers/UserController";
// import ChatController from "../../controllers/ChatController";

interface IProps {
	username: string;
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

		this.element
			?.querySelector(".top-dialog__options")
			?.addEventListener("click", () => {
				this.element?.querySelector("nav")?.classList.toggle("active");
			});

		this.element?.querySelector(".add-user")?.addEventListener("click", () => {
			// const idUser = Number(prompt("Введите id пользователя", ""));
		});

		this.element
			?.querySelector(".delete-user")
			?.addEventListener("click", () => {
				alert(21);
			});

		const userSearchButton = this.element?.querySelector(
			".top-dialog-users-search"
		);
		const userSearchInput = this.element?.querySelector(
			".top-dialog-users-input"
		);

		userSearchButton?.addEventListener("click", () => {
			const val = (userSearchInput as HTMLInputElement)?.value;
			UserController.searchByLogin({
				login: val,
			});
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
