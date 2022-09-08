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
						<Link key={'navitem ' + e[0] + i} href={e[1]}>
							<a className={e[1] === pathname ? 'active' : ''}>{e[0]}</a>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
