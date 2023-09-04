import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { CrossIcon } from "../svgsIcons/svgIcons";

type IProps = {
  children: any
  className?: any
  open?: boolean
  setOpen?: any
}
export default function Modal({ children, className, open, setOpen }: IProps) {
  return (
    <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="fixed z-50 inset-0 " onClose={setOpen}>
        <div className=" flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 0transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`${className} w-10/12  xs:w-full sm:w-7/12 inline-block align-top bg-white
            rounded-3xl p-4 text-left overflow-hidden shadow-xl
            transform transition-all sm:align-middle`}
          >
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="focus:outline-none h-[24px] w-[24px] bg-gray-100 flex justify-center items-center rounded-[50%]"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span className="sr-only">Close</span>
                <CrossIcon className='text-white ' />
              </button>
            </div>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
