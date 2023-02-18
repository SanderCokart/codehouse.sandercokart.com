import {AnimatePresence, motion} from 'framer-motion';
import {useTheme} from 'next-themes';
import {FaSun, FaMoon} from 'react-icons/fa';

import useMounted from '@/hooks/useMounted';

export function ThemeToggle() {
    const { mounted } = useMounted();
    const { setTheme, theme } = useTheme();

    if (!mounted) return null;

    const sunVariants = {
        hidden: { opacity: 0, y: 100, transition: { duration: .25, y: { duration: .5 } } },
        visible: { opacity: 1, y: 0, transition: { duration: .25, y: { duration: .5 } } },
        exit: { opacity: 0, y: 100, transition: { duration: .25, y: { duration: .5 } } }
    };

    const moonVariants = {
        hidden: { opacity: 0, y: -100, transition: { duration: .25, y: { duration: .5 } } },
        visible: { opacity: 1, y: 0, transition: { duration: .25, y: { duration: .5 } } },
        exit: { opacity: 0, y: -100, transition: { duration: .25, y: { duration: .5 } } }
    };

    return (
        <div className="relative grid place-items-center">
            <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                    <motion.div key="light"
                                animate="visible"
                                className="absolute"
                                exit="exit"
                                initial="hidden"
                                variants={sunVariants}>
                        <FaSun className="cursor-pointer" onClick={() => setTheme('light')}/>
                    </motion.div>
                ) : (
                     <motion.div key="dark"
                                 animate="visible"
                                 className="absolute"
                                 exit="exit"
                                 initial="hidden"
                                 variants={moonVariants}>
                         <FaMoon className="cursor-pointer" onClick={() => setTheme('dark')}/>
                     </motion.div>
                 )
                }


            </AnimatePresence>
        </div>
    );
}