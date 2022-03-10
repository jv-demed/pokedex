import Globals from '../src/styles/Globals';
import Typography from '../src/styles/Typography';

export default function App({ Component, pageProps }){
    return(
        <>
            <Globals />
            <Typography />
            <Component {...pageProps} />
        </>
    )
}