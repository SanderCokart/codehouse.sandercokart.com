import {useTranslation} from 'next-i18next';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';
import {FaGithub, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {useModal} from 'react-simple-modal-provider';
import {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import NawijzerAdmin from '@/public/static/images/portfolio/nawijzer-admin.png';
import NaWijzerQuestionnaire from '@/public/static/images/portfolio/nawijzer-questionnaire.png';

function Figure({ figure: { caption, image } }: { figure: { image: StaticImageData, caption: string } }) {
    const { open: openLightbox } = useModal('lightbox');

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
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    return (
        <article className="min-w-full snap-center p-6">
            <h3 className="mb-4 text-2xl font-bold md:text-4xl">{title}</h3>
            <div className="relative">

                <Swiper mousewheel
                        className="drop-shadow-primary"
                        keyboard={{ onlyInViewport: true }}
                        modules={[Keyboard, Mousewheel, Navigation, Pagination]}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        pagination={{ el: paginationRef.current, clickable: true }}
                        slidesPerView={1}>
                    <button
                        ref={prevRef}
                        className="absolute top-16 bottom-16 left-0 z-10 origin-left rounded-r-full p-2 text-xs text-white transition-all bg-primaryLight/50 enabled:hover:bg-primaryLight/75 active:scale-95 disabled:bg-zinc-900/50 dark:bg-primaryDark/50 sm:text-base md:top-20 md:bottom-20 md:text-lg dark:disabled:bg-zinc-900/50"
                        name="Previous image"
                        type="button">
                        <FaArrowLeft/>
                    </button>

                    {figures.map(figure => (
                        <SwiperSlide key={figure.image.src}>
                            <Figure figure={figure}/>
                        </SwiperSlide>
                    ))}

                    <button
                        ref={nextRef}
                        className="absolute top-16 right-0 bottom-16 z-10 z-20 origin-right rounded-l-full p-2 text-xs text-white transition-all bg-primaryLight/50 enabled:hover:bg-primaryLight/75 active:scale-95 disabled:bg-zinc-900/50 dark:bg-primaryDark/50 sm:text-base md:top-20 md:bottom-20 md:text-lg dark:disabled:bg-zinc-900/50"
                        name="Next image"
                        type="button">
                        <FaArrowRight/>
                    </button>
                </Swiper>
                <div ref={paginationRef} className="w-full gap-2 flex justify-center mt-4"></div>
            </div>
            <p className="mt-6 text-base font-bold md:text-lg md:font-normal">{description}</p>
        </article>
    );
}

const Portfolio = () => {
    const { t } = useTranslation();
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="relative section-no-height" id="portfolio">
            <h2 className="title">{t('nav:portfolio')}</h2>
            <Swiper
                className="pb-16 static"
                modules={[Navigation]}
                navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
                slidesPerView={1}>
                <button
                    ref={prevRef}
                    className="absolute text-xs md:text-base disabled:opacity-50 text-center [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)] font-bold bottom-8 left-6 bg-primary text-white py-2 pl-8 pr-4 enabled:active:scale-90 transition-transform enabled:hover:bg-primaryLight rounded-r-lg transition-colors"
                    type="button">
                    {t('home:previous-project')}
                </button>
                <SwiperSlide>
                    <Project project={{
                        figures: [
                            { image: NaWijzerQuestionnaire, caption: t('home:project.nawijzer.caption-1') },
                            { image: NawijzerAdmin, caption: t('home:project.nawijzer.caption-2') }
                        ],
                        title: 'NaWijzer.nl',
                        description: t('home:project.nawijzer.description')
                    }}/>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <article className="min-w-full p-6 h-full grid place-items-center">
                        <div className="grid place-items-center h-[50%]">
                            <h3 className="mb-4 text-center text-2xl font-bold md:text-4xl">{t('home:more-on-github')}</h3>

                            <Link className="animate-bounce text-9xl transition-colors hover:text-secondaryLight" href="https://github.com/stars/SanderCokart/lists/projects">
                                <FaGithub/>
                            </Link>

                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>

            <button
                ref={nextRef}
                className="absolute text-xs md:text-base disabled:opacity-50 text-center [clip-path:polygon(85%_0%,100%_50%,85%_100%,0%_100%,0%_0%)] font-bold bottom-8 right-6 bg-primary text-white py-2 pl-4 pr-8 enabled:active:scale-90 transition-transform enabled:hover:bg-primaryLight rounded-l-lg transition-colors"
                type="button">
                {t('home:next-project')}
            </button>
        </section>
    );
};

export default Portfolio;