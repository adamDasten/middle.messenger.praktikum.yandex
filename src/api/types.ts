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
	onError: (event: ErrorEvent) => void;
	onMessage: (event: MessageEvent) => void;
}

export interface messageFromSocket {
	chat_id: number;
	content: string;
	file: unknown;
	id: number;
	is_read: boolean;
	time: string;
	type: string;
	user_id: number;
}

export type Indexed<T = unknown> = {
	[key in string]: T;
};

export type OptionsToApi = Omit<Options, "method">;
