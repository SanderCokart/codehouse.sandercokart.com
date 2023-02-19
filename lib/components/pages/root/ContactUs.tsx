import {motion} from 'framer-motion';
import {useTranslation} from 'next-i18next';
import type {FormEvent} from 'react';
import {useState} from 'react';

export default function ContactUs() {
    const { t } = useTranslation(['common']);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Dit werkt nog niet maar kan worden geregeld.');
    };

    return (
        <section className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
                 id="contact">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                {t('common:makeAnAppointment')}
            </h2>
            <form className="max-w-4xl mx-auto text-xl sm:text-2xl flex flex-col items-left gap-4" onSubmit={onSubmit}>
                <label htmlFor="email">{t('common:email')}:</label>
                <input required
                       className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                       id="email"
                       name="email"
                       placeholder={t('common:example.email') as string}
                       type="email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="subject">{t('common:subject')}:</label>
                <input required
                       className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                       id="subject"
                       maxLength={60}
                       minLength={3}
                       name="subject"
                       placeholder={t('common:subject') as string}
                       type="text"
                       value={subject}
                       onChange={e => setSubject(e.target.value)}/>
                <label htmlFor="message">{t('common:message')}:</label>
                <textarea required
                          className="w-full text-black text-xl sm:text-2xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                          cols={30}
                          id="message"
                          name="message"
                          placeholder={t('common:draft') as string}
                          rows={8}
                          value={message}
                          onChange={e => setMessage(e.target.value)}/>
                <motion.button
                    className="bg-secondaryLight dark:bg-secondaryLight hover:bg-green-600 active:bg-green-500 border-none text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none font-bold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {t('common:send')}
                </motion.button>
            </form>
        </section>
    );
}