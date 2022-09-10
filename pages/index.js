import Head from 'next/head';
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
		const delayPeriod = 15;
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
		}, 50);

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
						{hero}
					</h1>
					<div className="secondary-hero">
						<span>W</span>
						<span>E</span>
						<span>L</span>
						<span>C</span>
						<span>O</span>
						<span>M</span>
						<span>E</span>
						<span> </span>
						<span>T</span>
						<span>O</span>
						<span> </span>
						<span>M</span>
						<span>Y</span>
						<span> </span>
						<span>W</span>
						<span>E</span>
						<span>B</span>
						<span>S</span>
						<span>I</span>
						<span>T</span>
						<span>E</span>
					</div>
				</Section>
				<Section id={'about-me'}>
					<div className="section-flex-reverse">
						<div className="right">
							<h2>About Me</h2>
							<p>
								My name is <span>Agung Andre</span>, most commonly known as{' '}
								<span>André</span>. I am a student who has a passion for
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
						<img src="" alt="" />
					</div>
				</Section>
			</PageWrapper>
		</>
	);
}
