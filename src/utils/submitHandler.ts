import { deleteAndRenderError, hasError } from "./handleErrors";

export const submitHandler = (e: Event, element: HTMLElement | null) => {
	e.preventDefault();

	if (!element) return null;

	const childs = element.querySelectorAll("input");

	childs?.forEach((input) => {
		deleteAndRenderError(input);
	});

	const arrayOfChilds = Array.from(childs);

	const notValid = arrayOfChilds.some((input) => {
		return hasError(input);
	});

	if (!notValid) {
		const obj = arrayOfChilds.reduce(
			(acc: Record<string, string>, next: HTMLInputElement) => {
				acc[next.name] = next.value;
				return acc;
			},
			{}
		);

		return obj;
	}

	return null;
};
