import { Indexed } from "../types";

import EventBus from "../core/EventBus";
import set from "../utils/set";

export enum StoreEvents {
	EVENT_UPDATE = "update",
}

class Store extends EventBus {
	private _state: Indexed;
	static RootStore = "RootStore";

	constructor() {
		super();
		this._state = {};
		try {
			this._state = JSON.parse(localStorage.getItem(Store.RootStore) ?? "{}");
		} catch (e) {
			console.warn(e);
		}

		this.on(StoreEvents.EVENT_UPDATE, () => {
			localStorage.setItem(Store.RootStore, JSON.stringify(this._state));
		});

		this.setState("currentChatId", null);
		this.setState("currentChatTitle", null);
	}

	getState() {
		return this._state;
	}

	setState(path: string, value: unknown) {
		set(this._state, path, value);
		this.emit(StoreEvents.EVENT_UPDATE);
	}

	clearState() {
		this._state = {};
		this.emit(StoreEvents.EVENT_UPDATE);
	}
}

export default new Store();
