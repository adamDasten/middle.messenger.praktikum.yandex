import RowData from "../../../../components/RowData";
import About from "../../../../components/About";
import ActionBtn from "../../../../components/ActionBtn";
import profileSvg from "../../../../../static/profile_placeholder.svg";
import arrowBack from "#/static/arrow_back.svg";
import TemplatePage from "../../templates/TemplatePage";
import ProfileInput from "../../../../components/ProfileInput/ProfileInput";
import ProfileForm from "../../../../components/ProfileForm";

const about = new About({
	name: "Адам",
	pathImg: profileSvg,
});

const fields = [
	new RowData({
		name: "Почта",
		input: new ProfileInput({
			attr: {
				value: "pochta@yandex.ru",
				name: "email",
				type: "email",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Логин",
		input: new ProfileInput({
			attr: {
				value: "ivanivanov",
				name: "login",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Имя",
		input: new ProfileInput({
			attr: {
				value: "Адам",
				name: "first_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Фамилия",
		input: new ProfileInput({
			attr: {
				value: "Иванов",
				name: "second_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Имя в чате",
		input: new ProfileInput({
			attr: {
				value: "Адам",
				name: "display_name",
				type: "text",
				disabled: true,
			},
		}),
	}),
	new RowData({
		name: "Телефон",
		input: new ProfileInput({
			attr: {
				value: "+79099673030",
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
		path: "/changeInfo",
	}),
	new ActionBtn({
		textLink: "Изменить пароль",
		path: "/changePass",
	}),
	new ActionBtn({
		textLink: "Выйти",
		path: "/",
		indentify: "red",
	}),
];

const profileForm = new ProfileForm({
	fields,
	page: "info",
	actions,
});

export default new TemplatePage({
	about,
	page: "info",
	imgSrc: arrowBack,
	form: profileForm,
});
