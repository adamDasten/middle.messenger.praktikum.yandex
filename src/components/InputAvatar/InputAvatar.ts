import { Template } from "./Template";
import Block from "../../core/Block";
import UserController from "../../controllers/UserController";

interface IProps {}

export default class InputAvatar extends Block<IProps> {
	constructor(props: IProps) {
		super("input", {
			...props,
			attr: {
				id: "avatar",
				type: "file",
				accept: "image/*",
			},
			events: {
				onChange: (e: Event) => {
					const files = (e.target as HTMLInputElement).files;
					console.log(22);
					if (!files) return;
					const img = files[0];
					const formData = new FormData();
					formData.append("avatar", img);
					UserController.changeAvatar(formData);
				},
			},
		});

		if (!this.element) return;

		this.element.onchange = (e) => {
			const files = (e.target as HTMLInputElement).files;
			if (!files) return;
			const img = files[0];
			const formData = new FormData();
			formData.append("avatar", img);
			UserController.changeAvatar(formData);
		};
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
