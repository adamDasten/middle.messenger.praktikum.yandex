import ErrorTemplate from "../../templates/ErrorTemplate";
import cactusImg from "#/static/sun_kaktus.svg";

export default new ErrorTemplate({
	errorType: "400",
	errorText: "Не туда попали",
	backButton: "Назад к чатам",
	cactusImg,
});
