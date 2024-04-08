import Block from "../../core/Block";
import { deleteAndRenderError } from "../../utils/handleErrors";
import "./LoginInput.scss";
import { Template } from "./Template";

interface IProps {
	attr: {
		type: string;
		name: string;
		id: string;
	};
}

export default class LoginInput extends Block<IProps> {
	constructor(props: IProps) {
		super("input", {
			...props,
			attr: {
				...props.attr,
				class: "login-input",
			},
			events: {
				blur: (event: Event) => {
					deleteAndRenderError(event.target as HTMLInputElement);
				},
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
