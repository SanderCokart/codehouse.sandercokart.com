/**@type {import('next-i18next').UserConfig}*/
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'nl'],
    },
    fallbackLng: 'en',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};