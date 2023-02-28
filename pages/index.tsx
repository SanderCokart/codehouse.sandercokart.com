import type {GetStaticProps} from 'next';

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Line from '@/components/Line';
import ContactUs from '@/components/pages/root/ContactUs';
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

                <meta content="Sander's CodeHouse" property="og:site_name"/>
                <meta content="Sander's CodeHouse" property="og:title"/>
                <meta content="website" property="og:type"/>
                <meta content="https://codehouse.sandercokart.com" property="og:url"/>
                <meta content="/static/images/logo/Logo.png" property="og:image"/>

                <meta content="#6d28d9" name="theme-color"/>


                <link href="https://codehouse.sandercokart.com/nl" hrefLang="nl" rel="alternate"/>
                <link href="https://codehouse.sandercokart.com" hrefLang="en" rel="alternate"/>
                <title>Sander's CodeHouse</title>
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