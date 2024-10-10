import { Suspense } from "react";
import Albums from "./Albums.js";
import Biography from "./Biography.js";

function Panel({ children }) {
	return <section className="panel">{children}</section>;
}

export default function ArtistPage({ artist }) {
	return (
		<>
			<h1>{artist.name}</h1>
			<Biography artistId={artist.id} />
			<Suspense fallback={<AlbumsGlimmer />}>
				<Panel>
					<Albums artistId={artist.id} />
				</Panel>
			</Suspense>
		</>
	);
}

function AlbumsGlimmer() {
	return (
		<div className="glimmer-panel">
			<div className="glimmer-line" />
			<div className="glimmer-line" />
			<div className="glimmer-line" />
		</div>
	);
}
