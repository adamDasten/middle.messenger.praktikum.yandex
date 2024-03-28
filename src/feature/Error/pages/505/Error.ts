import ErrorTemplate from "../../templates/ErrorTemplate";
import cactusImg from "#/static/sun_kaktus.svg";

export default new ErrorTemplate({
	errorType: "500",
	errorText: "Мы уже фиксим",
	backButton: "Назад к чатам",
	cactusImg,
});
