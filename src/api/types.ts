import { Options } from "../core/HTTPTransport";

export interface SignInRequest {
	login: string;
	password: string;
}

export interface SignUpRequest extends SignInRequest {
	first_name: string;
	second_name: string;
	email: string;
	phone: string;
}

export interface SignUpResponse {
	id: number;
}

export interface ProfileRequestData {
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
}

export interface ProfileResponseData {
	id: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
}

export interface ChangePasswordRequest {
	oldPassword: string;
	newPassword: string;
}

export interface SearchUserRequest {
	login: string;
}

// CHAT

export interface CreateChatData {
	title: string;
}

export interface ChangeUsersInChatData {
	users: string[];
	chatId: string;
}

export interface ChatIdData {
	chatId: string;
}

export interface WebSocketProps {
	userId: string;
	chatId: string;
	token: string;
}

export interface SocketSendData {
	content: string;
	type: string;
}

export interface WebSocketEvents {
	onOpen: () => void;
	onClose: (event: CloseEvent) => void;
	onError: (event: Event) => void;
	onMessage: (event: MessageEvent) => void;
}

export interface messageFromSocketMulti {
	chat_id: number;
	time: string;
	type: string;
	user_id: string;
	content: string;
}

export interface messageFromSocket {
	id: string;
	time: string;
	user_id: string;
	content: string;
	type: string;
}

export interface IMessage {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	created_by: number;
	last_message: {
		user: {
			first_name: string;
			second_name: string;
			avatar: string;
			email: string;
			login: string;
			phone: string;
		};
		time: string;
		content: string;
	};
}

export type Indexed<T = unknown> = {
	[key in string]: T;
};

export type OptionsToApi = Omit<Options, "method">;
