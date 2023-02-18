import {ThemeToggle} from '@/components/ThemeToggle';

import {DesktopNavigation} from '@/layouts/RootLayout';

export default function Header() {
    return (
        <section
            className="mx-auto overflow-hidden font-[LetsGoDigital] text-3xl text-white flex max-w-4xl items-center justify-center md:justify-between p-4 font-bold">
            <h1>
                <a className="flex items-center gap-2 drop-shadow-lg" href="#hero">
                    Sander's CodeHouse
                </a>
            </h1>
            <DesktopNavigation/>
            <ThemeToggle/>
        </section>
    );
}