import {useRouter} from 'next/router';

const UseLocale = () => {
    const router = useRouter();
    const { pathname, query, replace } = router;

    const expireDate = () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 100).toUTCString();

    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};expires=${(expireDate())};secure=true;sameSite=lax`;
        replace({ pathname, query }, { pathname, query, hash: window.location.hash }, { locale, scroll: false });
    };
    return { setLocale };
};

export default UseLocale;