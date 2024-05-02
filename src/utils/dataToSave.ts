import { ProfileResponseData } from "../api/types";
import { BASE_URL } from "../consts/consts";
import Store from "../services/Store";

export const dataToSave = (data: ProfileResponseData) => {
	Store.setState("user", {
		...data,
		avatar: data.avatar ? `${BASE_URL}/resources${data.avatar}` : null,
	});
};
