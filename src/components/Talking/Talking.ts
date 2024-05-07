import { Template } from "./Template";
import "./Talking.scss";
import Block from "../../core/Block.js";
import FormDialog from "../FormDialog";
import Message from "../Message";
import ChatName from "../ChatName";
import OptionsDiv from "../Options/Options";

interface IProps {
	username: ChatName;
	messages: Message[];
	form: FormDialog;
	options: OptionsDiv;
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

	render() {
		const elementLayout = this.compile(Template, this.props);
		return elementLayout;
	}
}
