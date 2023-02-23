import type {ReactNode} from 'react';

import {motion} from 'framer-motion';
import {useTranslation} from 'next-i18next';

import useMediaQuery from '@/hooks/useMediaQuery';

export default function Testimonials() {
    const { t } = useTranslation();
    return (
        <section className="section"
                 id="testimonials">
            <h2 className="title">
                {t('nav:testimonials')}
            </h2>
            <div className="sm:p-6">
                <Quote author="Sythe Veenje - adequaat.nl">
                    Sander is een ambitieuze programmeur aan het begin van zijn carrière. Sander is technisch erg goed en kan snel schakelen. We zouden Sander zeker nog eens inhuren.
                </Quote>
            </div>
        </section>
    );
}

interface QuoteProps {
    author: string;
    children: ReactNode;
}

function Quote({ children, author }: QuoteProps) {
    const isMobile = useMediaQuery({ from: 'md', option: 'down' });

    return (
        <motion.figure className="my-12 px-4 pointer-events-none lg:pointer-events-auto"
                       initial={{ opacity: 0, scale: 0 }}
                       transition={{ opacity: { duration: 1.5 }, scale: { duration: .5 } }}
                       viewport={{ once: true, margin: isMobile ? '0px' : '-33%' }}
                       whileInView={{ opacity: 1, scale: 1 }}>
            <motion.div viewport={{ margin: '-45%' }} whileInView={{ scale: 1.1 }}>
                <blockquote className="rounded-3xl transition-colors bg-primary dark:bg-transparent">
                    <p className="relative before:absolute before:w-14 before:h-14 before:content-['\201C'] before:font-serif before:grid before:place-items-start before:text-7xl before:md:text-9xl before:top-0 before:left-0 before:text-secondaryLight after:absolute after:w-14 after:h-14 after:content-['\201D'] after:font-serif after:grid after:place-items-end after:text-7xl after:md:text-9xl after:bottom-0 after:right-0 after:text-secondaryLight">
                    <span className="block py-16 italic font-bold text-center md:text-left md:p-12 text-left text-2xl text-white sm:text-3xl">
                        {children}
                    </span>
                    </p>
                </blockquote>
                <figcaption
                    className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                    &#8212; {author}
                </figcaption>
            </motion.div>
        </motion.figure>
    );
}
