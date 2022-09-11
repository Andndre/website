export default function Section({ children, id, outerClass, innerClass }) {
	return (
		<section id={id} className={outerClass}>
			<div className={'container ' + (innerClass ?? '')}>{children}</div>
		</section>
	);
}
