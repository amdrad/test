import { Suspense, useState, useTransition } from "react";
import ArtistPage from "../ArtistPage.js";

export default function SuspenseTransition() {
	const [page, setPage] = useState("/");
	const [isPending, startTransition] = useTransition();

	function navigate(url) {
		startTransition(() => {
			setPage(url);
		});
	}

	const content =
		page === "/" ? (
			<IndexPage navigate={navigate} />
		) : (
			<ArtistPage
				key={"suspenseTransition"}
				artist={{ id: "DevSHACK", name: "DevSHACK" }}
			/>
		);

	return (
		<Suspense fallback={<BigSpinner />}>
			<Layout isPending={isPending}>{content}</Layout>
		</Suspense>
	);
}

function IndexPage({ navigate }) {
	return (
		<button onClick={() => navigate("/the-beatles")}>
			Click to See Our Members!
		</button>
	);
}

function BigSpinner() {
	return <h2>🌀 Loading...</h2>;
}

function Layout({ children, isPending }) {
	return (
		<div className="layout">
			<section
				className="header"
				style={{
					opacity: isPending ? 0.7 : 1,
				}}
			>
				DevShack
			</section>
			<main>{children}</main>
		</div>
	);
}
