import Globals from '../src/styles/Globals';

export default function App({ Component, pageProps }){
    return(
        <>
            <Globals />
            <Component {...pageProps} />
        </>
    )
}