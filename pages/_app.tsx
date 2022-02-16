import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { Htag } from '../components';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Создание NextJS приложения</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <Component {...pageProps} />
            <Htag tag="h1">хуесос</Htag>
        </>
    );
}

export default MyApp;
