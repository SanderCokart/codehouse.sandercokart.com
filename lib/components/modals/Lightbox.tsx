import {useScrollLock} from '@mantine/hooks';
import Image from 'next/image';
import type {ReactNode} from 'react';
import {useEffect} from 'react';
import {FaTimes} from 'react-icons/fa';
import Modal, {useModalProps, useModalState, useModal} from 'react-simple-modal-provider';

import useMediaQuery from '@/hooks/useMediaQuery';

interface LightboxProps {
    children: ReactNode;
}

function ModalBody() {
    const { image } = useModalProps('lightbox');
    const { close } = useModal('lightbox');
    useScrollLock(true);

    return (
        <div className="h-[85vh] max-w-[90vw] aspect-video">
            <Image alt="example" className="dark:ring-primary cursor-pointer ring-4 ring-secondaryLight" src={image} onClick={close}/>
        </div>
    );
}

const Lightbox = ({ children }: LightboxProps) => {
    const [open, setOpen] = useModalState();

    const isMobile = useMediaQuery({ from: 'md', option: 'down' });

    useEffect(() => {
        if (isMobile) {
            setOpen(false);
        }
    }, [isMobile]);

    return (
        <Modal consumer={children} id="lightbox" isOpen={open} setOpen={setOpen}>
            <FaTimes className="cursor-pointer absolute left-full bottom-full dark:text-secondaryLight rounded-full bg-secondaryLight text-primaryLight dark:bg-primary p-1 text-4xl z-10"
                     onClick={() => setOpen(false)}/>
            <ModalBody/>
        </Modal>
    );
};

export default Lightbox;