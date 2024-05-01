import { ProfileResponseData } from "../api/types";
import Block from "../core/Block";
import { Indexed } from "../types";
import isEqual from "../utils/isEqual";
import Store, { StoreEvents } from "./Store";
import profileSvg from "../../static/profile_placeholder.svg";
import {
	ContentMessage,
	ContentEmpty,
} from "../feature/Chat/pages/MessagePage/Content";

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
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

export const withChatTemplate: Function = connect((state) => {
	return {
		content: state?.currentChatId ? ContentMessage : ContentEmpty,
	};
});
