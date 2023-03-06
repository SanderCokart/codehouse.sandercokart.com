import {useTranslation} from 'next-i18next';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import {FaArrowLeft, FaArrowRight, FaGithub} from 'react-icons/fa';
import {useModal} from 'react-simple-modal-provider';

import useScrollControls from '@/hooks/useScrollControls';

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
            <figcaption className="absolute right-0 bottom-0 left-0 mx-auto overflow-clip rounded-t-full px-4 py-1 text-center text-xs font-bold text-black text-white bg-primaryLight/75 dark:bg-primaryDark/75 dark:text-white md:w-min md:whitespace-nowrap md:px-8 md:py-2 md:text-base">
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
    const { ref, scrollPrev, scrollNext, total, page } = useScrollControls();

    return (
        <article className="min-w-full snap-center p-6">
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">{title}</h3>
            <div className="relative">

                <button className="absolute top-16 bottom-16 left-0 z-10 origin-left rounded-r-full p-2 text-xs text-white transition-all bg-primaryLight/50 enabled:hover:bg-primaryLight/75 active:scale-95 disabled:bg-zinc-900/50 dark:bg-primaryDark/50 sm:text-base md:top-20 md:bottom-20 md:text-lg dark:disabled:bg-zinc-900/50"
                        disabled={page === 1}
                        name="Previous image"
                        type="button"
                        onClick={scrollPrev}>
                    <FaArrowLeft/>
                </button>

                <div ref={ref} className="relative z-0 flex snap-x snap-mandatory overflow-x-auto drop-shadow-primary">
                    {figures.map(figure => (
                        <Figure key={figure.image.src} figure={figure}/>
                    ))}
                </div>

                <button className="absolute top-16 right-0 bottom-16 z-20 origin-right rounded-l-full p-2 text-xs text-white transition-all bg-primaryLight/50 enabled:hover:bg-primaryLight/75 active:scale-95 disabled:bg-zinc-900/50 dark:bg-primaryDark/50 sm:text-base md:top-20 md:bottom-20 md:text-lg dark:disabled:bg-zinc-900/50"
                        disabled={page === total}
                        name="Next image"
                        type="button"
                        onClick={scrollNext}>
                    <FaArrowRight/>
                </button>

            </div>
            <p className="mt-6 text-base font-bold md:text-lg md:font-normal">{description}</p>
        </article>
    );
}

const Portfolio = () => {
    const { t } = useTranslation();
    const { ref, page, scrollPrev, scrollNext, total } = useScrollControls();

    return (
        <section className="relative section" id="portfolio">
            <h2 className="title">{t('nav:portfolio')}</h2>
            <button
                className="absolute disabled:opacity-50 min-w-[164px] text-center [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)] font-bold bottom-8 left-6 bg-primary text-white pl-8 pr-2 py-2 enabled:active:scale-90 transition-transform enabled:hover:bg-primaryLight rounded-r-lg transition-colors"
                disabled={page === 1}
                onClick={scrollPrev}>
                {t('home:previous-project')}
            </button>
            <div ref={ref} className="flex snap-x snap-mandatory overflow-x-auto pb-16">

                <Project project={{
                    figures: [
                        { image: NaWijzerQuestionnaire, caption: t('home:project.nawijzer.caption-1') },
                        { image: NawijzerAdmin, caption: t('home:project.nawijzer.caption-2') }
                    ],
                    title: 'NaWijzer.nl',
                    description: t('home:project.nawijzer.description')
                }}/>


                <article className="min-w-full snap-center p-6">
                    <div className="grid place-items-center h-[70%]">
                        <h3 className="mb-4 text-2xl font-bold md:text-4xl">More on Github</h3>

                        <Link className="animate-bounce text-9xl transition-colors hover:text-secondaryLight" href="https://github.com/stars/SanderCokart/lists/projects">
                            <FaGithub/>
                        </Link>

                    </div>
                </article>


            </div>
            <button
                className="absolute disabled:opacity-50 min-w-[164px] text-center [clip-path:polygon(85%_0%,100%_50%,85%_100%,0%_100%,0%_0%)] font-bold bottom-8 right-6 bg-primary text-white pr-8 pl-2 py-2 enabled:active:scale-90 transition-transform enabled:hover:bg-primaryLight rounded-l-lg transition-colors"
                disabled={page === total}
                onClick={scrollNext}>
                {t('home:next-project')}
            </button>
        </section>
    );
};

export default Portfolio;