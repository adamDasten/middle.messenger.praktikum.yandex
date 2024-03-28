import Block from "../../core/Block";
import { Template } from "./Template";
import "./ProfileForm.scss";
import RowData from "../RowData";
import Button from "../Button";
import ActionBtn from "../ActionBtn";
import { submitHandler } from "../../utils/submitHandler";

interface IProps {
	fields: RowData[];
	actions: Button[] | ActionBtn[];
	page: string;
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
					submitHandler(e, this.element);
				},
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
