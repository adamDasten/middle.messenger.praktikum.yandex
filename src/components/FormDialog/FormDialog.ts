import Block from "../../core/Block";
import { submitHandler } from "../../utils/submitHandler";
import DialogInput from "../DialogInput/DialogInput";
import "./FormDialog.scss";
import { Template } from "./Template";

interface IProps {
	addFile: string;
	arrowGo: string;
	input: DialogInput;
}

export default class FormDialog extends Block<IProps> {
	constructor(props: IProps) {
		super("form", {
			...props,
			attr: {
				class: "bottom-dialog",
			},
			events: {
				submit: (e: Event) => {
					submitHandler(e, this.element);
				},
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
