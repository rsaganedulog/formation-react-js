import {Head, Html, Main, NextScript} from 'next/document'
import Link from 'next/link'

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/search">Search</Link>
                </li>
            </ul>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}