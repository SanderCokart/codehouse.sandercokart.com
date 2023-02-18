import {motion, useScroll} from 'framer-motion';
import {useRef} from 'react';

export default function Line() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['.2 end', 'end .2']
    });
    return (
        <div ref={ref} className="relative mx-auto w-1/2">
            <hr className="border-2 relative z-0 w-full border-black dark:border-white"/>
            <motion.hr className="border-2 absolute top-0 z-10 w-full border-green-400"
                       initial={{ scaleX: 0 }}
                       style={{ scaleX: scrollYProgress }}
                       viewport={{ margin: '-300px' }}/>
        </div>
    );
}