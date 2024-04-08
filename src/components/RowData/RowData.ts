import { Template } from "./Template";
import "./RowData.scss";
import Block from "../../core/Block";
import ProfileInput from "../ProfileInput/ProfileInput";

interface IProps {
	name: string;
	input: ProfileInput;
}

export default class RowData extends Block<IProps> {
	constructor(props: IProps) {
		super("div", {
			...props,
			attr: {
				class: "row-data",
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
