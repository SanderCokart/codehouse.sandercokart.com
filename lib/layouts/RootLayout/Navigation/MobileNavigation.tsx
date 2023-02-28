import type {ComponentType} from 'react';
import type {IconBaseProps} from 'react-icons';

import {useTranslation} from 'next-i18next';
import {BsFillLightningFill} from 'react-icons/bs';
import {FaComment, FaEnvelope, FaSuitcase} from 'react-icons/fa';

interface NavButtonProps {
    href: string,
    Icon: ComponentType<IconBaseProps>,
    text: string
}

const NavButton = ({ Icon, text, href }: NavButtonProps) => (
    <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
       href={href}>
        <Icon className="text-xl"/>
        <span className="text-xs">{text}</span>
    </a>
);

export default function MobileNavigation() {
    const { t } = useTranslation(['common']);
    return (
        <nav aria-label="mobile"
             className="flex md:hidden fixed bottom-0 left-0 w-full bg-primaryLight dark:bg-primaryDark font-bold text-white">
            <NavButton Icon={FaSuitcase} href="#portfolio" text={t('nav:portfolio')}/>
            <NavButton Icon={BsFillLightningFill} href="#techstack" text={t('nav:tech-stack')}/>
            <NavButton Icon={FaComment} href="#testimonials" text={t('nav:testimonials')}/>
            <NavButton Icon={FaEnvelope} href="#footer" text={t('nav:contact')}/>
        </nav>
    );
}