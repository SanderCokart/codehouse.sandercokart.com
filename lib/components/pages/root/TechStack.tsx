import type {HTMLAttributes, ReactNode, ComponentType} from 'react';
import type {IconBaseProps} from 'react-icons';

import c from 'classnames';
import {motion} from 'framer-motion';
import {useTranslation} from 'next-i18next';
import {FaReact, FaLaravel, FaVuejs} from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
    Icon: ComponentType<IconBaseProps>;
    title: string;
    children: ReactNode;
    classNameIcon?: string;
    classNameTitle?: string;
    classNameParagraph?: string;
}

const Stack = ({ Icon, title, children, className, classNameIcon, classNameTitle, classNameParagraph }: StackProps) => {

    return (
        <motion.div animate={{ opacity: 0 }} className={c('flex aspect-square flex-col items-center gap-4', className)}
                    initial={{ opacity: 0 }}
                    viewport={{ margin: '-40% 0px -40% 0px', once: true }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <motion.div
                className="w-[128px] h-[128px]"
                viewport={{ margin: '-40% 0px -40% 0px' }}
                whileInView={{ scale: 1.1 }}>
                <Icon className={c(classNameIcon, 'w-full h-full')}/>
            </motion.div>

            <h2 className={c('text-3xl font-bold', classNameTitle)}>{title}</h2>
            <p className={c('font-bold sm:font-normal text-base md:text-lg', classNameParagraph)}>
                {children}
            </p>
        </motion.div>
    );
};

export default function TechStack() {
    const { t } = useTranslation();
    return (
        <section
            className="section" id="techstack">
            <article className="min-w-full">
                <h2 className="title">
                    {t('nav:tech-stack')}
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 p-6">

                    <Stack
                        Icon={FaReact}
                        classNameIcon="text-react drop-shadow-black dark:drop-shadow-react"
                        classNameParagraph="dark:text-shadow-react"
                        classNameTitle="dark:text-shadow-react"
                        title="React">
                        {t('home:tech-stack.react')}
                    </Stack>

                    <Stack
                        Icon={FaLaravel}
                        classNameIcon="text-laravel drop-shadow-black dark:drop-shadow-laravel"
                        classNameParagraph="dark:text-shadow-laravel"
                        classNameTitle="dark:text-shadow-laravel"
                        title="Laravel">
                        {t('home:tech-stack.laravel')}
                    </Stack>

                    <Stack
                        Icon={FaVuejs}
                        classNameIcon="text-vue drop-shadow-black dark:drop-shadow-vue"
                        classNameParagraph="dark:text-shadow-vue"
                        classNameTitle="dark:text-shadow-vue"
                        title="VueJS">
                        {t('home:tech-stack.vue')}
                    </Stack>

                    <Stack
                        Icon={TbBrandNextjs}
                        classNameIcon="text-next drop-shadow-black dark:drop-shadow-next"
                        classNameParagraph="dark:text-shadow-next"
                        classNameTitle="dark:text-shadow-next"
                        title="NextJS">
                        {t('home:tech-stack.next')}
                    </Stack>
                </div>
            </article>
        </section>
    );
}
