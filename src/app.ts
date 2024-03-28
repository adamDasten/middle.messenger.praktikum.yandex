import { Path, routes } from "./consts/routes";
import "./styles/index.scss";
import renderDOM from "./utils/renderPage";

document.addEventListener("DOMContentLoaded", () => {
	const location = window.location.pathname as Path;
	const currentRoute = routes[location] ?? routes[Path.FOURTY];
	renderDOM(currentRoute);
});
