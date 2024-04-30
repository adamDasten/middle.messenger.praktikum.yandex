import Block from "../../core/Block";
import AddChat from "../AddChat";
import ChatItems from "../ChatItems";
import ToProfile from "../ToProfile/ToProfile";
import "./Aside.scss";
import { Template } from "./Template";

interface IProps {
	searchSvg: string;
	addChat: AddChat;
	toProfile: ToProfile;
	chatItems: ChatItems;
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
