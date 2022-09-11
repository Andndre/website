import Head from 'next/head';
import NavBar from '../components/NavBar';
import PageWrapper from '../components/PageWrapper';
import Section from '../components/Section';

export default function Home() {
	return (
		<>
			<Head>
				<title>Agung Andre - Blog</title>
				<meta name="description" content="Agung Andre's blog" />
				<link rel="icon" type="image/jpeg" href="/favicon.jpg" />
			</Head>
			<NavBar pathname="/blog"></NavBar>
			<PageWrapper>
				<Section>Hi</Section>
			</PageWrapper>
		</>
	);
}
