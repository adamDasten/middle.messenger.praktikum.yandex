import Aside from "../../../../components/Aside";
import searchSvg from "#/static/searchSvg.svg";
import ChatTemplate from "../../templates/ChatTemplate";
import AddChat from "../../../../components/AddChat";
import toProfileArrow from "#/static/to-profile.svg";
import { withChatItems, withChatTemplate } from "../../../../services/connect";
import ToProfile from "../../../../components/ToProfile";
import ChatItems from "../../../../components/ChatItems";
import Store from "../../../../services/Store";
import Talking from "../../../../components/Talking";
import Message from "../../../../components/Message";
import read from "#/static/read.svg";
import optionsSvg from "#/static/options.svg";
import FormDialog from "../../../../components/FormDialog";
import addFile from "#/static/add_svg.svg";
import arrowGo from "#/static/arrow_next.svg";
import DialogInput from "../../../../components/DialogInput";
import EmptyTalk from "../../../../components/EmptyTalk";
import UserItem from "../../../../components/UserItem";
import UsersList from "../../../../components/UsersList";
import { withUsers } from "../../../../services/connect";

const UserListWrapper = withUsers(UsersList);

export const usersList = new UserListWrapper({
	items: Store.getState()?.userSearchRes as UserItem[],
});

const messages = [
	new Message({
		your: false,
		message: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА 
    в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. 
    Сейчас мы все знаем 
    что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер
    все еще находятся на поверхности Луны, так как астронавты с собой забрали 
    только кассеты с пленкой.
    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так 
    никогда и не попали. 
    Всего их было произведено 
    25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
		time: "11:50",
	}),
	new Message({
		your: "message--your",
		read,
		message: "Очень круто выглядит!",
		time: "15:48",
	}),
];

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

export const ContentMessage = new Talking({
	messages,
	optionsSvg,
	username: "Вадим",
	form,
	users: usersList,
});

export const ContentEmpty = new EmptyTalk({
	text: "Выберите чат чтобы отправить сообщение",
});

const addChat = new AddChat({
	text: "Добавить чат",
});

const profile = new ToProfile({
	arrowImg: toProfileArrow,
});

const ConnectChatItems = withChatItems(ChatItems);

const chatItems = new ConnectChatItems({
	items: Store.getState().chats,
});

const aside = new Aside({
	searchSvg,
	addChat,
	toProfile: profile,
	chatItems,
});

const ChatTemplateContent = withChatTemplate(ChatTemplate);

export default new ChatTemplateContent({
	aside,
	content: ContentEmpty,
});
