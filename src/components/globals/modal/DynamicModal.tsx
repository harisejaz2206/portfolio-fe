import React from 'react';
import Modal from './modal';
import Button from '../button';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from React Router

type Props = {
    cancel?: any
    action?: any,
    title: string,
    description?: string,
    open?: any,
    routerPath?: any,
    setOpen?: any
    successIcon?: any
    btnWidth?: any
    children?: React.ReactNode;
    onConfirm?: () => void;
}

const DynamicModal = ({ title, btnWidth, description, action, routerPath, open, setOpen, successIcon }: Props) => {
    const navigate = useNavigate();  // Use useNavigate instead of useRouter

    return (
        <Modal className="modal sm:min-w-[430px] sm:max-w-[430px]" open={open} setOpen={setOpen}>
            <div className='flex flex-col justify-center items-center gap-2 mt-5'>
                {
                    successIcon &&
                    <figure>
                        <img src='/assets/images/forgot_password.gif' alt='Password Change' height={150} width={150} />
                    </figure>
                }
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p className='text-gray-60 text-xs'>{description}</p>
                <Button
                    style={{ background: 'linear-gradient(90deg, #8B0000, #A52A2A)' }}
                    size={`${btnWidth ? "btn-lg" : "btn-xs"}`}
                    value={action}
                    variant="btn-primary"
                    className='mt-4'
                    onClick={() => { navigate(routerPath); }}  // Use navigate function here
                >
                </Button>
            </div>
        </Modal>
    );
};

export default DynamicModal;
