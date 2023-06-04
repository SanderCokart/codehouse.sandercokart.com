import GlobalProviders from '@/app/[locale]/(components)/(providers)/GlobalProviders';
import Footer from '@/app/[locale]/(components)/Footer';
import localFont from '@next/font/local';
import {NextIntlClientProvider} from 'next-intl';
import '@/app/globals.scss';
import {notFound} from 'next/navigation';

const fontLetsGoDigital = localFont({
    src:      './(fonts)/LetsGoDigital.ttf',
    variable: '--fontLetsGoDigital',
    weight:   '400',
    style:    'normal',
    preload:  true
});

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}/${locale}.ts`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body className={fontLetsGoDigital.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <GlobalProviders>
                <div className="sticky top-0 z-10 bg-primaryLight dark:bg-primaryDark shadow-2xl">
                    {/*<Header/>*/}
                    {/*<MobileNavigation/>*/}
                    {/*<ScrollProgressIndicator/>*/}
                </div>
                {children}
                <Footer/>
            </GlobalProviders>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    const languages = ['en', 'nl'];
    return languages.map((locale) => ({ locale }));
}