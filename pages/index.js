import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PageWrapper from '../components/PageWrapper';
import Section from '../components/Section';

export default function Home() {
	const heros = [
		'I am a frontend developer',
		'I am a backend developer',
		'I am an UI/UX designer',
		'I am a 3d artist',
	];
	const [hero, setHero] = useState(heros[0]);
	useEffect(() => {
		const delayPeriod = 8;
		let currentIndex = 0;
		let current = heros[currentIndex];
		let currentCharIndex = heros[currentIndex].length - 1;
		let isDeleting = true;
		let decrementedDelayPeriod = delayPeriod;
		const interval = setInterval(() => {
			const currentHero = heros[currentIndex];
			if (currentCharIndex === currentHero.length) {
				isDeleting = true;
			}
			// somehow the algorithm adds one extra space after " a"
			// when currentIndex = 1 at the first time,
			// so the `current` will equal to "I am a  backend developer"
			// (Idk why)
			// this should fix the issue (LOL)
			current = current.replace('  ', ' ');
			if (isDeleting) {
				if (--decrementedDelayPeriod > 0) {
					return;
				}
				current = current.substring(0, current.length - 1);
				setHero(current);
				if (
					--currentCharIndex === 0 ||
					heros[(currentIndex + 1) % heros.length].startsWith(current)
				) {
					isDeleting = false;
					decrementedDelayPeriod = delayPeriod;
					currentIndex++;
					currentIndex %= heros.length;
				}
				return;
			}
			const currentChar = currentHero[currentCharIndex];
			current += currentChar;
			setHero(current);
			currentCharIndex++;
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			<Head>
				<title>Agung Andre</title>
				<meta name="description" content="Agung Andre's website" />
				<link rel="icon" type="image/jpg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/"></NavBar>
			<PageWrapper>
				<Section id="hero">
					<h1>
						Hello, world! My name is Andre
						<br />
						<span>{hero}</span>
						<svg
							className="down-arrow"
							width="67"
							height="39"
							viewBox="0 0 67 39"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.07777 2.13423C3.00369 1.20859 4.25934 0.688599 5.56859 0.688599C6.87783 0.688599 8.13348 1.20859 9.0594 2.13423L33.5 26.5749L57.9407 2.13423C58.8719 1.23483 60.1191 0.737153 61.4137 0.748402C62.7083 0.759652 63.9467 1.27893 64.8621 2.19438C65.7776 3.10983 66.2969 4.34822 66.3081 5.64281C66.3194 6.93741 65.8217 8.18463 64.9223 9.11586L36.9908 37.0473C36.0649 37.9729 34.8093 38.4929 33.5 38.4929C32.1908 38.4929 30.9351 37.9729 30.0092 37.0473L2.07777 9.11586C1.15214 8.18994 0.632141 6.93429 0.632141 5.62504C0.632141 4.3158 1.15214 3.06015 2.07777 2.13423V2.13423Z"
								fill="black"
							/>
						</svg>
					</h1>
				</Section>
				<Section id={'about-me'}>
					<div className="section-flex-reverse">
						<div className="right">
							<h2>About Me</h2>
							<p>
								My name is <span>Agung Andre</span>, most commonly known as{' '}
								<span>Andre</span>. I am a student who has a passion for
								programming and design. The programming field that interests me
								is the development of <span>web apps</span>,{' '}
								<span>android</span>, and <span>games</span> (which I studied
								are <span>web based</span> games). At the age of 16, when the
								pandemic hit and the students were learning from home, I began
								to learn many things self-taught, such as{' '}
								<span>2d and 3d animation</span>, learning several programming
								languages such as <span>python</span>, <span>javascript</span>{' '}
								(and <span>typescript</span>), <span>java</span>,{' '}
								<span>dart</span>, and <span>c</span>. After I graduated from
								high school, I continued my studies at the Ganesha University of
								Education majoring in Informatics Engineering.
							</p>
						</div>
						<div className="left">
							<Image src="/me.jpg" alt="Andre" width={1936} height={2592} />
						</div>
					</div>
				</Section>
			</PageWrapper>
		</>
	);
}
