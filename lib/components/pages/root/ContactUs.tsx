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
        <section className="my-12 scroll-mt-20 p-6 widescreen:section-min-height tallscreen:section-min-height"
                 id="contact">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                {t('home:makeAnAppointment')}
            </h2>
            <form className="mx-auto flex max-w-4xl flex-col gap-4 text-xl items-left sm:text-2xl" onSubmit={onSubmit}>
                <label htmlFor="email">{t('home:email')}:</label>
                <input required
                       className="base-input"
                       id="email"
                       name="email"
                       placeholder={t('home:example.email') as string}
                       type="email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="subject">{t('home:subject')}:</label>
                <input required
                       className="base-input"
                       id="subject"
                       maxLength={60}
                       minLength={3}
                       name="subject"
                       placeholder={t('home:subject') as string}
                       type="text"
                       value={subject}
                       onChange={e => setSubject(e.target.value)}/>
                <label htmlFor="message">{t('home:message')}:</label>
                <textarea required
                          className="base-input"
                          cols={30}
                          id="message"
                          name="message"
                          placeholder={t('home:draft') as string}
                          rows={8}
                          value={message}
                          onChange={e => setMessage(e.target.value)}/>
                <button className="w-48 rounded-xl p-3 font-bold text-white transition-transform bg-secondaryLight hover:scale-110 active:scale-90"
                        type="submit">
                    {t('home:send')}
                </button>
            </form>
        </section>
    );
}