import Aside from "../../../../components/Aside";
import searchSvg from "#/static/searchSvg.svg";
import ChatTemplate from "../../templates/ChatTemplate";
import AddChat from "../../../../components/AddChat";
import toProfileArrow from "#/static/to-profile.svg";
import { withChatItems, withChatTemplate } from "../../../../services/connect";
import ToProfile from "../../../../components/ToProfile";
import ChatItems from "../../../../components/ChatItems";
import Store from "../../../../services/Store";
import EmptyTalk from "../../../../components/EmptyTalk";

const ContentEmpty = new EmptyTalk({
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
