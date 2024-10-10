import { fetchData } from "./data.js";

export default function MemberDetail({ memberID }) {
	const detail = use(fetchData(`/${memberID}/memberDetail`));
	return (
		<section>
			<p className="bio">{detail}</p>
		</section>
	);
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
	if (promise.status === "fulfilled") {
		return promise.value;
	} else if (promise.status === "rejected") {
		throw promise.reason;
	} else if (promise.status === "pending") {
		throw promise;
	} else {
		promise.status = "pending";
		promise.then(
			(result) => {
				promise.status = "fulfilled";
				promise.value = result;
			},
			(reason) => {
				promise.status = "rejected";
				promise.reason = reason;
			}
		);
		throw promise;
	}
}
