import HTTPTransport from "../core/HTTPTransport";
import { ChangeUsersInChatData, CreateChatData } from "./types";

enum URLS {
	GET_CHATS = "/chats",
	GET_CHAT_ID = "/chats/token",
	USER_CHAT = "/chats/users",
}

export default class ChatApi {
	getChats() {
		return HTTPTransport.get(URLS.GET_CHATS);
	}

	createChat(data: CreateChatData) {
		return HTTPTransport.post(URLS.GET_CHATS, { payload: data });
	}

	addUser(data: ChangeUsersInChatData) {
		return HTTPTransport.put(URLS.USER_CHAT, { payload: data });
	}

	deleteUser(data: ChangeUsersInChatData) {
		return HTTPTransport.delete(URLS.USER_CHAT, { payload: data });
	}

	// для получения айди чата!
	getChatId(id: number) {
		return HTTPTransport.post(`${URLS.GET_CHAT_ID}/${id}`);
	}
}
