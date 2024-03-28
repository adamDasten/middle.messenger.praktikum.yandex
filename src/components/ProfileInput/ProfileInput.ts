import Block from "../../core/Block";
import { deleteAndRenderError } from "../../utils/handleErrors";
import "./ProfileInput.scss";
import { Template } from "./Template";

interface IProps {
	attr: {
		value: string;
		name: string;
		type: string;
		disabled?: boolean;
	};
}

export default class ProfileInput extends Block<IProps> {
	constructor(props: IProps) {
		super("input", {
			...props,
			attr: {
				...props.attr,
				class: "profile-input",
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
