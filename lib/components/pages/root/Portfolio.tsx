import {useTranslation} from 'next-i18next';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import {useRef} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {useModal} from 'react-simple-modal-provider';

import NawijzerAdmin from '@/public/static/images/portfolio/nawijzer-admin.png';
import NaWijzerQuestionnaire from '@/public/static/images/portfolio/nawijzer-questionnaire.png';

function Figure({ figure: { caption, image } }: { figure: { image: StaticImageData, caption: string } }) {
    const { open: openLightbox } = useModal('lightbox');

    //16:9 960x540

    return (
        <figure className="relative min-w-full snap-center">
            <Image alt={caption}
                   className="pointer-events-none cursor-pointer transition-transform md:pointer-events-auto"
                   height="540"
                   src={image}
                   width="960"
                   onClick={() => openLightbox({ image })}
            />
            <figcaption className="absolute right-0 bottom-0 left-0 md:w-min md:whitespace-nowrap mx-auto overflow-clip rounded-t-full px-4 py-1 text-center text-xs font-bold text-black text-white bg-primaryLight/75 dark:bg-primaryDark/75 dark:text-white md:px-8 md:py-2 md:text-base">
                {caption}
            </figcaption>
        </figure>
    );
}

interface ProjectProps {
    figures: { image: StaticImageData, caption: string }[];
    title: string;
    description: string;
}

function Project({ project: { title, figures, description } }: { project: ProjectProps }) {
    const ref = useRef<HTMLDivElement>(null);
    const scrollNext = () => {
        if (ref.current) {
            ref.current.scrollBy({
                left: ref.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrev = () => {
        if (ref.current) {
            ref.current.scrollBy({
                left: -ref.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <article className="min-w-full snap-center p-6">
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">{title}</h3>
            <div className="relative">

                <button className="absolute top-16 bottom-16 left-0 z-10 rounded-r-full p-2 text-xs text-white bg-primaryLight/75 dark:bg-primaryDark/75 sm:text-base md:top-20 md:bottom-20 md:text-lg" name="Previous image" type="button" onClick={scrollPrev}>
                    <FaArrowLeft/>
                </button>

                <div ref={ref} className="relative z-0 flex snap-x snap-mandatory overflow-x-auto drop-shadow-primary">
                    {figures.map(figure => (
                        <Figure key={figure.image.src} figure={figure}/>
                    ))}
                </div>

                <button className="absolute top-16 right-0 bottom-16 z-20 rounded-l-full p-2 text-xs text-white bg-primaryLight/75 dark:bg-primaryDark/75 sm:text-base md:top-20 md:bottom-20 md:text-lg" name="Next image" type="button" onClick={scrollNext}>
                    <FaArrowRight/>
                </button>

            </div>
            <p className="mt-6 text-base font-bold md:text-lg md:font-normal">{description}</p>
        </article>
    );
}

const Portfolio = () => {
    const { t } = useTranslation();
    return (
        <section className="section" id="portfolio">
            <h2 className="title">{t('nav:portfolio')}</h2>
            <div className="flex snap-x snap-mandatory overflow-x-auto">
                <Project project={{
                    figures: [
                        { image: NaWijzerQuestionnaire, caption: t('home:project.nawijzer.caption-1') },
                        { image: NawijzerAdmin, caption: t('home:project.nawijzer.caption-2') }
                    ],
                    title: 'NaWijzer.nl',
                    description: t('home:project.nawijzer.description')
                }}/>
            </div>
        </section>
    );
};

export default Portfolio;