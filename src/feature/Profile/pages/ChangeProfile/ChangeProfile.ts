import RowData from "../../../../components/RowData";
import Button from "../../../../components/Button";
import About from "../../../../components/About";
import profileSvg from "../../../../../static/profile_placeholder.svg";
import arrowBack from "#/static/arrow_back.svg";
import TemplatePage from "../../templates/TemplatePage";
import ProfileInput from "../../../../components/ProfileInput/ProfileInput";
import ProfileForm from "../../../../components/ProfileForm";

const fields = [
	new RowData({
		name: "Почта",
		input: new ProfileInput({
			attr: {
				value: "pochta@yandex.ru",
				name: "email",
				type: "email",
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
			},
		}),
	}),
];

const actions = [
	new Button({ text: "Сохранить", attr: { class: "button-center" } }),
];

const about = new About({
	pathImg: profileSvg,
});

const profileForm = new ProfileForm({
	fields,
	page: "data",
	actions,
});

export default new TemplatePage({
	about,
	imgSrc: arrowBack,
	page: "data",
	form: profileForm,
});
