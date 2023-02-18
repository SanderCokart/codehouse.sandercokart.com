import {useScroll, motion} from 'framer-motion';

export default function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className="bg-secondary dark:bg-secondaryLight w-full h-1 absolute -bottom-0"
                    style={{ scaleX: scrollYProgress }}/>
    );
}