import React from 'react';
import Modal from './modal';
import Button from '../button'; // Replace with the actual path to your Button component

type Props = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ToggleModal: React.FC<Props> = ({ title, description, onConfirm, onCancel }) => {

  return (
    <Modal className="modal sm:min-w-[430px] sm:max-w-[430px]" open={true} setOpen={onCancel}>
      <div className="flex flex-col justify-center items-center gap-2 mt-5">
        <figure>
          {/* Use a custom warning icon or an appropriate warning sign */}
          <img src="/assets/images/warning-sign.gif" alt="Warning" height={150} width={150} />
        </figure>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-gray-60 text-xs">{description}</p>
        <Button
          style={{ background: 'linear-gradient(90deg, #8B0000, #A52A2A)' }}
          size="btn-lg"
          variant="btn-primary"
          onClick={() => {
            onConfirm();
            onCancel();
          }}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default ToggleModal;
