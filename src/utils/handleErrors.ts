import { validation } from "./validation";

export function clearError(parentElement?: HTMLElement | null) {
	if (!parentElement) {
		return;
	}

	const error = parentElement.querySelector(".error");
	if (error) {
		error.remove();
	}
}

export function createError(error: string) {
	const div = document.createElement("div");
	div.classList.add("error");
	div.textContent = error;
	return div;
}

export function deleteAndRenderError(input: HTMLInputElement) {
	const parentElement = input.parentElement;
	clearError(parentElement);

	const rule = validation[input.name];
	const error = rule(input.value);
	if (parentElement && error !== "") {
		const divError = createError(error);
		parentElement.insertAdjacentElement("beforeend", divError);
	}
}

export function hasError(input: HTMLInputElement) {
	const rule = validation[input.name];
	return rule(input.value);
}
