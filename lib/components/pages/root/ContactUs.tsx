import {motion} from 'framer-motion';
import type {FormEvent} from 'react';
import {useState} from 'react';

export default function ContactUs() {
    const [subject, setSubject] = useState('Make an appointment');
    const [message, setMessage] = useState('I would like to make an appointment between DATE and DATE, can you do that?\n\nKind regards,\nNAME');
    const [email, setEmail] = useState('');

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Dit werkt nog niet maar kan worden geregeld.');
    };

    return <section className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
                    id="contact">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Make an appointment
        </h2>
        <form className="max-w-4xl mx-auto text-xl sm:text-2xl flex flex-col items-left gap-4" onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input required
                   className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                   id="email"
                   name="email"
                   placeholder="example@domain.com"
                   type="email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="subject">Subject:</label>
            <input required
                   className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                   id="subject"
                   maxLength={60}
                   minLength={3}
                   name="subject"
                   placeholder="Onderwerp"
                   type="text"
                   value={subject}
                   onChange={e => setSubject(e.target.value)}/>
            <label htmlFor="message">Message:</label>
            <textarea required
                      className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                      cols={30}
                      id="message"
                      name="message" placeholder="Your Message" rows={8} value={message}
                      onChange={e => setMessage(e.target.value)}/>
            <motion.button
                className="bg-secondaryLight dark:bg-secondaryLight hover:bg-green-600 active:bg-green-500 border-none text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Send
            </motion.button>
        </form>
    </section>;
}