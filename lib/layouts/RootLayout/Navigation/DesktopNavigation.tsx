import {useTranslation} from 'next-i18next';
import Link from 'next/link';

export default function DesktopNavigation(props: JSX.IntrinsicElements['nav']) {
    const { t } = useTranslation();

    return (
        <nav aria-label="main"  {...props}>
            <Link className="hover:text-secondaryLight leading-none" href="/#portfolio">{t('nav:portfolio')}</Link>
            <Link className="hover:text-secondaryLight leading-none" href="/#techstack">{t('nav:tech-stack')}</Link>
            <Link className="hover:text-secondaryLight leading-none" href="/#testimonials">{t('nav:testimonials')}</Link>
            <Link className="hover:text-secondaryLight leading-none" href="/#contact">{t('nav:contact')}</Link>
        </nav>
    );
}