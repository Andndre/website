import Link from 'next/link';

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
						<Link href={e[1]}>
							<a
								key={'navitem ' + e[0] + i}
								className={e[1] === pathname ? 'active' : ''}
							>
								{e[0]}
							</a>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
