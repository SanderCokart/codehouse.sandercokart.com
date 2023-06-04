'use client';
import {ThemeProvider} from 'next-themes';
import {ModalProvider} from 'react-simple-modal-provider';

import {Lightbox} from '@/components/modals';

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <ModalProvider value={[Lightbox]}>
                {children}
            </ModalProvider>
        </ThemeProvider>
    );
}