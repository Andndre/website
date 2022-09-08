export default function Section({ children, id }) {
	return (
		<section id={id}>
			<div className="container">{children}</div>
		</section>
	);
}
