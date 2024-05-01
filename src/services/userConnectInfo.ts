import UserItem from "../components/UserItem";
import UsersList from "../components/UsersList";
import Store from "./Store";
import { connect } from "./connect";

const withUsers: Function = connect((state) => {
	if (!state.userSearchRes) return {};

	return {
		items: state.userSearchRes,
	};
});
const UserListWrapper = withUsers(UsersList);

export const usersList = new UserListWrapper({
	items: Store.getState()?.userSearchRes as UserItem[],
});
