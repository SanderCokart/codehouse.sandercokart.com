import type {ReactNode} from 'react';

import {motion} from 'framer-motion';

import useMediaQuery from '@/hooks/useMediaQuery';

export default function Testimonials() {
    return <section className="p-6 my-12 scroll-mt-20 min-h-mobile md:min-h-desktop"
                    id="testimonials">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
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
    </section>;
}

interface QuoteProps {
    author: string;
    children: ReactNode;
}

function Quote({ children, author }: QuoteProps) {
    const isMobile = useMediaQuery({ from: 'md', option: 'down' });

    return (
        <motion.figure className="my-12"
                       initial={{ opacity: 0, scale: 0 }}
                       transition={{ opacity: { duration: 1.5 }, scale: { duration: .5 } }}
                       viewport={{ once: true, margin: isMobile ? '0px':'-33%' }}
                       whileHover={{ scale: 1.1 }}
                       whileInView={{ opacity: 1, scale: 1 }}>
            <blockquote className="bg-green-700 dark:bg-transparent pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:transform after:-translate-x-2 after:-translate-y-2 dark:before:text-green-400 dark:after:text-green-400">
                    {children}
                </p>
            </blockquote>
            <figcaption
                className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                &#8212; {author}
            </figcaption>
        </motion.figure>
    );
}
