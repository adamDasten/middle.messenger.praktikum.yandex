import WebSocketFactory from "../api/WebSocketApi";
import {
	ProfileResponseData,
	SocketSendData,
	WebSocketEvents,
	WebSocketProps,
} from "../api/types";
import Store from "../services/Store";
import ChatController from "./ChatController";

class MessagesController {
	private _api: WebSocketFactory = new WebSocketFactory(
		{} as WebSocketProps,
		{} as WebSocketEvents
	);
	private _pingIntervalId: number = 0;

	openSocketConnection(data: WebSocketProps) {
		if (this._api) {
			this.closeSocket();
		}
		this._api = new WebSocketFactory(data, {
			onOpen: this.handleSocketOpen.bind(this),
			onClose: this.handleSocketClose.bind(this),
			onError: this.handleSocketError.bind(this),
			onMessage: this.handleSocketMessage.bind(this),
		});
	}

	private _send(data: SocketSendData) {
		this._api.send(data);
	}

	public sendMessage(content: string) {
		this._send({
			content: content,
			type: "message",
		});
	}

	public getOldMessages(offset = 0) {
		this._send({
			content: String(offset),
			type: "get old",
		});
	}

	private _ping() {
		this._send({
			content: "",
			type: "ping",
		});
	}

	closeSocket() {
		clearInterval(this._pingIntervalId);
		this._api.close();
		this._api;
	}

	handleSocketOpen() {
		console.log("Соединение установлено");
		this.setPing();
		this.getOldMessages();
	}

	handleSocketClose(e: CloseEvent) {
		if (e.wasClean) {
			console.log("Соединение закрыто чисто");
		} else {
			console.log("Обрыв соединения");
			console.log(`Код: ${e.code} | Причина: ${e.reason}`);
		}
	}

	handleSocketMessage(e: MessageEvent) {
		try {
			const data = JSON.parse(e.data);
			if (data.type === "pong" || data.type === "user connected") {
				return;
			}
			let messagesState: Array<unknown> = [];
			if (Store.getState().messages instanceof Array) {
				messagesState = messagesState.concat(Store.getState().messages);
			}

			//needed to define message position
			const userId = (Store.getState().user as ProfileResponseData).id;

			//processing old messages load
			if (Array.isArray(data)) {
				messagesState = messagesState.concat(data, userId);
				if (data.length === 20) {
					const ids = data.map((item) => item.id);
					const maxId = Math.max(...ids);
					//won't create a loop, it's async
					this.getOldMessages(maxId);
				}
				//processing new message
			} else {
				messagesState.unshift(data);
				// update the last message content in sidebar dialogue
				// can't use the recieved message, since it doesn't contain sender login/name
				// and requesting it by id would mean the same delay and traffic as getting chats
				ChatController.getChats();
			}
			Store.setState("messages", messagesState);
		} catch (e) {
			console.log(e);
		}
	}

	handleSocketError(e: Event) {
		if (e instanceof ErrorEvent) console.log("Ошибка", e.message);
	}

	setPing() {
		this._pingIntervalId = setInterval(() => {
			this._ping();
		}, 30000);
	}
}
export default new MessagesController();
