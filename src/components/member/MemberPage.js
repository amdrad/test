import { Suspense } from "react";
import Teams from "../Teams.js";
import MemberDetail from "./MemberDetail.js";

function Panel({ children }) {
	return <section className="panel">{children}</section>;
}

export default function MemberPage({ member }) {
	return (
		<>
			<h1>{member.name}</h1>
			<MemberDetail memberID={member.id} />
			<Suspense fallback={<MemberGlimmer />}>
				<Panel>
					<Teams memberID={member.id} />
				</Panel>
			</Suspense>
		</>
	);
}

function MemberGlimmer() {
	return (
		<div className="glimmer-panel">
			<div className="glimmer-line" />
			<div className="glimmer-line" />
			<div className="glimmer-line" />
		</div>
	);
}
