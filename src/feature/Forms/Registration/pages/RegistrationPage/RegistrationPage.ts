import { Template } from "../../../Template";
import cactusImg from "../../../../../../static/sun_kaktus.svg";
import "../../../AuthPage.scss";
import LoginLabel from "../../../../../components/LoginLabel";
import LinkRegistry from "../../../../../components/LinkRegistry";
import Button from "../../../../../components/Button";
import Fields from "../../../../../components/Fields/Fields";
import Block from "../../../../../core/Block";
import { IAuthPage } from "../../../Login/pages/LoginPage/LoginPage";
import LoginForm from "../../../../../components/AuthForm";
import InputField from "../../../../../components/InputField";
import LoginInput from "../../../../../components/LoginInput";

const inputs = [
	new InputField({
		textLabel: "Почта",
		labeling: "mail-for",
		input: new LoginInput({
			attr: {
				id: "mail-for",
				name: "email",
				type: "email",
			},
		}),
	}),
	new InputField({
		textLabel: "Логин",
		labeling: "login-for",
		input: new LoginInput({
			attr: {
				id: "login-for",
				name: "login",
				type: "text",
			},
		}),
	}),
	new InputField({
		textLabel: "Имя",
		labeling: "first-name-for",
		input: new LoginInput({
			attr: {
				id: "first-name-for",
				name: "first_name",
				type: "text",
			},
		}),
	}),
	new InputField({
		textLabel: "Фамилия",
		labeling: "second-name-for",
		input: new LoginInput({
			attr: {
				id: "second-name-for",
				name: "second_name",
				type: "text",
			},
		}),
	}),
	new InputField({
		textLabel: "Телефон",
		labeling: "phone-for",
		input: new LoginInput({
			attr: {
				id: "phone-for",
				name: "phone",
				type: "tel",
			},
		}),
	}),
	new InputField({
		textLabel: "Пароль",
		labeling: "password-registr-for",
		input: new LoginInput({
			attr: {
				id: "password-registr-for",
				name: "password",
				type: "password",
			},
		}),
	}),
	new InputField({
		textLabel: "Пароль (еще раз)",
		labeling: "password-registr-again-for",
		input: new LoginInput({
			attr: {
				id: "password-registr-again-for",
				name: "password_again",
				type: "password",
			},
		}),
	}),
];

const fields = new Fields({
	forms: inputs,
	attr: {
		class: "register-form",
	},
});

const actionButton = new Button({
	text: "Создать аккаунт",
});

const actionHelp = new LinkRegistry({
	linkName: "Войти",
	attr: {
		class: "link-registry",
		href: "/",
	},
});

const title = new LoginLabel({
	heading: "Регистрация",
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

class RegistrationTemplate extends Block<IAuthPage> {
	constructor(props: IAuthPage) {
		super("div", props);
	}

	protected render() {
		return this.compile(Template, this.props);
	}
}

export default new RegistrationTemplate({
	attr: {
		class: "auth-page",
	},
	form,
	cactusImg,
});
