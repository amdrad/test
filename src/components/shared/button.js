import Button from "react-bootstrap/Button";

export default function ButtonNavigate({ text, onClick, variant = "primary" }) {
	return (
		<Button variant={variant} onClick={onClick}>
			{text}
		</Button>
	);
}
