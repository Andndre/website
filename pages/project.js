import Head from 'next/head';
import NavBar from '../components/NavBar';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
	return (
		<>
			<Head>
				<title>Agung Andre - Project</title>
				<meta name="description" content="Agung Andre's project" />
				<link rel="icon" type="image/jpeg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/project"></NavBar>
			<PageWrapper>
				<h1 className="center">Project page coming soon</h1>
			</PageWrapper>
		</>
	);
}
