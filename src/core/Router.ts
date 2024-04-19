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

	use(pathname: string, block: typeof Block) {
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

		if (!route) {
			this.go("/404");
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
		return this.routes.find((route) => route._pathname.match(pathname));
	}
}
