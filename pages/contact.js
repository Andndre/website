import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Agung Andre - Contact</title>
				<meta name="description" content="Agung Andre's contact" />
				<link rel="icon" type="image/jpeg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/contact"></NavBar>
			<main className="container">
				<h1 className="center">Contact page coming soon</h1>
			</main>
		</>
	);
}
