import Block from "../../core/Block";
import { IAuth } from "../../feature/Forms/Login/pages/LoginPage/LoginPage";
import { Template } from "./Template";
import "./AuthForm.scss";
import { submitHandler } from "../../utils/submitHandler";
import AuthController from "../../controllers/AuthController";

export default class LoginForm extends Block<IAuth> {
	constructor(props: IAuth) {
		super("form", {
			...props,
			events: {
				submit: async (e: Event) => {
					const result = submitHandler(e, this.element);
					AuthController[props.eventType](result, e);
				},
			},
		});
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}
