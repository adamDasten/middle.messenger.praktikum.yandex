import { Path } from "./consts/routes";
import Router from "./core/Router";
import MessagePage from "./feature/Chat/pages/MessagePage";
import LoginPage from "./feature/Forms/Login/pages/LoginPage";
import RegistrationPage from "./feature/Forms/Registration/pages/RegistrationPage";
import ChangeProfile from "./feature/Profile/pages/ChangeProfile";
import InfoOrd from "./feature/Profile/pages/InfoOrd";
import PassProfile from "./feature/Profile/pages/PassProfile";
import Error505 from "./feature/Error/pages/505";
import Error404 from "./feature/Error/pages/404";
import "./styles/index.scss";
import Store from "./services/Store";
import ChatController from "./controllers/ChatController";
import UserController from "./controllers/UserController";

document.addEventListener("DOMContentLoaded", async () => {
	Router.use(Path.MAIN, LoginPage)
		.use(Path.REGISTRATION, RegistrationPage)
		.use(Path.CHATS, MessagePage)
		.use(Path.PASSWORDS, PassProfile)
		.use(Path.INFO, InfoOrd)
		.use(Path.DATA, ChangeProfile)
		.use(Path.FIFTY, Error505)
		.use(Path.FOURTY, Error404);

	if (Store.getState()?.user) {
		await ChatController.getChats();
		await UserController.searchByLogin({ login: "" });
	}
	Router.start();
});
