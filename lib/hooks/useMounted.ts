import {useState, useEffect} from 'react';

const UseMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return { mounted };
};

export default UseMounted;