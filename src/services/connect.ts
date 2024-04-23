import { ProfileResponseData } from "../api/types";
import Block from "../core/Block";
import { Indexed } from "../types";
import isEqual from "../utils/isEqual";
import Store, { StoreEvents } from "./Store";

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

export const withAvatar = connect((state: Record<string, unknown>) => {
	const userState = state.user as ProfileResponseData;

	if (!userState || !userState.avatar) {
		return {
			avatarUrl: "",
		};
	}
	return {
		avatarUrl: userState.avatar,
	};
});

export const withAvatarAndName = connect((state) => {
	const userState = state.user as ProfileResponseData;

	if (userState) {
		return {
			avatarURL: userState.avatar,
			name: userState.first_name,
		};
	} else {
		return {
			avatarURL: "",
			name: "",
		};
	}
});
