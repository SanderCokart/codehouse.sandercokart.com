import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {FaEnvelope, FaPhone, FaMap, FaGithub, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';

const Address = () => {
    const { t } = useTranslation();
    return (
        <address>
            <span className="flex items-center gap-1"><FaMap/> Adres:</span>
            <span>
                        <h2>Sander's CodeHouse</h2>
                         <Link className="hover:opacity-70" href="mailto:sandercokart.business@gmail.com">{t('footer:request-address')}</Link><br/>
                    </span>

            <hr className="my-2 border-black dark:border-white"/>

            <span className="flex items-center gap-1"><FaEnvelope/>{t('common:email')}:</span>
            <Link className="hover:opacity-70" href="mailto:sandercokart.business@gmail.com">sandercokart.business@gmail.com</Link>

            <hr className="my-2 border-black dark:border-white"/>

            <span className="flex items-center gap-1"><FaPhone/>{t('footer:phone')}:</span>
            <Link className="hover:opacity-70" href="mailto:sandercokart.business@gmail.com">{t('footer:request-phone')}</Link>

            <hr className="my-2 border-black dark:border-white"/>

            <div className="flex flex-col justify-evenly md:justify-between">
                <span>{t('footer:KvK')}: 89270738</span>
                <span>{t('footer:BTW')}: NL004710701B39</span>
            </div>
        </address>
    );
};

const Copyright = () => {
    const { t } = useTranslation();
    const date = new Date().getFullYear();
    return (
        <p className="text-center text-sm md:text-xl">
            {t('footer:copyright', { date })}
        </p>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="flex flex-col justify-center font-mono text-lg text-white bg-primaryLight fond-bold dark:bg-primaryDark"
                id="footer">
            <section className="mx-auto flex gap-32 p-8 text-base sm:text-xl">
                <Address/>

                <nav aria-label="footer" className="hidden flex-col gap-2 md:flex">
                    <Link className="hover:opacity-70" href="/#portfolio">{t('nav:portfolio')}</Link>
                    <Link className="hover:opacity-70" href="/#techstack">{t('nav:tech-stack')}</Link>
                    <Link className="hover:opacity-70" href="/#testimonials">{t('nav:testimonials')}</Link>
                    <Link className="hover:opacity-70" href="/#contact">{t('nav:contact')}</Link>
                </nav>

            </section>
            <section className="mx-auto my-8">
                <Copyright/>
            </section>

            <section className="flex gap-8 mx-auto mb-4 text-4xl">
                <Link className="hover:text-secondaryLight transition-colors" href="https://github.com/sandercokart">
                    <FaGithub/>
                </Link>
                <Link className="hover:text-secondaryLight transition-colors" href="https://www.instagram.com/sandercokart/">
                    <FaInstagram/>
                </Link>
                <Link className="hover:text-secondaryLight transition-colors" href="https://youtube.com/SanderCokart">
                    <FaYoutube/>
                </Link>
                <Link className="hover:text-secondaryLight transition-colors" href="https://twitter.com/sandercokart">
                    <FaTwitter/>
                </Link>
            </section>
        </footer>
    );
};

export default Footer;