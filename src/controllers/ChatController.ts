import ChatApi from "../api/ChatApi";
import {
	ChangeUsersInChatData,
	CreateChatData,
	IMessage,
	ProfileResponseData,
} from "../api/types";
import ChatItem from "../components/ChatItem";
import Store from "../services/Store";
import MessageController from "./MessageController";

class UserController {
	private _api: ChatApi;

	constructor() {
		this._api = new ChatApi();
	}

	async getChats() {
		try {
			const res = await this._api.getChats();
			const chats = JSON.parse(res.response);

			const chatsToStore = (chats as IMessage[])?.map((item) => {
				return new ChatItem({
					title: item.title,
					user: item?.last_message?.user?.first_name,
					message: item?.last_message?.content,
					notification: item?.unread_count,
					dateTime: item?.last_message?.time
						? new Date(item?.last_message?.time).toLocaleDateString()
						: "",
					id: item?.id,
				});
			});
			Store.setState("chats", chatsToStore);
		} catch (e) {
			alert(e);
		}
	}

	async createChat(payload: CreateChatData) {
		try {
			await this._api.createChat(payload);
			await this.getChats();
		} catch (e) {
			alert(e);
		}
	}

	async addUserToChat(userId: string) {
		try {
			const data: ChangeUsersInChatData = {
				users: [userId],
				chatId: String(Store.getState()?.currentChatId),
			};

			await this._api.addUser(data);
		} catch (e) {
			alert(e);
		}
	}

	async removeUserFromChat(userId: string) {
		try {
			const data: ChangeUsersInChatData = {
				users: [userId],
				chatId: String(Store.getState()?.currentChatId),
			};

			await this._api.deleteUser(data);
		} catch (e) {
			alert(e);
		}
	}

	async openChat(chatId: string, chatTitle: string) {
		Store.setState("messages", null);

		Store.setState("currentChatId", chatId);
		Store.setState("currentChatTitle", chatTitle);

		try {
			const res = await this._api.getChatId(chatId);
			const parseResponse = JSON.parse(res.response);
			const token = parseResponse.token;
			const userId = String((Store.getState().user as ProfileResponseData).id);

			MessageController.openSocketConnection({ userId, chatId, token });
		} catch (e) {
			alert(e);
		}
	}
}

export default new UserController();
