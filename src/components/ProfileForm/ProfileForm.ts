import Block from "../../core/Block";
import { Template } from "./Template";
import "./ProfileForm.scss";
import RowData from "../RowData";
import Button from "../Button";
import ActionBtn from "../ActionBtn";
import { submitHandler } from "../../utils/submitHandler";
import UserController from "../../controllers/UserController";

interface IProps {
	fields: RowData[];
	actions: Button[] | ActionBtn[];
	page?: "changePassword" | "changeProfile";
}

export default class ProfileForm extends Block<IProps> {
	constructor(props: IProps) {
		super("form", {
			...props,
			attr: {
				class: "profile-form",
			},
			events: {
				submit: (e: Event) => {
					const data = submitHandler(e, this.element);
					if (!props.page) return;
					UserController[props.page](data);
				},
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
