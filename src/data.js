let cache = new Map();

export function fetchData(url) {
	if (!cache.has(url)) {
		cache.set(url, getData(url));
	}
	return cache.get(url);
}

async function getData(url) {
	if (url === "/Dev-Team/albums") {
		return await getTeams();
	} else if (url === "/DevSHACK/albums") {
		const albums = await getTeams();
		return albums.reverse();
	} else if (url === "/Dev-Team/bio") {
		return await getMemberDetail(
			"The DevSHACK created as the development team of X1 company"
		);
	} else if (url === "/DevSHACK/bio") {
		return await getMemberDetail("This is the another version of DevSHACK");
	} else {
		throw Error("Not implemented");
	}
}

async function getMemberDetail(text) {
	await new Promise((resolve) => {
		setTimeout(resolve, 500);
	});
	return text;
}

async function getTeams() {
	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});

	return [
		{
			id: 13,
			title: "Adam Bussdieker",
			year: 1,
		},
		{
			id: 12,
			title: "Steve Spackman",
			year: 2,
		},
		{
			id: 11,
			title: "Stuart Nelson",
			year: 3,
		},
		{
			id: 10,
			title: "Kurt Allred",
			year: 4,
		},
		{
			id: 9,
			title: "Tien Cu",
			year: 5,
		},
		{
			id: 8,
			title: "Gerson Ortega",
			year: 6,
		},
	];
}
