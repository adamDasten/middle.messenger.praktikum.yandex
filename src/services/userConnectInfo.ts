import { ProfileResponseData } from "../api/types";
import UserItem from "../components/UserItem";
import UsersList from "../components/UsersList";
import Store from "./Store";
import { connect } from "./connect";

const withUsers: Function = connect((state) => {
	if (!state.userSearchRes) return {};

	return {
		items: (state.userSearchRes as ProfileResponseData[]).map((item) => {
			return new UserItem({
				id: item.id,
				name: item.first_name,
				login: item.login,
			});
		}),
	};
});
const UserListWrapper = withUsers(UsersList);

export const usersList = new UserListWrapper({
	items: Store.getState()?.userSearchRes,
});
