import authApi from "../core/HTTPTransport";

enum URLS {
	SIGN_UP = "/auth/signup",
	SIGN_IN = "/auth/signin",
	GET_USER = "/auth/user",
	LOG_OUT = "/auth/logout",
}

import { OptionsToApi, SignInRequest, SignUpRequest } from "./types";

export default class AuthApi {
	signIn(data: SignInRequest) {
		const payload: OptionsToApi = {
			payload: data,
		};

		return authApi.post(URLS.SIGN_IN, payload).then((data) => {
			return data;
		}); // Обрабатываем получение данных из сервиса далее
	}

	signUp(data: SignUpRequest) {
		const payload: OptionsToApi = {
			payload: data,
		};

		return authApi.post(URLS.SIGN_UP, payload).then((data) => {
			return data;
		});
	}

	getUser() {
		return authApi.get(URLS.GET_USER).then((data) => {
			return data;
		});
	}

	logout() {
		return authApi.post(URLS.LOG_OUT);
	}
}
