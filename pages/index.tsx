import type {GetStaticProps} from 'next';

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Line from '@/components/Line';
import Hero from '@/components/pages/root/Hero';
import Portfolio from '@/components/pages/root/Portfolio';
import TechStack from '@/components/pages/root/TechStack';
import Testimonials from '@/components/pages/root/Testimonials';

const HomePage = () => {

    return (
        <>
            <Head>
                <meta
                    content="Sander's CodeHouse is a web development company based in the Netherlands. We create websites and web applications for small and medium sized businesses as well as individuals."
                    lang="en" name="description"/>
                <meta
                    content="Sander's CodeHouse is een web development bedrijf gevestigd in Nederland. Wij maken websites en web applicaties voor kleine en middelgrote bedrijven zowel als particulieren."
                    lang="nl" name="description"/>

                <meta content="all" property="audience"/>
                <meta
                    content="Sander's CodeHouse, Sander Cokart, web-dev, web-development, website-ontwikkelaar, websites, ict, web development, web development company, web development bedrijf, web development nederland, web development netherlands, web development company netherlands, web development company nederland, web development company in netherlands, web development com, laravel developer, laravel developer netherlands, laravel developer nederland, laravel developer in netherlands, laravel developer in nederland, laravel developer company, laravel developer company netherlands, laravel developer company nederland, laravel developer company in netherlands, laravel developer company, nextjs developer, nextjs developer netherlands, nextjs developer nederland, nextjs developer in netherlands, nextjs developer in nederland, nextjs developer company, nextjs developer company netherlands, nextjs developer company nederland, nextjs developer company in netherlands, nextjs developer company, react developer, react developer netherlands, react developer nederland, react developer in netherlands, react developer in nederland, react developer company, react developer company netherlands, react developer company nederland, react developer company in netherlands, react developer company, vue developer, vue developer netherlands, vue developer nederland, vue developer in netherlands, vue developer in nederland, vue developer company, vue developer company netherlands, vue developer company nederland, vue developer company in netherlands, vue developer company, web developer, web developer netherlands, web developer nederland, web developer in netherlands, web developer in nederland, web developer company, web developer company netherlands, web developer company nederland, web developer company in netherlands, web developer company, web development company, web development company netherlands, web development company nederland, web development company in netherlands, web development company, web development bedrijf, web development bedrijf netherlands, web development bedrijf nederland, web development bedrijf in netherlands, web development bedrijf, web development nederland, web development netherlands, web development company netherlands, web development company nederland, web development company in netherlands, web development com, laravel developer, laravel developer netherlands, laravel developer nederland, laravel developer in netherlands, laravel developer in nederland, laravel developer company, laravel developer company netherlands, laravel developer company nederland, laravel developer company in netherlands, laravel developer company, nextjs developer, nextjs developer netherlands, nextjs developer nederland, nextjs developer in netherlands, nextjs developer in nederland, nextjs developer company, nextjs developer company netherlands, nextjs developer company nederland, nextjs developer company in netherlands, nextjs developer company, react developer, react developer netherlands, react developer nederland, react developer in netherlands, react developer in nederland, react developer company, react developer company netherlands, react developer company nederland, react developer company in netherlands, react developer company, vue developer, vue developer netherlands, vue developer nederland, vue developer in netherlands, vue developer in nederland, vue developer company, vue developer company netherlands, vue developer company, react developer company in netherlands, vue developer company, web developer, web developer netherlands, web developer nederland, web developer in netherlands, web developer in nederland, web developer company, web developer company netherlands, web developer company nederland, web developer company in netherlands, web developer company, web development company, web development company netherlands, web development company nederland, web development company in netherlands, web development company, web development bedrijf, web development bedrijf netherlands, web development bedrijf nederland, web development bedrijf in netherlands, web development bedrijf, web development nederland, web development netherlands, web development company netherlands, web development company nederland, web development company in netherlands, web development com, laravel developer, laravel developer netherlands, laravel developer nederland, laravel developer in netherlands, laravel developer in nederland, laravel developer company, laravel developer company netherlands, laravel developer company nederland, laravel developer company in netherlands, laravel developer company, nextjs developer, nextjs developer netherlands, nextjs developer nederland, nextjs developer in netherlands, nextjs developer in nederland, nextjs developer company, nextjs developer company netherlands, nextjs developer company nederland, nextjs developer company in netherlands, nextjs developer company, react developer, react developer netherlands, react developer nederland, react developer in netherlands, react developer in nederland, react developer company, react developer company netherlands, react developer company nederland, react developer company in netherlands, react developer company, vue developer, vue developer netherlands, vue developer nederland, vue developer in netherlands, vue developer in nederland, vue developer company, vue developer company netherlands, vue developer company, react developer company in netherlands, vue developer company, web developer, web developer netherlands, web developer nederland, web developer in netherlands, web developer in nederland, web developer company, web developer company netherlands, web developer company nederland, web developer company in netherlands, web developer company, web development company, web development company netherlands, web development company nederland, web development company in netherlands, web development company, web development bedrijf, web development bedrijf netherlands, web development bedrijf nederland, web development bedrijf in netherlands, web development bedrijf, web development nederland, web development netherlands, web development company netherlands, web development company nederland, web development"
                    property="keywords"/>

                <meta content=" Sander's CodeHouse is a web development company based in the Netherlands. We create websites and web applications for small and medium sized businesses as well as individuals." lang="en" property="og:description"/>
                <meta content="Sander' s CodeHouse is een web development bedrijf gevestigd in Nederland. Wij maken websites en web applicaties voor kleine en middelgrote bedrijven zowel als particulieren." lang=" nl" property=" og:description"/>
                <meta content=" Sander's CodeHouse" property="og:title"/>
                <meta content="website" property="og:type"/>
                <meta content="https://codehouse.sandercokart.com" property="og:url"/>
                <meta content="/static/images/logo/Logo.png" property="og:image"/>

                <meta content="summary_large_image" name="twitter:card"/>
                <meta content="@SanderCokart" name="twitter:site"/>
                <meta content="@SanderCokart" name="twitter:creator"/>
                <meta content="Sander' s CodeHouse" name=" twitter:title"/>
                <meta content=" Sander's CodeHouse is a web development company based in the Netherlands. We create websites and web applications for small and medium sized businesses as well as individuals." lang="en" name="twitter:description"/>
                <meta content="Sander' s CodeHouse is een web development bedrijf gevestigd in Nederland. Wij maken websites en web applicaties voor kleine en middelgrote bedrijven zowel als particulieren." lang=" nl" name=" twitter:description"/>
                <meta content=" https://codehouse.sandercokart.com/static/images/logo/Logo.png" name="twitter:image"/>


                <meta content="dPDNIWNVFj_4vuPMESyYIF--2WitrHLfPQe2CTcz-Ok" name="google-site-verification"/>
                <meta content="#6d28d9" name="theme-color"/>

                <link href="https://codehouse.sandercokart.com/nl" hrefLang="nl" rel="alternate"/>
                <link href="https://codehouse.sandercokart.com" hrefLang="en" rel="alternate"/>
                <title> Sander's CodeHouse</title>
            </Head>
            <div className="relative z-0">
                <Hero/>

                <Line/>

                <Portfolio/>

                <Line/>

                <TechStack/>

                <Line/>

                {/*<Diensten prices={prices} tags={tags}/>*/}

                {/*<Line/>*/}

                <Testimonials/>

                {/*<Line/>*/}

                {/*<ContactUs/>*/}

            </div>
        </>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['nav', 'common', 'footer', 'home']))
        }
    };
};