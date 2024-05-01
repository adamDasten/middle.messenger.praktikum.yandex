import Talking from "../../../../components/Talking";
import optionsSvg from "#/static/options.svg";
import FormDialog from "../../../../components/FormDialog";
import addFile from "#/static/add_svg.svg";
import arrowGo from "#/static/arrow_next.svg";
import DialogInput from "../../../../components/DialogInput";
import EmptyTalk from "../../../../components/EmptyTalk";
import { usersList } from "../../../../services/userConnectInfo";
import { nameChat } from "../../../../services/nameConnectInfo";
import { withMessages } from "../../../../services/messageConnection";
import OptionsDiv from "../../../../components/Options/Options";

const form = new FormDialog({
	addFile,
	arrowGo,
	input: new DialogInput({
		attr: {
			type: "text",
			name: "message",
			placeholder: "Сообщение",
		},
	}),
});

const OptionsLayout = new OptionsDiv({
	optionsSvg,
	users: usersList,
});

const Talk = withMessages(Talking);

export const ContentMessage = new Talk({
	messages: [],
	optionsSvg,
	username: nameChat,
	form,
	options: OptionsLayout,
});

export const ContentEmpty = new EmptyTalk({
	text: "Выберите чат чтобы отправить сообщение",
});
