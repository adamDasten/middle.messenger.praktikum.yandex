import Component from "../core/Block";

export default function renderDOM(block: Component<object>) {
	const root = document.querySelector("#app");

	if (!root) {
		throw new Error("Нет корневого элемента!");
	}

	root.appendChild(block.getContent());
}
