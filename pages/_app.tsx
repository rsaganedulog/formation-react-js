import type {AppProps} from 'next/app'
import {useState} from "react";

export default function App({Component, pageProps}: AppProps) {
    const [app, setApp] = useState({
        email: '',
        password: ''
    });

    return <Component {...pageProps} />
}