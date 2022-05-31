import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter();

	return (
		<div className="bg-gray-900 min-h-screen flex flex-col">
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>

			<Header />

			{router.pathname === "/" && <Showcase />}
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: "DJ Events | Find the hottest parties",
	description: "Find the latest DJ and other musical events",
	keywords: "music, dj, edm, events",
};
