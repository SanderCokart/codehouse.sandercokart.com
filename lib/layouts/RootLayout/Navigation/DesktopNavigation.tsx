import {useTranslation} from 'next-i18next';

export default function DesktopNavigation(props: JSX.IntrinsicElements['nav']) {
    const { t } = useTranslation();

    return (
        <nav aria-label="main"  {...props}>
            <a className="hover:opacity-70 leading-none" href="#portfolio">{t('nav:portfolio')}</a>
            <a className="hover:opacity-70 leading-none" href="#techstack">{t('nav:tech-stack')}</a>
            <a className="hover:opacity-70 leading-none" href="#testimonials">{t('nav:testimonials')}</a>
            <a className="hover:opacity-70 leading-none" href="#contact">{t('nav:contact')}</a>
        </nav>
    );
}