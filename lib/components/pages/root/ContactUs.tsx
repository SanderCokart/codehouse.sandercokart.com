import c from 'classnames';
import {useTranslation} from 'next-i18next';
import type {FormEvent, MouseEvent} from 'react';
import {useState} from 'react';
import {BsInputCursorText} from 'react-icons/bs';

import Axios from '@/functions/axios';

type Status = 'success' | 'error' | 'warning';

export default function ContactUs() {
    const { t } = useTranslation(['common']);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [response, setResponse] = useState<null | { message: string, status: Status }>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Axios.simplePost('/contact',
            { name, email, subject, message },
            {
                handleSuccessMessage: (message) => setResponse({ message, status: 'success' }),
                handleClientError: (message) => setResponse({ message, status: 'error' })
            }
        );
    };

    const insertTemplate = (e: MouseEvent<SVGElement>) => {
        setMessage(message => message += t('home:draft') as string);
        e.currentTarget.classList.add('dark:stop-animation');
        e.currentTarget.classList.add('stop-animation');
        e.currentTarget.classList.remove('ring-2');
    };

    return (
        <section className="section"
                 id="contact">
            <h2 className="title">
                {t('home:makeAnAppointment')}
            </h2>
            <form className="mx-auto p-4 flex max-w-4xl min-h-[838px] flex-col gap-4 text-xl items-left sm:text-2xl" onSubmit={onSubmit}>
                <label htmlFor="name">{t('home:name')}:</label>
                <input required
                       className="base-input"
                       id="name"
                       name="name"
                       placeholder={t('home:example.name') as string}
                       type="text"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
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
                <div className="relative">
                    <textarea required
                              className="base-input pr-12"
                              cols={30}
                              id="message"
                              name="message"
                              placeholder={t('home:draft') as string}
                              rows={8}
                              value={message}
                              onChange={e => setMessage(e.target.value)}/>
                    <BsInputCursorText
                        className="absolute animate-ring-pulse-primary dark:animate-ring-pulse-secondary ring-2 text-zinc-900 shadow-2xl cursor-pointer bg-white border-2 p-2 w-10 h-10 rounded top-2 right-2"
                        title={t('home:insert-template') as string}
                        onClick={insertTemplate}/>
                </div>
                <div className="flex flex-col md:flex-row items-baseline gap-8">
                    <button className="w-48 shrink-0 rounded-xl self-center sm:self-baseline p-3 font-bold text-white transition-transform bg-secondaryLight hover:scale-110 active:scale-90"
                            type="submit">
                        {t('home:send')}
                    </button>

                    <p className={
                        c(
                            'grow text-center text-xl bg-zinc-200 dark:bg-zinc-800 rounded-md p-4 font-bold empty:hidden',
                            {
                                'text-primaryLight dark:text-secondaryLight': response?.status === 'success',
                                'text-white border-red-600 border-2': response?.status === 'error'
                            }
                        )
                    }>{response?.message}</p>
                </div>
            </form>
        </section>
    );
}