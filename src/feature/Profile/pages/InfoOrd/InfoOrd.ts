import About from "../../../../components/About";
import ActionBtn from "../../../../components/ActionBtn";
import arrowBack from "#/static/arrow_back.svg";
import TemplatePage from "../../templates/TemplatePage";
import ProfileInput from "../../../../components/ProfileInput/ProfileInput";
import ProfileForm from "../../../../components/ProfileForm";
import { Path } from "../../../../consts/routes";
import AuthController from "../../../../controllers/AuthController";
import {
	withAvatarAndName,
	withDispayName,
	withEmail,
	withLogin,
	withName,
	withPhone,
	withSecondName,
} from "../../../../services/connect";
import Store from "../../../../services/Store";
import { ProfileResponseData } from "../../../../api/types";
import profileSvg from "../../../../../static/profile_placeholder.svg";
import RowData from "../../../../components/RowData";
import MessageController from "../../../../controllers/MessageController";

const AboutConnected = withAvatarAndName(About);

const state = Store.getState().user as ProfileResponseData | undefined;

const about = new AboutConnected({
	name: state?.first_name,
	avatar: state?.avatar ?? profileSvg,
});

const FirstNameField = withName(ProfileInput);
const LoginField = withLogin(ProfileInput);
const SecondNameField = withSecondName(ProfileInput);
const DisplayNameField = withDispayName(ProfileInput);
const PhoneField = withPhone(ProfileInput);
const EmailField = withEmail(ProfileInput);

const fields = [
	new RowData({
		name: "Почта",
		input: new EmailField({
			attr: {
				value: state?.email ?? "pochta@yandex.ru",
				name: "email",
				type: "email",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Логин",
		input: new LoginField({
			attr: {
				value: state?.login ?? "ivanivanov",
				name: "login",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Имя",
		input: new FirstNameField({
			attr: {
				value: state?.first_name ?? "Адам",
				name: "first_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Фамилия",
		input: new SecondNameField({
			attr: {
				value: state?.second_name ?? "Иванов",
				name: "second_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Имя в чате",
		input: new DisplayNameField({
			attr: {
				value: "Адам",
				name: state?.display_name ?? "display_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Телефон",
		input: new PhoneField({
			attr: {
				value: state?.phone ?? "+79099673030",
				name: "phone",
				type: "tel",
				disabled: true,
			},
		}),
	}),
];

const actions = [
	new ActionBtn({
		textLink: "Изменить данные",
		path: Path.DATA,
	}),
	new ActionBtn({
		textLink: "Изменить пароль",
		path: Path.PASSWORDS,
	}),
	new ActionBtn({
		textLink: "Выйти",
		path: Path.MAIN,
		indentify: "red",
		events: {
			click: () => {
				AuthController.logout();
				MessageController.closeSocket();
			},
		},
	}),
];

const profileForm = new ProfileForm({
	fields,
	actions,
});

export default new TemplatePage({
	about,
	page: "info-ord",
	imgSrc: arrowBack,
	form: profileForm,
});
