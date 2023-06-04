import type {ReactNode} from 'react';

import {twJoin} from 'tailwind-merge';

import {Header, ScrollProgressIndicator, Footer, MobileNavigation, DesktopNavigation} from '@/layouts/RootLayout/index';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="sticky top-0 z-nav bg-primaryLight dark:bg-primaryDark shadow-2xl">
                <Header className={twJoin(
                    'mx-auto sm:min-h-[68px] overflow-hidden',
                    'font-bold text-white',
                    'px-4 py-2',
                    'max-w-xl 3xl:max-w-7xl',
                    'grid grid-cols-[auto,110px,40px] md:grid-cols-[auto,1fr,110px,40px] place-items-center gap-4'
                )}>
                    <DesktopNavigation className="hidden font-digital flex-wrap justify-center gap-x-8 gap-y-1 justify-self-center text-2xl md:flex"/>
                    <ScrollProgressIndicator/>
                    <MobileNavigation className="flex md:hidden fixed bottom-0 left-0 w-full"/>
                </Header>
            </div>
            {children}
            <Footer/>
        </>
    );
};

export default RootLayout;