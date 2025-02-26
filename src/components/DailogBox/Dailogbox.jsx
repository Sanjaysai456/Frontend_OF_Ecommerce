import React from "react";
import Modal from "react-modal";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const DialogBox = ({ message, isError, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Confirmation Dialog"
      ariaHideApp={false} // Disable the accessibility warning (if needed)
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="flex flex-col items-center">
        {isError ? (
          <FaExclamationCircle size={50} color="red" />
        ) : (
          <FaCheckCircle size={50} color="green" />
        )}
        <p className="text-lg font-semibold mt-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DialogBox;
