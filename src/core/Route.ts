import renderDOM from "../utils/renderPage";
import Block from "./Block";

export class Route {
	_pathname: string;
	_blockClass: typeof Block;
	_block: Block | null;

	constructor(pathname: string, view: typeof Block) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
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
		if (!this._block) {
			this._block = new this._blockClass();
			renderDOM(this._block);
			return;
		}

		this._block.show();
	}
}
