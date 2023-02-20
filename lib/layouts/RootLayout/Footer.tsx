import {useTranslation} from 'next-i18next';
import {FaEnvelope, FaPhone, FaMap} from 'react-icons/fa';

const Address = () => {
    const { t } = useTranslation();
    return (
        <address>
            <span className="flex items-center gap-1"><FaMap/> Adres:</span>
            <span>
                        <h2>Sander's CodeHouse</h2>
                        <a className="hover:opacity-70" href="#contact">
                        {t('footer:request-address')}<br/>
                        </a>
                    </span>

            <hr className="my-2 border-black dark:border-white"/>

            <span className="flex items-center gap-1"><FaEnvelope/>{t('common:email')}:</span>
            <a className="hover:opacity-70" href="mailto:sander@sandercokart.com">sander@sandercokart.com</a>

            <hr className="my-2 border-black dark:border-white"/>

            <span className="flex items-center gap-1"><FaPhone/>{t('footer:phone')}:</span>
            <a className="hover:opacity-70" href="#contact">{t('footer:request-phone')}</a>
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
        <footer className="flex flex-col justify-center font-mono text-lg text-white bg-primaryLight fond-bold dark:bg-primaryDark">
            <section className="mx-auto flex gap-32 p-8 text-base sm:text-xl">
                <Address/>

                <nav aria-label="footer" className="hidden flex-col gap-2 md:flex">
                    <a className="hover:opacity-70" href="#diensten">{t('nav:tech-stack')}</a>
                    <a className="hover:opacity-70" href="#diensten">{t('nav:portfolio')}</a>
                    <a className="hover:opacity-70" href="#testimonials">{t('nav:testimonials')}</a>
                    <a className="hover:opacity-70" href="#contact">{t('nav:contact')}</a>
                </nav>

            </section>
            <section className="mx-auto my-8">
                <Copyright/>
            </section>
        </footer>
    );
};

export default Footer;