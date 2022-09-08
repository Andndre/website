import Footer from './Footer';

export default function PageWrapper({ children }) {
	return (
		<>
			<main className="page-wrapper">{children}</main>
			<Footer />
		</>
	);
}
