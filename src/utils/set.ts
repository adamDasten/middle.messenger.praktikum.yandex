import { Indexed } from "../api/types";

function set(
	object: Indexed | unknown,
	path: string,
	value: unknown
): Indexed | unknown {
	if (typeof object !== "object" || object === null || !object.constructor) {
		return object;
	}

	function buildObjWithValue(path: string, value: unknown = "") {
		const paths = path.split(".");
		return paths.reduceRight(
			(acc, item, index) => ({
				[item]: index === paths.length - 1 ? value : acc,
			}),
			{}
		);
	}

	function merge(lhs: Indexed, rhs: Indexed): Indexed {
		for (const p in rhs) {
			if (!rhs.hasOwnProperty(p)) {
				continue;
			}
			try {
				if ((rhs[p] as Indexed).constructor === Object) {
					rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
				} else {
					lhs[p] = rhs[p];
				}
			} catch (e) {
				lhs[p] = rhs[p];
			}
		}
		return lhs;
	}
	const rhs = buildObjWithValue(path, value);
	return merge(object as Indexed, rhs);
}

export default set;
