const {i18n} = require('./next-i18next.config');

//list of all 2 letter language codes except nl and en
const lang = ['fr', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'hi', 'bn', 'pa', 'ta', 'te', 'ml', 'mr', 'ur', 'gu', 'kn', 'or', 'as', 'sa', 'si', 'ne', 'my', 'km', 'lo', 'vi', 'id', 'ms', 'th', 'tr', 'az', 'bg', 'cs', 'da', 'el', 'et', 'fi', 'he', 'hu', 'is', 'lt', 'lv', 'mk', 'no', 'pl', 'ro', 'sk', 'sl', 'sv', 'uk', 'ur', 'vi', 'zh'];

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    trailingSlash: true,
    // redirects: async () => {
    //     return [
    //         {
    //             source: `/\(${lang.join('|')}\)/`,
    //             destination: '/',
    //             permanent: false
    //         }
    //     ];
    // }
};

module.exports = nextConfig;
