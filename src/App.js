import SuspenseFallback from "./components/SuspenseFallBack.js";
import SuspenseTransition from "./components/SuspenseTransition.js";

export default function App() {
	return (
		<>
			<SuspenseFallback />
			<br />
			<SuspenseTransition />
		</>
	);
}
