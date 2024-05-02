import { Template } from "./Template";
import "./LinkRegistry.scss";
import Block from "../../core/Block";

interface IProps {
	linkName: string;
	events?: {
		click: () => void;
	};
	attr: {
		href?: string;
		class: string;
	};
}

export default class LinkRegistry extends Block<IProps> {
	constructor(props: IProps) {
		super("a", {
			...props,
			events: {
				...props.events,
				click: (e: Event) => {
					e.preventDefault();
					props.events?.click();
				},
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
