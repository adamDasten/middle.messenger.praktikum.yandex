import ChatApi from "../api/ChatApi";
import { CreateChatData, IMessage } from "../api/types";
import ChatItem from "../components/ChatItem";
import Store from "../services/Store";

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
					dateTime: item?.last_message?.time,
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

	// TODO: сделать 2 метода
}

export default new UserController();
