import InputTemplate from "./Template";
import "./InputField.scss";
import Block from "../../core/Block";
import LoginInput from "../LoginInput/LoginInput";

interface IProps {
	labeling: string;
	textLabel: string;
	input: LoginInput;
}

export default class InputField extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "wrapper-input",
			},
		});
	}

	render() {
		return this.compile(InputTemplate, this.props);
	}
}
