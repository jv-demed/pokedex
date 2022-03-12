import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import Globals from '../src/styles/Globals';
import Typography from '../src/styles/Typography';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Pokédex</title>
            </Head>
            <ThemeProvider theme={Theme}>
                <Globals />
                <Typography />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}