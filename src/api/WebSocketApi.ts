import { SOCKET_URL } from "../consts/consts";
import { WebSocketEvents, WebSocketProps } from "./types";

export interface SocketSendData {
	content: string;
	type: string;
}

export default class WebSocketFactory {
	socket: WebSocket;
	events: WebSocketEvents;

	constructor(data: WebSocketProps, events: WebSocketEvents) {
		this.events = events;
		const { userId, chatId, token } = data;
		this.socket = new WebSocket(`${SOCKET_URL}/${userId}/${chatId}/${token}`);

		this.socket.addEventListener("open", this.events.onOpen);
		this.socket.addEventListener("message", this.events.onMessage);
		this.socket.addEventListener("error", this.events.onError);
		this.socket.addEventListener("close", this.events.onClose);
	}

	send(data: SocketSendData) {
		return this.socket.send(JSON.stringify(data));
	}

	close() {
		return this.socket.close();
	}
}
