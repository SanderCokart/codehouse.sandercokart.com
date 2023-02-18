import type {PropsWithChildren} from 'react';

import type { Variants} from 'framer-motion';
import {motion} from 'framer-motion';

const BasicAnimation = ({ children, variants }: PropsWithChildren<{ variants: Variants }>) => {
    return (
        <motion.div animate="visible"
                    exit="exit"
                    initial="hidden"
                    variants={variants}>
            {children}
        </motion.div>
    );
};

export default BasicAnimation;