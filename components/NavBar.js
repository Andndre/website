export default function NavBar({ pathname }) {
	const routes = [
		['Home', '/'],
		['Blog', '/blog'],
		['Project', '/project'],
		['Contact', '/contact'],
	];
	return (
		<nav id="nav-bar">
			<div className="container">
				{routes.map((e, i) => {
					return (
						<a
							key={'navitem ' + e[0] + i}
							className={e[1] === pathname ? 'active' : ''}
							href={e[1]}
						>
							{e[0]}
						</a>
					);
				})}
			</div>
		</nav>
	);
}
