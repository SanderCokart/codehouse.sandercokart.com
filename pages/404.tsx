import type {GetStaticProps} from 'next';

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Error from 'next/error';

const _404 = ({ title }: { title: string }) => {
    return <Error statusCode={404} title={title}/>;
};

export default _404;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    return {
        props: {
            ...await (serverSideTranslations(locale, ['common'])),
            title: locale === 'en' ? 'Page not found' : 'Pagina niet gevonden'
        }
    };
};