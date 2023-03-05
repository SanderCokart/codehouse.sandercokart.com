import c from 'classnames';
import {GB, NL} from 'country-flag-icons/react/3x2';
import Link from 'next/link';
import {useRouter} from 'next/router';

import useLocale from '@/hooks/useLocale';

export default function LocaleSwitcher({ className, ...props }: JSX.IntrinsicElements['div']) {
    const { locale: activeLocale } = useRouter();
    const { setLocale } = useLocale();

    return (
        <div className={c('min-w-[94px] flex gap-2 justify-center pointer-events-none [&:hover_svg:hover]:opacity-100 [&:hover_svg]:opacity-50 [&_svg]:pointer-events-auto', className)} {...props}>
            <Link href="/" hrefLang="en" locale="en" rel="alternate" scroll={false}>
                <GB className={c(
                    'cursor-pointer transition-opacity h-5 md:h-7',
                    {
                        'opacity-50': activeLocale !== 'en',
                        'cursor-not-allowed': activeLocale === 'en'
                    }
                )}
                    onClick={() => setLocale('en')}/>
            </Link>
            <div className="border-r-2 !opacity-100 h-5 md:h-7"/>
            <Link href="/" hrefLang="nl" locale="nl" rel="alternate" scroll={false}>
                <NL className={c(
                    'cursor-pointer transition-opacity h-5 md:h-7',
                    {
                        'opacity-50': activeLocale !== 'nl',
                        'cursor-not-allowed': activeLocale === 'nl'
                    }
                )}
                    onClick={() => setLocale('nl')}/>
            </Link>
        </div>
    );
}