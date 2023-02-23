import c from 'classnames';
import {GB, NL} from 'country-flag-icons/react/3x2';
import {useRouter} from 'next/router';

import useLocale from '@/hooks/useLocale';

export default function LocaleSwitcher({ className, ...props }: JSX.IntrinsicElements['div']) {
    const { locale: activeLocale } = useRouter();
    const { setLocale } = useLocale();

    return (
        <div className={c('min-w-[94px] flex gap-2 justify-center pointer-events-none [&:hover_>_*:hover]:opacity-100 [&:hover_>_*]:opacity-50 [&_>_*]:pointer-events-auto', className)} {...props}>
            <GB className={c(
                'cursor-pointer transition-opacity h-5 md:h-7',
                {
                    'opacity-50': activeLocale !== 'en',
                    'cursor-not-allowed': activeLocale === 'en'
                }
            )}
                onClick={() => setLocale('en')}/>
            <div className="border-r-2 !opacity-100 h-5 md:h-7"/>
            <NL className={c(
                'cursor-pointer transition-opacity h-5 md:h-7',
                {
                    'opacity-50': activeLocale !== 'nl',
                    'cursor-not-allowed': activeLocale === 'nl'
                }
            )}
                onClick={() => setLocale('nl')}/>
        </div>
    );
}