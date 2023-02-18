import {ThemeToggle} from '@/components/ThemeToggle';

import {DesktopNavigation} from '@/layouts/RootLayout';

export default function Header() {
    return (
        <section
            className="mx-auto flex max-w-7xl items-center overflow-hidden p-1 text-3xl font-bold text-white font-[LetsGoDigital] justify-evenly md:justify-between">
            <h1>
                <a className="flex flex-col items-end leading-none drop-shadow-lg group" href="#hero">
                    <span className="block transition-colors group-hover:text-secondaryLight">Sander's CodeHouse</span>
                    <span className="block text-lg transition-colors">Let's Code...</span>
                </a>
            </h1>
            <DesktopNavigation/>
            <ThemeToggle/>
        </section>
    );
}