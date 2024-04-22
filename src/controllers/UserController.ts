import UserApi from "../api/UserApi";
import {
	ChangePasswordRequest,
	ProfileRequestData,
	SearchUserRequest,
} from "../api/types";
import Store from "../services/Store";

class UserController {
	private _api: UserApi;

	constructor() {
		this._api = new UserApi();
	}

	async changeProfile(data: Record<string, string> | null) {
		try {
			if (!data) throw Error("Невалидные значения при смене данных");

			const validateData: ProfileRequestData = {
				login: data.login,
				display_name: data.display_name,
				email: data.email,
				first_name: data.first_name,
				phone: data.phone,
				second_name: data.second_name,
			};

			const { response } = await this._api.changeProfileData(validateData);
      
			Store.setState("user", JSON.parse(response));
		} catch (e) {
			alert(e);
		}
	}

	async changePassword(data: Record<string, string> | null) {
		try {
			if (!data) throw Error("Неправильно заполнен пароль");

			const payload: ChangePasswordRequest = {
				oldPassword: data.oldPassword,
				newPassword: data.newPassword,
			};

			// TODO: в стейт?

			await this._api.changePassword(payload);
		} catch (e) {
			alert(e);
		}
	}

	async changeAvatar(data: FormData | null) {
		try {
			if (!data) throw Error("Неправильно заполнен пароль");

			//  TODO: проверить аватар
			await this._api.changeAvatar(data);
		} catch (e) {
			alert(e);
		}
	}

	async searchByLogin(data: Record<string, string> | null) {
		try {
			if (!data) throw Error("Неправильно заполнен пароль");

			const payload: SearchUserRequest = {
				login: data.login,
			};

			const res = await this._api.searchUserByLogin(payload);

			Store.setState("userSearchRes", JSON.parse(res.response));
		} catch (e) {
			alert(e);
		}
	}
}

export default new UserController();
