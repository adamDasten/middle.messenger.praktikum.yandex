import { Template } from "./Template";
import "./Talking.scss";
import Block from "../../core/Block.js";
import FormDialog from "../FormDialog";
import Message from "../Message";

interface IProps {
	username: string;
	optionsSvg: string;
	messages: Message[];
	form: FormDialog;
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
			alert(12);
		});

		this.element
			?.querySelector(".delete-user")
			?.addEventListener("click", () => {
				alert(21);
			});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
