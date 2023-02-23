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
        <div className="w-[90vw] xl:w-[75vw]">
            <Image alt="example"
                   className="cursor-pointer ring-4 ring-secondaryLight dark:ring-primary"
                   height="2160"
                   src={image}
                   width="3840"
                   onClick={close}/>
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
            <FaTimes className="absolute bottom-full left-full z-10 cursor-pointer rounded-full p-1 text-4xl bg-secondaryLight text-primaryLight dark:text-secondaryLight dark:bg-primary"
                     onClick={() => setOpen(false)}/>
            <ModalBody/>
        </Modal>
    );
};

export default Lightbox;