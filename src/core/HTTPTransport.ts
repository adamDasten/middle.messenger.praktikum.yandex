enum METHODS {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PUT = "PUT",
}

type Options = {
	headers: Record<string, string>;
	timeout: number;
	method: METHODS;
	data: object;
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: object) {
	// Можно делать трансформацию GET-параметров в отдельной функции
	let str = "?";

	Object.entries(data).forEach(([key, value]) => {
		str += `${key}=${value.toString()}&`;
	});

	str = str.substring(0, str.length - 1);

	return str;
}

function checkIfNeedQueries<T>(url: string, method: METHODS, data: T) {
	if (method === METHODS.GET && data) {
		return url + queryStringify(data);
	}
	return url;
}

export class HTTPTransport {
	get = (url: string, options = {} as Options) => {
		return this.request(
			url,
			{ ...options, method: METHODS.GET },
			options.timeout
		);
	};

	// PUT, POST, DELETE
	put = (url: string, options = {} as Options) => {
		return this.request(
			url,
			{ ...options, method: METHODS.PUT },
			options.timeout
		);
	};

	post = (url: string, options = {} as Options) => {
		return this.request(
			url,
			{ ...options, method: METHODS.POST },
			options.timeout
		);
	};

	delete = (url: string, options = {} as Options) => {
		return this.request(
			url,
			{ ...options, method: METHODS.DELETE },
			options.timeout
		);
	};

	request = (url: string, options: Options, timeout = 5000) => {
		const { method, data, headers = {} } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});

			const newUrl = checkIfNeedQueries(url, method, data);
			xhr.open(method, newUrl);

			xhr.timeout = timeout;
			xhr.onerror = reject;

			xhr.onload = () => {
				resolve(xhr);
			};

			xhr.ontimeout = reject;

			if (method === METHODS.GET || !data) {
				xhr.send();
				return;
			}

			xhr.send(JSON.stringify(data));
		});
	};
}
