import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NavBar({ pathname }) {
	const [navOpen, setNavOpen] = useState(false);
	const routes = [
		['Home', '/'],
		['Blog', '/blog'],
		['Project', '/project'],
		['Contact', '/contact'],
	];
	const router = useRouter();
	const changePageHandler = (ev, e) => {
		// do not push new history when the pathname was not in the routes (pathname)
		// reason: to prevent the user have to press "back" button so many times just
		// because of switching tabs back and forth
		if (!routes.find((el) => el[1] === router.pathname)) return;
		ev.preventDefault();
		window.history.replaceState(null, '', e[1]);
		router.reload();
	};
	return (
		<nav id="nav-bar">
			<div className="container">
				<div className="nav-item-left">
					<div className="flex">
						<Link href="/">
							<a className="image-container">
								<Image
									width={30}
									height={30}
									className="logo-circle"
									src="/favicon.jpg"
									alt="logo"
								/>
							</a>
						</Link>
						<svg
							onClick={() => {
								setNavOpen((prev) => !prev);
							}}
							className="hamburger mobile"
							width="33"
							height="26"
							viewBox="0 0 33 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.94971 2.94971H31"
								stroke="black"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.94971 13.4686H31"
								stroke="black"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.94971 23.9874H31"
								stroke="black"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div className="nav-items desktop">
						{routes.map((e, i) => {
							return (
								<Link key={'navitem ' + e[0] + i} href={e[1]}>
									<a
										className={e[1] === pathname ? 'item active' : 'item'}
										onClick={(ev) => changePageHandler(ev, e)}
									>
										{e[0]}
									</a>
								</Link>
							);
						})}
					</div>
				</div>
				<Link href="https://www.github.com/Andndre">
					<a className="image-container">
						<Image
							width={30}
							height={30}
							className="logo-circle"
							src="/github.png"
							alt="logo"
						/>
					</a>
				</Link>
			</div>
			<div className={'nav-items mobile' + (navOpen ? ' open' : '')}>
				{routes.map((e, i) => {
					return (
						<Link key={'navitem ' + e[0] + i} href={e[1]}>
							<a
								className={e[1] === pathname ? 'item active' : 'item'}
								onClick={(ev) => changePageHandler(ev, e)}
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
