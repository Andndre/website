import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Agung Andre</title>
				<meta name="description" content="Agung Andre's website" />
				<link rel="icon" type="image/jpeg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/"></NavBar>
			<h1 className="center">Home page coming soon</h1>
		</>
	);
}
