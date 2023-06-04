import type {ComponentProps} from 'react';

import Link from 'next/link';

import LocaleSwitcher from '@/components/LangaugeSwitcher';
import {ThemeToggle} from '@/components/ThemeToggle';

export default function Header({ children, ...restOfProps }: ComponentProps<'section'>) {
    return (
        <section {...restOfProps}>
            <h1 className="justify-self-start whitespace-nowrap font-digital">
                <Link className="flex flex-col text-base drop-shadow-lg group" href="/#hero">
                    <span className="block transition-colors !leading-none text-base  sm:text-3xl  group-hover:text-secondaryLight">Sander's CodeHouse</span>
                    <span className="block self-end !leading-none text-xs  sm:text-xl transition-colors">Let's Code...</span>
                </Link>
            </h1>
            {children}
            <LocaleSwitcher className="mx-2 justify-self-end"/>
            <ThemeToggle className="mx-2 justify-self-end text-2xl"/>
        </section>
    );
}