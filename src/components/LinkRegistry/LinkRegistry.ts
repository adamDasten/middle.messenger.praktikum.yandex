import { Template } from "./Template";
import "./LinkRegistry.scss";
import Block from "../../core/Block";

interface IProps {
	linkName: string;
	events?: {
		onClick: (e: EventTarget) => void;
	};
	attr: {
		href: string;
		class: string;
	};
}

export default class LinkRegistry extends Block<IProps> {
	constructor(props: IProps) {
		super("a", props);
	}

	render() {
		return this.compile(Template, this.props);
	}
}
