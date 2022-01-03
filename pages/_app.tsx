import Head from "next/head";
import { useEffect } from "react";
import { reduxWrapper } from "../store/wrapper";
import "bootstrap/dist/css/bootstrap.css";
// import '../styles/tailwind.css'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		function handleResize() {
			const doc = document.documentElement;
			doc.style.setProperty("--app-height", `${window.innerHeight}px`);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<Head>
				<title>Bridge Up Test</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default reduxWrapper.withRedux(MyApp);
