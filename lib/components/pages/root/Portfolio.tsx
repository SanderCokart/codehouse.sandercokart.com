import {useTranslation} from 'next-i18next';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import {useModal} from 'react-simple-modal-provider';

import NawijzerAdmin from '@/public/static/images/portfolio/nawijzer-admin.png';
import NaWijzerQuestionnaire from '@/public/static/images/portfolio/nawijzer-questionnaire.png';

function Figure({ figure: { caption, image } }: { figure: { image: StaticImageData, caption: string } }) {
    const { open: openLightbox } = useModal('lightbox');

    return (
        <figure className="relative min-w-full snap-center">
            <Image alt="NaWijzer.nl"
                   className="pointer-events-none cursor-pointer transition-transform md:pointer-events-auto"
                   height="540"
                   src={image}
                   width="960"
                   onClick={() => openLightbox({ image })}
            />
            <figcaption className="absolute bottom-0 left-0 w-full bg-white/75 dark:bg-black/75 to-transparent p-2 text-center text-xs md:text-base font-bold text-black dark:text-white">{caption}</figcaption>
        </figure>
    );
}

interface ProjectProps {
    figures: { image: StaticImageData, caption: string }[];
    title: string;
    description: string;
}

function Project({ project: { title, figures, description } }: { project: ProjectProps }) {
    return (
        <article className="min-w-full snap-center p-6">
            <h3 className="">{title}</h3>
            <div className="flex snap-x snap-mandatory overflow-x-auto not-prose [&_div:has(img):last-child_>_img]:border-0">
                {figures.map(figure => (
                    <Figure key={figure.image.src} figure={figure}/>
                ))}
            </div>
            <p>{description}</p>
        </article>
    );
}

const Portfolio = () => {
    const { t } = useTranslation();
    return (
        <section className="my-12 scroll-mt-20 min-h-section" id="portfolio">
            <div className="prose-all prose-headings:font-bold prose-h2:m-0 prose-h3:mt-4">
                <h2 className="text-center text-3xl font-bold">{t('nav:portfolio')}</h2>
                <div className="flex snap-x snap-mandatory overflow-x-auto dark:drop-shadow-primary">
                    <Project project={{
                        figures: [
                            { image: NaWijzerQuestionnaire, caption: t('home:project.nawijzer.caption-1') },
                            { image: NawijzerAdmin, caption: t('home:project.nawijzer.caption-2') }
                        ],
                        title: 'NaWijzer.nl',
                        description: t('home:project.nawijzer.description')
                    }}/>
                    <Project project={{
                        figures: [
                            { image: NaWijzerQuestionnaire, caption: t('home:project.nawijzer.caption-1') },
                            { image: NawijzerAdmin, caption: t('home:project.nawijzer.caption-2') }
                        ],
                        title: 'IetsAnders.com',
                        description: t('home:project.nawijzer.description')
                    }}/>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;