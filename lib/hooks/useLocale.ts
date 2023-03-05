const UseLocale = () => {
    const expireDate = () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 100).toUTCString();

    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};expires=${(expireDate())};path=/;sameSite=lax;secure=true`;
    };

    return { setLocale };
};

export default UseLocale;