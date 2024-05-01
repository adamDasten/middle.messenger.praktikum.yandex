import UserApi from "../api/UserApi";
import {
	ChangePasswordRequest,
	ProfileRequestData,
	ProfileResponseData,
	SearchUserRequest,
} from "../api/types";
import Store from "../services/Store";
import { dataToSave } from "../utils/dataToSave";

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
			const getData = JSON.parse(response) as ProfileResponseData;

			dataToSave(getData);
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

			await this._api.changePassword(payload);
		} catch (e) {
			alert(e);
		}
	}

	async changeAvatar(data: FormData | null) {
		try {
			if (!data) throw Error("Неправильно обновлена картинка");

			const res = await this._api.changeAvatar(data);
			const getData = JSON.parse(res.response) as ProfileResponseData;

			dataToSave(getData);
		} catch (e) {
			alert(e);
		}
	}

	async searchByLogin(data: Record<string, string> | null) {
		try {
			if (!data) throw Error("Неправильно данные по поиску");

			const payload: SearchUserRequest = {
				login: data.login,
			};

			const res = await this._api.searchUserByLogin(payload);

			const parseData = JSON.parse(res.response);

			Store.setState("userSearchRes", parseData as ProfileResponseData[]);
		} catch (e) {
			alert(e);
		}
	}
}

export default new UserController();
