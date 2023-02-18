import type {FlagComponent} from 'country-flag-icons/react/3x2';
import {NL, GB, US} from 'country-flag-icons/react/3x2';
import {AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import {useRouter} from 'next/router';

import BasicAnimation from '@/components/FramerMotion/BasicAnimation';

import {descendVariant} from '@/constants/animations/ascendAndDecend';

const Flags: { [key: string]: FlagComponent } = {
    nl: NL,
    en: () => <span className="flex items-center gap-4"><GB className="h-5"/><span className="border-r-2 border-white h-5"/><US className="h-5"/></span>
};

export default function LocaleSwitcher() {
    const { asPath, locale: activeLocale = 'en', pathname, query } = useRouter();
    const Flag = Flags[activeLocale];

    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 100).toUTCString()}`;
    };

    return (
        <div className="min-w-[94px] flex justify-center">
            <AnimatePresence mode="wait">
                {activeLocale === 'en' && (
                    <BasicAnimation key="en" variants={descendVariant}>
                        <Link as={asPath} href={{ pathname, query }} locale="nl" onClick={() => setLocale('nl')}>
                            <Flag className="h-10"/>
                        </Link>
                    </BasicAnimation>
                )}

                {activeLocale === 'nl' && (
                    <BasicAnimation key="nl" variants={descendVariant}>
                        <Link as={asPath} href={{ pathname, query }} locale="en" onClick={() => setLocale('en')}>
                            <Flag className="h-10"/>
                        </Link>
                    </BasicAnimation>
                )}

            </AnimatePresence>
        </div>
    );
}