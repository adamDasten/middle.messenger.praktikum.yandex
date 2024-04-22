import renderDOM from "../utils/renderPage";
import Block from "./Block";

export class Route {
	_pathname: string;
	_block: Block;
	_isFirstRender: boolean = true;

	constructor(pathname: string, view: Block) {
		this._pathname = pathname;
		this._block = view;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	match(pathname: string) {
		return pathname === this._pathname;
	}

	render() {
		if (this._isFirstRender) {
			renderDOM(this._block);
			this._isFirstRender = false;
			return;
		}

		this._block.show();
	}
}
