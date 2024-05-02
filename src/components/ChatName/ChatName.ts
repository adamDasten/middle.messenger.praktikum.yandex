import Block from "../../core/Block";
import { Template } from "./Template";

interface IProps {
	text: string;
}

export default class Button extends Block<IProps> {
	constructor(props: IProps) {
		super("div", props);
	}

	render() {
		return this.compile(Template, this.props);
	}
}
