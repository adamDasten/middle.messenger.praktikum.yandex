import "./LoginLabel.scss";
import { Template } from "./Template";
import Block from "../../core/Block";

interface IProps {
	heading: string;
	attr: {
		class: string;
	};
}

export default class LoginLabel extends Block<IProps> {
	constructor(props: IProps) {
		super("h1", props);
	}

	render() {
		return this.compile(Template, this.props);
	}
}
