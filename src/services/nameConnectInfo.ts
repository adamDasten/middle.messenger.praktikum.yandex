import ChatName from "../components/ChatName";
import Store from "./Store";
import { connect } from "./connect";

const withName: Function = connect((state) => {
	if (!state.currentChatTitle) return {};

	return {
		text: state.currentChatTitle,
	};
});
const Name = withName(ChatName);

export const nameChat = new Name({
	text: Store.getState()?.currentChatTitle,
});
