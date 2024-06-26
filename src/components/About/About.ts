import { Template } from "./Template";
import "./About.scss";
import Block from "../../core/Block";
import InputAvatar from "../InputAvatar/InputAvatar";

interface IProps {
	avatar: string;
	name?: string;
	attr?: object;
	inputAvatar: InputAvatar;
}

export default class About extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				...props?.attr,
				class: "about",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
