import { Template } from "./Template";
import "./EmptyTalk.scss";
import Block from "../../core/Block";

interface IProps {
	text: string;
}

export default class EmptyTalk extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "empty-talk",
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
