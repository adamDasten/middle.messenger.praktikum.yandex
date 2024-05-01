import Block from "../../core/Block";
import UserItem from "../UserItem";
import { Template } from "./Template";
import "./UsersList.scss";

interface IProps {
	attr?: {
		class: string;
	};
	items: UserItem[];
}

export default class UsersList extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			props: {
				...props,
				attr: {
					class: "users-list",
				},
			},
		});
	}

	render() {
		return this.compile(Template, this.props);
	}
}
