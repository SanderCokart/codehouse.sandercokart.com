import {useTranslation, Trans} from 'next-i18next';
import Image from 'next/image';

import LogoINV from '@/public/static/images/PNG/Logo-INV.png';
import Logo from '@/public/static/images/PNG/Logo.png';

export default function Hero() {
    const { t } = useTranslation(['common']);
    return (
        <section
            className="z-10 dark:drop-shadow-dark min-h-section mx-auto mb-12 flex max-w-4xl scroll-mt-40 flex-col items-center justify-center gap-8 p-6 md:flex-row"
            id="hero">
            <article className="md:w-7/12 flex-none">
                <h2 className="max-w-md text-center text-4xl font-bold uppercase sm:text-left sm:text-5xl">
                    <Trans i18nKey="home:hero.title">
                        We build <span className="text-secondaryLight dark:text-secondaryLight">websites and webapps</span> for you.
                    </Trans>
                </h2>
                <p className="mt-4 max-w-md text-center text-xl italic font-bold sm:text-left">
                    {t('home:hero.description')}
                </p>
                <p className="mt-4 max-w-md text-center text-xl text-secondary font-bold dark:text-secondaryLight sm:text-left cursor-pointer hover:opacity-70">
                    <a href="#contact">{t('home:hero.contact')}</a>
                </p>
            </article>
            <div className="grid place-items-center -order-1 md:order-none">
                <Image priority alt="Logo" className="dark:hidden w-1/2 md:w-full" src={LogoINV}/>
                <Image priority alt="Logo" className="hidden dark:block w-1/2 md:w-full" src={Logo}/>
            </div>
        </section>
    );
}
