import { ProfileResponseData } from "../api/types";
import Block from "../core/Block";
import { Indexed } from "../types";
import isEqual from "../utils/isEqual";
import Store, { StoreEvents } from "./Store";
import profileSvg from "../../static/profile_placeholder.svg";

import read from "#/static/read.svg";
import optionsSvg from "#/static/options.svg";
import addFile from "#/static/add_svg.svg";
import arrowGo from "#/static/arrow_next.svg";
import UsersList from "../components/UsersList";
import UserItem from "../components/UserItem";
import Message from "../components/Message";
import FormDialog from "../components/FormDialog";
import DialogInput from "../components/DialogInput";
import Talking from "../components/Talking";
import EmptyTalk from "../components/EmptyTalk";

function connect(mapStateToProps: (state: Indexed) => Indexed) {
	return function (Component: typeof Block) {
		return class extends Component {
			constructor(tag: string, props: Record<string, unknown> | undefined) {
				let state = mapStateToProps(Store.getState());

				super(tag, { ...props, ...state });

				Store.on(StoreEvents.EVENT_UPDATE, () => {
					const newState = mapStateToProps(Store.getState());
					if (!isEqual(state, newState)) {
						this.setProps({ ...newState });
					}

					state = newState;
				});
			}
		};
	};
}

export const withAvatar: Function = connect(
	(state: Record<string, unknown>) => {
		const userState = state.user as ProfileResponseData | undefined;

		if (!userState || !userState.avatar) {
			return {
				avatar: null,
			};
		}

		return {
			avatar: userState.avatar,
		};
	}
);

export const withAvatarAndName: Function = connect(
	(state: Record<string, unknown>) => {
		const userState = state.user as ProfileResponseData | undefined;

		if (!userState) {
			return {
				avatar: profileSvg,
				name: "Неизвестно",
			};
		}

		if (!userState.avatar) {
			return {
				avatar: profileSvg,
				name: userState.first_name,
			};
		}

		return {
			avatar: userState.avatar,
			name: userState.first_name,
		};
	}
);

export const withName: Function = connect((state: Record<string, unknown>) => {
	const userState = state.user as ProfileResponseData | undefined;

	return {
		attr: {
			value: userState?.first_name,
		},
	};
});

export const withSecondName: Function = connect(
	(state: Record<string, unknown>) => {
		const userState = state.user as ProfileResponseData | undefined;

		return {
			attr: {
				value: userState?.second_name,
			},
		};
	}
);

export const withEmail: Function = connect((state: Record<string, unknown>) => {
	const userState = state.user as ProfileResponseData | undefined;

	return {
		attr: {
			value: userState?.email,
		},
	};
});

export const withLogin: Function = connect((state: Record<string, unknown>) => {
	const userState = state.user as ProfileResponseData | undefined;

	return {
		attr: {
			value: userState?.login,
		},
	};
});

export const withPhone: Function = connect((state: Record<string, unknown>) => {
	const userState = state.user as ProfileResponseData | undefined;

	return {
		attr: {
			value: userState?.phone,
		},
	};
});

export const withUsers: Function = connect((state) => {
	if (!state.userSearchRes) return {};

	return {
		items: state.userSearchRes,
	};
});

export const withDispayName: Function = connect(
	(state: Record<string, unknown>) => {
		const userState = state.user as ProfileResponseData | undefined;

		return {
			attr: {
				value: userState?.display_name,
			},
		};
	}
);

export const withChatItems: Function = connect((state) => {
	if (!state.chats) {
		return {};
	}
	return {
		items: state.chats,
	};
});

// TODO: Сделать в будущем рефакторинг, сейчас нельзя тк если вынести компоненты - конфликт импортов

export const withChatTemplate: Function = connect((state) => {
	const UserListWrapper = withUsers(UsersList);

	const usersList = new UserListWrapper({
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

	const ContentMessage = new Talking({
		messages,
		optionsSvg,
		username: "Вадим",
		form,
		users: usersList,
	});

	const ContentEmpty = new EmptyTalk({
		text: "Выберите чат чтобы отправить сообщение",
	});

	if (!state.currentChatId) {
		return {};
	}

	return {
		content: state.currentChatId ? ContentMessage : ContentEmpty,
	};
});
