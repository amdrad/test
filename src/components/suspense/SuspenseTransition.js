import { Suspense, useState, useTransition } from "react";

import MemberPage from "../member/MemberPage.js";
import ButtonNavigate from "../shared/button.js";
import Spinner from "../shared/spinner.js";

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
			<ButtonNavigate
				text="Click to See Our Members!"
				onClick={() => navigate("/DevSHACK")}
				variant="danger"
			/>
		) : (
			<MemberPage
				key={"suspenseTransition"}
				member={{ id: "DevSHACK", name: "DevSHACK" }}
			/>
		);

	return (
		<Suspense fallback={<Spinner />}>
			<Layout isPending={isPending}>{content}</Layout>
		</Suspense>
	);
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
