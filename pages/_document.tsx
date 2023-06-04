import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head lang="en"/>
            <body className="min-h-screen-dynamic bg-zinc-50 mb-[56px] md:mb-0 dark:bg-zinc-900 text-black dark:text-white transition-colors">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}