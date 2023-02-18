import type {HTMLAttributes, ReactNode, ComponentType} from 'react';
import type {IconBaseProps} from 'react-icons';

import c from 'classnames';
import {motion} from 'framer-motion';
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

            <h2 className={c('!m-0', classNameTitle)}>{title}</h2>
            <p className={c('!m-0 font-bold sm:font-normal', classNameParagraph)}>
                {children}
            </p>
        </motion.div>
    );
};

export default function TechStack() {

    return (
        <section
            className="my-12 scroll-mt-20 p-6 min-h-mobile md:min-h-desktop" id="techstack">
            <article className="min-w-full prose-all">
                <h2 className="text-center">Tech Stack</h2>
                <div className="grid gap-8 sm:grid-cols-2">

                    <Stack
                        Icon={FaReact}
                        classNameIcon="text-react drop-shadow-black dark:drop-shadow-react"
                        classNameParagraph="dark:text-shadow-react"
                        classNameTitle="dark:text-shadow-react"
                        title="React">
                        We use React for our webapp projects. React allows us to easily build fast and responsive web applications.
                        It is often combined with NextJS for server side rendering and a hefty performance boost.
                    </Stack>

                    <Stack
                        Icon={FaLaravel}
                        classNameIcon="text-laravel drop-shadow-black dark:drop-shadow-laravel"
                        classNameParagraph="dark:text-shadow-laravel"
                        classNameTitle="dark:text-shadow-laravel"
                        title="Laravel">
                        We use laravel for our backend and fullstack projects.
                        Laravel allows us to easily build APIs and web applications with PHP.
                    </Stack>

                    <Stack
                        Icon={FaVuejs}
                        classNameIcon="text-vue drop-shadow-black dark:drop-shadow-vue"
                        classNameParagraph="dark:text-shadow-vue"
                        classNameTitle="dark:text-shadow-vue"
                        title="VueJS">
                        We use VueJS for our webapp projects. We see it as a great alternative to React.
                        VueJS is often combined with NuxtJS for server side rendering.
                    </Stack>

                    <Stack
                        Icon={TbBrandNextjs}
                        classNameIcon="text-next drop-shadow-black dark:drop-shadow-next"
                        classNameParagraph="dark:text-shadow-next"
                        classNameTitle="dark:text-shadow-next"
                        title="NextJS">
                        We use NextJS for our website and webapp projects.
                        NextJS uses strategies like server side rendering, static generation
                        and code splitting to provide a fast and performant experience.
                    </Stack>
                </div>
            </article>
        </section>
    );
}
