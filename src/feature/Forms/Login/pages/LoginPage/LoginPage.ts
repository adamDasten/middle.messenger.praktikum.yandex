import { Template } from "../../../Template";
import "../../../AuthPage.scss";
import Fields from "../../../../../components/Fields/Fields";
import Button from "../../../../../components/Button";
import LinkRegistry from "../../../../../components/LinkRegistry";
import LoginLabel from "../../../../../components/LoginLabel";
import Block from "../../../../../core/Block";
import second from "../../../../../../static/sun_kaktus.svg";
import LoginForm from "../../../../../components/AuthForm";
import InputField from "../../../../../components/InputField";
import LoginInput from "../../../../../components/LoginInput/LoginInput";

export interface IAuth {
	fields: Fields;
	actionButton: Button;
	actionHelp: LinkRegistry;
	title: LoginLabel;
	attr: {
		class: string;
	};
}

export interface IAuthPage {
	cactusImg: string;
	form: LoginForm;
	attr: {
		class: string;
	};
}

const inputs = [
	new InputField({
		textLabel: "Логин",
		labeling: "login-for",
		input: new LoginInput({
			attr: {
				name: "login",
				type: "text",
				id: "login-for",
			},
		}),
	}),
	new InputField({
		textLabel: "Пароль",
		labeling: "password-for",
		input: new LoginInput({
			attr: {
				name: "password",
				type: "password",
				id: "password-for",
			},
		}),
	}),
];

const fields = new Fields({
	forms: inputs,
	attr: {
		class: "login-form",
	},
});

const actionButton = new Button({
	text: "Войти",
});

const actionHelp = new LinkRegistry({
	linkName: "Нет аккаунта?",
	attr: {
		class: "link-registry",
		href: "/registration",
	},
});

const title = new LoginLabel({
	heading: "Вход",
	attr: {
		class: "login-label",
	},
});

const form = new LoginForm({
	actionButton,
	actionHelp,
	fields,
	title,
	attr: {
		class: "main-content",
	},
});

class LoginTemplate extends Block<IAuthPage> {
	constructor(props: IAuthPage) {
		super("div", props);
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}

export default new LoginTemplate({
	cactusImg: second,
	form,
	attr: {
		class: "auth-page",
	},
});
