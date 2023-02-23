import {motion, useScroll} from 'framer-motion';
import {useRef} from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

export default function Line() {
    const ref = useRef(null);
    const isMobile = useMediaQuery({ from: 'md', option: 'down' });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: isMobile ? ['56px end', '-44px start'] : ['1 1', '-68px 0']
    });
    return (
        <div ref={ref} className="relative mx-auto w-2/3 lg:w-full max-w-4xl">
            <hr className="border-2 relative z-0 w-full border-black dark:border-white"/>
            <motion.hr className="border-2 absolute top-0 z-10 w-full border-green-400"
                       initial={{ scaleX: 0 }}
                       style={{ scaleX: scrollYProgress }}
                       viewport={{ margin: '-300px' }}/>
        </div>
    );
}