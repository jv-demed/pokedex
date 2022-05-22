import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import Globals from '../src/styles/Globals';
import Typography from '../src/styles/Typography';
import Imgs from '../src/assets/Imgs';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="icon" href={Imgs.pokeball}  type="image/icon type" />
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