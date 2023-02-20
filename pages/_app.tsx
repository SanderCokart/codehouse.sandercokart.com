import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import type {PropsWithChildren} from 'react';

import localFont from '@next/font/local';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider} from 'next-themes';
import Head from 'next/head';

import RootLayout from '@/layouts/RootLayout';

const fontLetsGoDigital = localFont({ src: '../public/fonts/LetsGoDigital.ttf', variable: '--fontLetsGoDigital', weight: '400', style: 'normal' });

function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${fontLetsGoDigital.variable} font-sans`}>
            <Providers>
                <RootLayout>
                    <Head>
                        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport"/>
                    </Head>
                    <Component {...pageProps} />
                </RootLayout>
            </Providers>
        </div>
    );
}

export default appWithTranslation(MyApp);