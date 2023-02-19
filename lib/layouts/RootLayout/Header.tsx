import LocaleSwitcher from '@/components/LangaugeSwitcher';
import {ThemeToggle} from '@/components/ThemeToggle';

import {DesktopNavigation} from '@/layouts/RootLayout';

export default function Header() {
    return (
        <section
            className="mx-auto gap-4 grid sm:min-h-[68px] place-items-center grid-cols-[auto,1fr,auto,auto] max-w-7xl overflow-hidden px-4 py-2 font-bold text-white font-[LetsGoDigital]">
            <h1 className="">
                <a className="flex flex-col text-base drop-shadow-lg group" href="#hero">
                    <span className="block transition-colors !leading-none text-base  sm:text-3xl  group-hover:text-secondaryLight">Sander's CodeHouse</span>
                    <span className="block self-end !leading-none text-xs  sm:text-xl transition-colors">Let's Code...</span>
                </a>
            </h1>
            <DesktopNavigation className="hidden flex-wrap justify-center gap-x-8 gap-y-1 justify-self-center text-2xl md:flex"/>
            <LocaleSwitcher className="mx-2 justify-self-end"/>
            <ThemeToggle className="mx-2 justify-self-end text-2xl"/>
        </section>
    );
}