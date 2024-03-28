import Block from "../../core/Block";
import ChatItem from "../ChatItem";
import "./Aside.scss";
import { Template } from "./Template";

interface IProps {
	items: ChatItem[];
	searchSvg: string;
	arrowImg: string;
}

export default class Aside extends Block<IProps> {
	constructor(props: IProps) {
		super("aside", {
			...props,
			attr: {
				class: "aside",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
