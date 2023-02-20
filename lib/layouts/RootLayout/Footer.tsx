import {FaEnvelope, FaPhone, FaMap} from 'react-icons/fa';

const Address = () => (
    <address>
        <span className="flex gap-1 items-center"><FaMap/> Adres:</span>
        <span>
                    <h2>Sander's CodeHouse</h2>
                    <a className="hover:opacity-70" href="#contact">
                    Request adres via mail<br/>
                    </a>
                </span>

        <hr className="border-black dark:border-white my-2"/>

        <span className="flex gap-1 items-center"><FaEnvelope/>Email:</span>
        <a className="hover:opacity-70" href="mailto:sander@sandercokart.com">sander@sandercokart.com</a>

        <hr className="border-black dark:border-white my-2"/>

        <span className="flex gap-1 items-center"><FaPhone/>Phone:</span>
        <a className="hover:opacity-70" href="#contact">Request phone number via mail</a>
    </address>
);

const Copyright = () => (
    <p className="text-right">
        Copyright &copy; <span id="year">{new Date().getFullYear()}</span> All Rights Reserved
    </p>
);

const Footer = () => (
    <footer className="bg-primaryLight dark:bg-primaryDark font-mono fond-bold">
        <section>
            <Address/>
        </section>
        <section>
            <Copyright/>
        </section>
    </footer>
);

const FooterOld = () => (
    <footer className="bg-primaryLight dark:bg-primaryDark font-mono text-lg text-white font-bold flex flex-col justify-center"
            id="footer">
        <section className="mx-auto flex max-w-4xl flex-col p-8 sm:flex-row sm:justify-between gap-32">
            <Address/>

            <nav aria-label="footer" className="hidden flex-col gap-2 md:flex">
                <a className="hover:opacity-70" href="#diensten">Tech Stack</a>
                <a className="hover:opacity-70" href="#testimonials">Testimonials</a>
                <a className="hover:opacity-70" href="#contact">Contact Us</a>
            </nav>

        </section>
        <section className="flex gap-1 justify-center py-4">
            <Copyright/>
        </section>
    </footer>
);
export default Footer;