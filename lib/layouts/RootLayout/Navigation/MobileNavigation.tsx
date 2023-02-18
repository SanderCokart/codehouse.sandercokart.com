import {FaHome, FaSpa, FaComment, FaEnvelope} from 'react-icons/fa';

export default function MobileNavigation() {
    return (
        <nav aria-label="mobile"
             className="flex md:hidden fixed bottom-0 left-0 w-full bg-primaryLight dark:bg-primaryDark font-bold text-white">
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#hero">
                <FaHome className="text-xl"/>
                <span className="text-xs">Home</span>
            </a>
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#techstack">
                <FaSpa className="text-xl"/>
                <span className="text-xs">Tech Stack</span>
            </a>
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#testimonials">
                <FaComment className="text-xl"/>
                <span className="text-xs">Testimonials</span>
            </a>
            <a className="flex flex-col items-center gap-1 w-full py-2 text-center hover:bg-primaryLight dark:hover:bg-primaryLight"
               href="#contact">
                <FaEnvelope className="text-xl"/>
                <span className="text-xs">Contact Us</span>
            </a>
        </nav>
    );
}