import Head from 'next/head';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PageWrapper from '../components/PageWrapper';
import Section from '../components/Section';

export default function Home() {
	const [hero, setHero] = useState('');
	const heros = [
		'"Hello, world!" My name is Andre',
		'I am a web developer',
		'I am a frontend developer',
		'I am a backend developer',
		'I am an UI/UX designer',
		'I am a 3d artist (kind of)',
	];

	useEffect(() => {
		setHero('');
		const delayPeriod = 15;
		let currentIndex = 0;
		let current = '';
		let currentCharIndex = 0;
		let isDeleting = false;
		let decrementedDelayPeriod = delayPeriod;
		const interval = setInterval(() => {
			// console.table({
			// 	currentIndex,
			// 	currentCharIndex,
			// 	isDeleting,
			// 	decrementedDelayPeriod,
			// });
			const currentHero = heros[currentIndex];
			if (currentCharIndex === currentHero.length) {
				isDeleting = true;
			}
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
			console.log('appending');
			const currentChar = currentHero[currentCharIndex];
			current = current + currentChar;
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
				<link rel="icon" type="image/jpeg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/"></NavBar>
			<PageWrapper>
				<Section id="hero">
					<h1>{hero}</h1>
				</Section>
			</PageWrapper>
		</>
	);
}
