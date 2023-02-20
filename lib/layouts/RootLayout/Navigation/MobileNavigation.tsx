import {useTranslation} from 'next-i18next';
import {BsFillLightningFill} from 'react-icons/bs';
import {FaComment, FaEnvelope} from 'react-icons/fa';

export default function MobileNavigation() {
    const { t } = useTranslation(['common']);
    return (
        <nav aria-label="mobile"
             className="flex md:hidden fixed bottom-0 left-0 w-full bg-primaryLight dark:bg-primaryDark font-bold text-white">
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#techstack">
                <BsFillLightningFill className="text-xl"/>
                <span className="text-xs">{t('nav:tech-stack')}</span>
            </a>
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#testimonials">
                <FaComment className="text-xl"/>
                <span className="text-xs">{t('nav:testimonials')}</span>
            </a>
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#contact">
                <FaEnvelope className="text-xl"/>
                <span className="text-xs">{t('nav:contact')}</span>
            </a>
        </nav>
    );
}