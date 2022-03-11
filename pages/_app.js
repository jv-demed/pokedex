import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import Globals from '../src/styles/Globals';
import Typography from '../src/styles/Typography';

export default function App({ Component, pageProps }){
    return(
        <>
            <ThemeProvider theme={Theme}>
                <Globals />
                <Typography />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}