import Block from "../../core/Block";
import { Template } from "./Template";

interface IProps {
	attr?: {
		class: string;
	};
	id: number;
	name: string;
	login: string;
}

export default class UserItem extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				...props.attr,
				class: "user-item",
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
