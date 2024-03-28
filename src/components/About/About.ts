import { Template } from "./Template";
import "./About.scss";
import Block from "../../core/Block";

interface IProps {
	pathImg: string;
	name?: string;
}

export default class About extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "about",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
