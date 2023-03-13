import 'swiper/scss';
import 'swiper/scss/pagination';
import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import type {PropsWithChildren} from 'react';

import localFont from '@next/font/local';
import axios from 'axios';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider} from 'next-themes';
import Head from 'next/head';
import {ModalProvider} from 'react-simple-modal-provider';

import {Lightbox} from '@/components/modals';

import RootLayout from '@/layouts/RootLayout';

const fontLetsGoDigital = localFont({
    src: '../public/fonts/LetsGoDigital.ttf',
    variable: '--fontLetsGoDigital',
    weight: '400',
    style: 'normal',
    preload: true
});

window.axios = axios;

window.axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
window.axios.defaults.withCredentials = true;

declare global {
    interface Window {
        axios: typeof axios;
    }
}


function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider attribute="class">
            <ModalProvider value={[Lightbox]}>
                {children}
            </ModalProvider>
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
                        <link href="/static/images/logo/Logo.png" rel="icon" type="image/png"/>
                    </Head>
                    <Component {...pageProps} />
                </RootLayout>
            </Providers>
        </div>
    );
}

export default appWithTranslation(MyApp);