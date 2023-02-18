export default function DesktopNavigation() {
    return (
        <nav aria-label="main" className="space-x-8 text-2xl hidden md:block">
            <a className="hover:opacity-70" href="#techstack">Tech Stack</a>
            <a className="hover:opacity-70" href="#testimonials">Testimonials</a>
            <a className="hover:opacity-70" href="#contact">Contact Us</a>
        </nav>
    );
}