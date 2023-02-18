import {useEffect, useState} from 'react';

type BasicOptions = 'down' | 'up';

type MoreOptions = 'between';

type Sizes = { xs: string, sm: string, md: string, lg: string, xl: string, '2xl': string, [key: string]: string };

interface BasicMediaQuery {
    from: keyof Sizes;
    option: BasicOptions;
}

interface AdvancedMediaQuery {
    from: keyof Sizes;
    option: MoreOptions;
    to: keyof Sizes;
}

const sizes: Sizes = {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
};

function useMediaQuery(options: BasicMediaQuery | AdvancedMediaQuery = { from: 'xs', option: 'up' }) {
    const [matches, setMatches] = useState(false);

    const getQuery = () => {
        switch (options.option) {
            case 'down':
                return `all and (max-width: ${sizes[options.from]})`;
            case 'between':
                return `all and (min-width: ${sizes[options.from]}) and (max-width: ${options.to})`;
            default:
                return `all and (min-width: ${sizes[options.from]})`;
        }
    };

    const setDefaults = () => {
        const mediaQuery = window.matchMedia(getQuery());
        setMatches(mediaQuery.matches);
    };

    useEffect(() => {
        window.addEventListener('resize', setDefaults);
        return () => {
            window.removeEventListener('resize', setDefaults);
        };
    }, [matches]);

    useEffect(() => {
        setDefaults();
    }, []);

    return matches;
}

export default useMediaQuery;