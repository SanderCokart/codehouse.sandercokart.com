import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html className="sm:scroll-smooth">
            <Head lang="en"/>
            <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white transition-colors">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}