import { fetchData } from "./data.js";

export default function Teams({ memberID }) {
	const teams = use(fetchData(`/${memberID}/albums`));
	return (
		<ul>
			{teams.map((team) => (
				<li key={team.id}>
					{team.title} ({team.year})
				</li>
			))}
		</ul>
	);
}

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
