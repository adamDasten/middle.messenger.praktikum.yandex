import Aside from "../../../../components/Aside";
import searchSvg from "#/static/searchSvg.svg";
import EmptyTalk from "../../../../components/EmptyTalk";
import cactusImg from "#/static/sun_kaktus.svg";
import ChatTemplate from "../../templates/ChatTemplate";
import AddChat from "../../../../components/AddChat";
import { withChatItems } from "../../../../services/connect";
import toProfileArrow from "#/static/to-profile.svg";

import ChatItems from "../../../../components/ChatItems";
import ToProfile from "../../../../components/ToProfile";
import Store from "../../../../services/Store";

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

const content = new EmptyTalk({
	text: "Выберите чат чтобы отправить сообщение",
});

export default new ChatTemplate({
	aside,
	content,
	img: cactusImg,
});
