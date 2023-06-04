import type {ComponentType, ComponentProps} from 'react';
import type {IconBaseProps} from 'react-icons';

import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {BsFillLightningFill} from 'react-icons/bs';
import {FaComment, FaEnvelope, FaSuitcase} from 'react-icons/fa';
import {twJoin} from 'tailwind-merge';

interface NavButtonProps {
    href: string,
    Icon: ComponentType<IconBaseProps>,
    text: string
}

const NavButton = ({ Icon, text, href }: NavButtonProps) => (
    <Link className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
       href={href}>
        <Icon className="text-xl"/>
        <span className="text-xs">{text}</span>
    </Link>
);

export default function MobileNavigation(props: ComponentProps<'nav'>) {
    const { t } = useTranslation(['common']);
    return (
        <nav aria-label="mobile"
             {...props} className={twJoin('bg-primaryLight dark:bg-primaryDark font-bold text-white', props.className)}>
            <NavButton Icon={FaSuitcase} href="/#portfolio" text={t('nav:portfolio')}/>
            <NavButton Icon={BsFillLightningFill} href="/#techstack" text={t('nav:tech-stack')}/>
            <NavButton Icon={FaComment} href="/#testimonials" text={t('nav:testimonials')}/>
            <NavButton Icon={FaEnvelope} href="/#contact" text={t('nav:contact')}/>
        </nav>
    );
}