import SuspenseFallback from "./components/suspense/SuspenseFallBack.js";
import SuspenseTransition from "./components/suspense/SuspenseTransition.js";

export default function App() {
	return (
		<>
			<SuspenseFallback />
			<br />
			<SuspenseTransition />
		</>
	);
}
