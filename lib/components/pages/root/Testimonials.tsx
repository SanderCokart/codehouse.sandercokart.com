import type {ReactNode} from 'react';

import {motion} from 'framer-motion';
import {useTranslation} from 'next-i18next';

import useMediaQuery from '@/hooks/useMediaQuery';

export default function Testimonials() {
    const { t } = useTranslation();
    return (
        <section className="my-12 scroll-mt-20 p-2 min-h-section sm:p-6"
                 id="testimonials">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                {t('nav:testimonials')}
            </h2>
            <Quote author="Future Markets Liaison">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste pariatur reprehenderit soluta ut!
                Animi atque corporis et exercitationem facilis illum modi porro tempore vel?
            </Quote>
            <Quote author="Mr. Valorie Hettinger Bosco">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur cum cumque dignissimos
                doloribus est, et incidunt <span className="italic">laborum nemo odio odit officiis</span> quas quasi quia
                recusandae repudiandae soluta!
                Autem beatae blanditiis commodi dicta et fugit maiores nobis optio praesentium quibusdam.
            </Quote>
            <Quote author="Jeane Larson">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque commodi distinctio dolorem ea
                error expedita fugit id, <span className="italic">impedit libero, maiores</span> maxime minus modi <q>mollitia
                officiis</q> optio quae quas quo
                ratione rerum sit velit.
            </Quote>
        </section>
    );
}

interface QuoteProps {
    author: string;
    children: ReactNode;
}

function Quote({ children, author }: QuoteProps) {
    const isMobile = useMediaQuery({ from: 'md', option: 'down' });

    const before = `before:absolute before:w-14 before:h-14 before:content-['\\201C'] before:font-serif before:grid before:place-items-start before:text-7xl before:md:text-9xl before:top-0 before:left-0 before:text-secondaryLight`;

    const after = `after:absolute after:w-14 after:h-14 after:content-['\\201D'] after:font-serif after:grid after:place-items-end after:text-7xl after:md:text-9xl after:bottom-0 after:right-0 after:text-secondaryLight`;

    return (
        <motion.figure className="my-12 px-4 pointer-events-none lg:pointer-events-auto"
                       initial={{ opacity: 0, scale: 0 }}
                       transition={{ opacity: { duration: 1.5 }, scale: { duration: .5 } }}
                       viewport={{ once: true, margin: isMobile ? '0px' : '-33%' }}
                       whileInView={{ opacity: 1, scale: 1 }}>
            <motion.div viewport={{ margin: '-45%' }} whileInView={{ scale: 1.1 }}>
                <blockquote className="rounded-3xl transition-colors bg-primary dark:bg-transparent">
                    <p className={`relative ${after} ${before}`}>
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
