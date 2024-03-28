import { Template } from "./Template";
import "./Fields.scss";
import Block from "../../core/Block";
import Input from "../InputField";

interface IProps {
	forms: Input[];
	attr: {
		class: string;
	};
}

export default class Fields extends Block<IProps> {
	constructor(props: IProps) {
		super("div", props);
	}

	render() {
		return this.compile(Template, this.props);
	}
}
