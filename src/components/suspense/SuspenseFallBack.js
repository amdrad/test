import { Suspense, useState } from "react";
import MemberPage from "../member/MemberPage.js";
import ButtonNavigate from "../shared/button.js";
import BigSpinner from "../shared/spinner.js";

export default function SuspenseFallback() {
	const [page, setPage] = useState("/");

	const content =
		page === "/" ? (
			<ButtonNavigate
				text="Click to See Us!"
				onClick={() => navigate("/Dev")}
			/>
		) : (
			<MemberPage
				member={{
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

function Layout({ children }) {
	return (
		<div className="layout2">
			<section className="header2">Dev Team</section>
			<main>{children}</main>
		</div>
	);
}
