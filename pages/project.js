import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Agung Andre - Project</title>
				<meta name="description" content="Agung Andre's project" />
				<link rel="icon" type="image/jpeg" href="/favicon.jpeg" />
			</Head>
			<NavBar pathname="/project"></NavBar>
			<h1 className="center">Project page coming soon</h1>
		</>
	);
}
