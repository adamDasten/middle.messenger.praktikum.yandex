import RowData from "../../../../components/RowData";
import About from "../../../../components/About";
import Button from "../../../../components/Button";
import profileSvg from "../../../../../static/profile_placeholder.svg";
import arrowBack from "#/static/arrow_back.svg";
import TemplatePage from "../../templates/TemplatePage";
import ProfileInput from "../../../../components/ProfileInput/ProfileInput";
import ProfileForm from "../../../../components/ProfileForm";

const fields = [
	new RowData({
		name: "Старый пароль",
		input: new ProfileInput({
			attr: {
				value: "123456",
				name: "oldPassword",
				type: "password",
			},
		}),
	}),
	new RowData({
		name: "Новый пароль",
		input: new ProfileInput({
			attr: {
				value: "12345678",
				name: "newPassword",
				type: "password",
			},
		}),
	}),
	new RowData({
		name: "Повторите новый пароль",
		input: new ProfileInput({
			attr: {
				value: "12345678",
				name: "newPassword",
				type: "password",
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
	page: "changePassword",
	actions,
});

export default new TemplatePage({
	about,
	page: "changePassword",
	imgSrc: arrowBack,
	form: profileForm,
});
