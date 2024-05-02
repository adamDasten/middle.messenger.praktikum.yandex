import { messageFromSocket } from "../api/types";
import Message from "../components/Message";
import { connect } from "./connect";

export const withMessages: Function = connect((state) => {
	if (!state.messages) {
		return {};
	}
	return {
		messages: (state.messages as messageFromSocket[]).map(
			(item) =>
				new Message({
					content: item.content,
					time: new Date(item.time).toLocaleTimeString().substring(0, 5),
				})
		),
	};
});
