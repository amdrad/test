import { Suspense, useState } from "react";
import ArtistPage from "../ArtistPage.js";

export default function SuspenseFallback() {
	const [page, setPage] = useState("/");

	const content =
		page === "/" ? (
			<IndexPage navigate={navigate} />
		) : (
			<ArtistPage
				artist={{
					id: "Dev-Team",
					name: "Dev Team",
				}}
			/>
		);

	function navigate(url) {
		setPage(url);
	}

	return (
		<Suspense key={"suspenseFallback"} fallback={<BigSpinner />}>
			<Layout>{content}</Layout>
		</Suspense>
	);
}

function IndexPage({ navigate }) {
	return <button onClick={() => navigate("/Dev")}>Click to See Us!</button>;
}

function BigSpinner() {
	return <h2>🌀 Loading...</h2>;
}

function Layout({ children }) {
	return (
		<div className="layout2">
			<section className="header2">Dev Team</section>
			<main>{children}</main>
		</div>
	);
}
