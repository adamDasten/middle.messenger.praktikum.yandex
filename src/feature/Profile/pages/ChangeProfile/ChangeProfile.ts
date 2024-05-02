import Button from "../../../../components/Button";
import About from "../../../../components/About";
import profileSvg from "../../../../../static/profile_placeholder.svg";
import arrowBack from "#/static/arrow_back.svg";
import TemplatePage from "../../templates/TemplatePage";
import ProfileInput from "../../../../components/ProfileInput/ProfileInput";
import ProfileForm from "../../../../components/ProfileForm";
import Store from "../../../../services/Store";
import { ProfileResponseData } from "../../../../api/types";
import {
	withAvatar,
	withDispayName,
	withEmail,
	withLogin,
	withName,
	withPhone,
	withSecondName,
} from "../../../../services/connect";
import RowData from "../../../../components/RowData";

const userData = Store.getState()?.user as ProfileResponseData | undefined;

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
				value: userData?.email ?? "Ivan@ya.ya",
				name: "email",
				type: "email",
			},
		}),
	}),
	new RowData({
		name: "Логин",
		input: new LoginField({
			attr: {
				value: userData?.login ?? "ivanivanov",
				name: "login",
				type: "text",
			},
		}),
	}),
	new RowData({
		name: "Имя",
		input: new FirstNameField({
			attr: {
				value: userData?.first_name ?? "Адам",
				name: "first_name",
				type: "text",
			},
		}),
	}),
	new RowData({
		name: "Фамилия",
		input: new SecondNameField({
			attr: {
				value: userData?.second_name ?? "Иванов",
				name: "second_name",
				type: "text",
			},
		}),
	}),
	new RowData({
		name: "Имя в чате",
		input: new DisplayNameField({
			attr: {
				value: userData?.display_name ?? "Адам",
				name: "display_name",
				type: "text",
			},
		}),
	}),
	new RowData({
		name: "Телефон",
		input: new PhoneField({
			attr: {
				value: userData?.phone ?? "+79999999999",
				name: "phone",
				type: "tel",
			},
		}),
	}),
];

const actions = [
	new Button({ text: "Сохранить", attr: { class: "button-center" } }),
];

const state = Store.getState().user as ProfileResponseData | undefined;

const AboutConnected = withAvatar(About);

const about = new AboutConnected({
	avatar: state?.avatar ?? profileSvg,
});

const profileForm = new ProfileForm({
	fields,
	page: "changeProfile",
	actions,
});

export default new TemplatePage({
	about,
	imgSrc: arrowBack,
	page: "changeProfile",
	form: profileForm,
});
