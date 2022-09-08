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
				<div className="nav-item-left">
					<Link href="/">
						<a>
							<img className="logo-circle" src="favicon.jpg" alt="logo" />
						</a>
					</Link>
					{routes.map((e, i) => {
						return (
							<Link key={'navitem ' + e[0] + i} href={e[1]}>
								<a className={e[1] === pathname ? 'item active' : 'item'}>
									{e[0]}
								</a>
							</Link>
						);
					})}
				</div>
				<Link href="https://www.github.com/Andndre">
					<a>
						<img className="logo-circle" src="/github.png" alt="logo" />
					</a>
				</Link>
			</div>
		</nav>
	);
}
