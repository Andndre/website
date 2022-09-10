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
						<a className="image-container">
							<img className="logo-circle" src="favicon.jpg" alt="logo" />
						</a>
					</Link>
					<div className="nav-items desktop">
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
				</div>
				<Link href="https://www.github.com/Andndre">
					<a className="image-container">
						<img className="logo-circle" src="/github.png" alt="logo" />
					</a>
				</Link>
			</div>
			<div className="nav-items mobile">
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
		</nav>
	);
}
