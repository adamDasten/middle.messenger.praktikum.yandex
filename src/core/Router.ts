import { ProfileResponseData } from "../api/types";
import { Path } from "../consts/routes";
import Store from "../services/Store";
import Block from "./Block";
import { Route } from "./Route";

export class Router {
	private static __instance: Router;
	routes: Route[] = [];
	history: History = window.history;
	currentRoute: Route | null = null;

	constructor() {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this.currentRoute = null;

		Router.__instance = this;
	}

	use(pathname: Path, block: Block) {
		const route = new Route(pathname, block);
		this.routes.push(route);

		return this;
	}

	start() {
		window.onpopstate = (event) => {
			const target = event.currentTarget as Window;
			this._onRoute(target.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string) {
		const route = this.getRoute(pathname);

		if (!route || this.currentRoute === route) {
			return;
		}

		if (this.currentRoute) {
			this.currentRoute.leave();
		}

		this.currentRoute = route;
		route?.render();
	}

	go(pathname: string) {
		this.history.pushState({}, "", pathname);
		this._onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}

	getRoute(pathname: string) {
		const userState = Store.getState().user as ProfileResponseData | undefined;

		if (
			!userState &&
			pathname !== Path.REGISTRATION &&
			pathname !== Path.MAIN
		) {
			this.go(Path.MAIN);
			return;
		}

		if (
			(pathname === Path.MAIN || pathname === Path.REGISTRATION) &&
			userState
		) {
			this.go(Path.CHATS);

			return;
		}

		const findedRoute = this.routes.find((route) =>
			route._pathname.match(pathname)
		);

		if (!findedRoute) {
			this.go(Path.FOURTY);
			return;
		}

		return findedRoute;
	}
}

export default new Router();
