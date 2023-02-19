import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import type {PropsWithChildren} from 'react';

import {appWithTranslation} from 'next-i18next';
import {ThemeProvider} from 'next-themes';
import Head from 'next/head';

import RootLayout from '@/layouts/RootLayout';

function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <RootLayout>
                <Head>
                    <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport"/>
                </Head>
                <Component {...pageProps} />
            </RootLayout>
        </Providers>
    );
}

export default appWithTranslation(MyApp);