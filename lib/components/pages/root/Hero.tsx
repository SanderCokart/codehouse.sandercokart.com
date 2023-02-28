import {useTranslation, Trans} from 'next-i18next';
import Image from 'next/image';

import LogoINV from '@/public/static/images/logo/Logo-INV.png';
import Logo from '@/public/static/images/logo/Logo.png';

export default function Hero() {
    const { t } = useTranslation(['common']);
    return (
        <section
            className="z-10 mx-auto mb-12 flex max-w-4xl scroll-mt-40 flex-col items-center justify-center gap-8 p-6 min-h-section dark:drop-shadow-dark md:flex-row"
            id="hero">
            <article className="flex-none md:w-7/12">
                <h2 className="max-w-md text-center text-4xl font-bold uppercase sm:text-left sm:text-5xl">
                    <Trans i18nKey="home:hero.title">
                        We build <span className="text-secondaryLight dark:text-secondaryLight">websites and webapps</span> for you.
                    </Trans>
                </h2>
                <p className="mt-4 max-w-md text-center text-xl sm:text-left md:text-2xl">
                    {t('home:hero.description')}
                </p>
                <p className="mt-4 max-w-md cursor-pointer text-center text-xl font-bold text-secondary hover:opacity-70 dark:text-secondaryLight sm:text-left md:text-3xl">
                    <a href="#footer">{t('home:hero.contact')}</a>
                </p>
            </article>
            <div className="-order-1 grid place-items-center md:order-none">
                <Image priority alt="Logo" className="block w-2/3 dark:hidden sm:w-full" src={LogoINV}/>
                <Image priority alt="Logo" className="hidden w-2/3 dark:block sm:w-full" src={Logo}/>
            </div>
        </section>
    );
}
