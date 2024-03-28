import Block from "../../core/Block";
import { IAuth } from "../../feature/Forms/Login/pages/LoginPage/LoginPage";
import { Template } from "./Template";
import "./AuthForm.scss";
import { submitHandler } from "../../utils/submitHandler";

export default class LoginForm extends Block<IAuth> {
	constructor(props: IAuth) {
		super("form", {
			...props,
			events: {
				submit: (e: Event) => {
					submitHandler(e, this.element);
				},
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
