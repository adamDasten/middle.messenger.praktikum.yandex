import Block from "../../core/Block";
import { deleteAndRenderError } from "../../utils/handleErrors";
import "./DialogInput.scss";
import { Template } from "./Template";

interface IProps {
	attr: {
		type: string;
		name: string;
		placeholder: string;
	};
}

export default class DialogInput extends Block<IProps> {
	constructor(props: IProps) {
		super("input", {
			...props,
			attr: {
				...props.attr,
				class: "dialog-input",
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
