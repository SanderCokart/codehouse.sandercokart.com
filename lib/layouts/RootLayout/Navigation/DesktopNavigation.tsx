import {useTranslation} from 'next-i18next';

export default function DesktopNavigation() {
    const { t } = useTranslation(['common']);

    return (
        <nav aria-label="main" className="space-x-8 text-2xl hidden md:block">
            <a className="hover:opacity-70" href="#techstack">{t('common:nav.tech-stack')}</a>
            <a className="hover:opacity-70" href="#testimonials">{t('common:nav.testimonials')}</a>
            <a className="hover:opacity-70" href="#contact">{t('common:nav.contact')}</a>
        </nav>
    );
}