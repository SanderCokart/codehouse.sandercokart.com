import c from 'classnames';
import {GB, NL} from 'country-flag-icons/react/3x2';
import {useRouter} from 'next/router';

export default function LocaleSwitcher({ className, ...props }: JSX.IntrinsicElements['div']) {
    const { locale: activeLocale = 'en', pathname, query, replace } = useRouter();

    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 100).toUTCString()}`;
        replace({ pathname, query }, { pathname, query }, { locale });
    };

    return (
        <div className={c('min-w-[94px] flex gap-2 justify-center pointer-events-none [&:hover_>_*:hover]:opacity-100 [&:hover_>_*]:opacity-50 [&_>_*]:pointer-events-auto', className)} {...props}>
            <GB className={c(
                'cursor-pointer transition-opacity',
                {
                    'opacity-50': activeLocale !== 'en',
                    'cursor-not-allowed': activeLocale === 'en'
                }
            )}
                onClick={() => setLocale('en')}/>
            <div className="border-r-2 !opacity-100"/>
            <NL className={c(
                'cursor-pointer transition-opacity',
                {
                    'opacity-50': activeLocale !== 'nl',
                    'cursor-not-allowed': activeLocale === 'nl'
                }
            )}
                onClick={() => setLocale('nl')}/>
        </div>
    );
}