import {useRef, useState, useEffect} from 'react';

const UseScrollControls = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setTotal(Math.ceil(ref.current.scrollWidth / ref.current.clientWidth));
        }
    }, [ref.current]);

    const scrollNext = () => {
        if (ref.current) {
            ref.current.scrollBy({
                left: ref.current.clientWidth,
                behavior: 'smooth'
            });
            setPage(page => page + 1);
        }
    };

    const scrollPrev = () => {
        if (ref.current) {
            ref.current.scrollBy({
                left: -ref.current.clientWidth,
                behavior: 'smooth'
            });
            setPage(page => page - 1);
        }
    };
    return { ref, scrollNext, scrollPrev, page, total };
};

export default UseScrollControls;