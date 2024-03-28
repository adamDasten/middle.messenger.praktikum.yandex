import RegistrationPage from "../feature/Forms/Registration/pages/RegistrationPage";
import LoginPage from "../feature/Forms/Login/pages/LoginPage";
import Block from "../core/Block";
import MessagePage from "../feature/Chat/pages/MessagePage";
import EmptyPage from "../feature/Chat/pages/EmptyPage";
import PassProfile from "../feature/Profile/pages/PassProfile";
import InfoOrd from "../feature/Profile/pages/InfoOrd";
import ChangeProfile from "../feature/Profile/pages/ChangeProfile";
import Error505 from "../feature/Error/pages/505/Error";
import Error404 from "../feature/Error/pages/404/Error";

export enum Path {
	MAIN = "/",
	REGISTRATION = "/registration",
	FIFTY = "/fifty",
	FOURTY = "/fourty",
	EMPTYS = "/emptys",
	INFO = "/info",
	PASSWORDS = "/passwords",
	DATA = "/data",
	CHATS = "/chats",
}

export const routes: Record<Path, Block<object>> = {
	[Path.MAIN]: LoginPage,
	[Path.REGISTRATION]: RegistrationPage,
	[Path.CHATS]: MessagePage,
	[Path.EMPTYS]: EmptyPage,
	[Path.PASSWORDS]: PassProfile,
	[Path.INFO]: InfoOrd,
	[Path.DATA]: ChangeProfile,
	[Path.FIFTY]: Error505,
	[Path.FOURTY]: Error404,
};
