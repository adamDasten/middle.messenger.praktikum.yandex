"/auth/signup";
"/auth/signin";
"/auth/user";
"/auth/logout";

import HTTPTransport from "../core/HTTPTransport";
import {
	ChangePasswordRequest,
	ProfileRequestData,
	SearchUserRequest,
} from "./types";

enum URLS {
	CHANGE_PROFILE_DATA = "/user/profile",
	CHANGE_AVATAR = "/user/profile/avatar",
	CHANGE_PASSWORD = "/user/password",
	SEARCH_USERS = "/user/search",
}

export default class UserApi {
	changeProfileData(data: ProfileRequestData) {
		const payload = {
			payload: data,
		};
		return HTTPTransport.put(URLS.CHANGE_PROFILE_DATA, payload);
	}

	changePassword(data: ChangePasswordRequest) {
		return HTTPTransport.put(URLS.CHANGE_PASSWORD, { payload: data });
	}

	changeAvatar(data: FormData) {
		return HTTPTransport.put(URLS.CHANGE_AVATAR, { payload: data });
	}

	searchUserByLogin(data: SearchUserRequest) {
		return HTTPTransport.post(URLS.SEARCH_USERS, { payload: data });
	}
}
