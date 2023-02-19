import {useTranslation} from 'next-i18next';

export default function DesktopNavigation(props: JSX.IntrinsicElements['nav']) {
    const { t } = useTranslation(['common']);

    return (
        <nav aria-label="main"  {...props}>
            <a className="hover:opacity-70 leading-none" href="#techstack">{t('common:nav.tech-stack')}</a>
            <a className="hover:opacity-70 leading-none" href="#techstack">Portfolio</a>
            <a className="hover:opacity-70 leading-none" href="#testimonials">{t('common:nav.testimonials')}</a>
            <a className="hover:opacity-70 leading-none" href="#contact">{t('common:nav.contact')}</a>
        </nav>
    );
}