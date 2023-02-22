import {useEffect, useState} from 'react';

type BasicOptions = 'down' | 'up';

type MoreOptions = 'between';

type Sizes = {
    [key: string]: string

    'sm': string,
    'md': string,
    'lg': string,
    'xl': string,
    '2xl': string,
    '3xl': string,
    '4xl': string,
    '5xl': string,
    '6xl': string
};

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
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
    '4xl': '2048px',
    '5xl': '2560px',
    '6xl': '3840px'
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