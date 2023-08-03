import { useAppContext } from "./context";

export const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext();
  return (
    <div className="modal-overlay">
      <div className={`modal-container ${isModalOpen ? "show-modal" : ""}`}>
        <h4>Modal Content</h4>
        <button onClick={closeModal} className="close-modal-btn">
          {" "}
          Close Modal
        </button>
      </div>
    </div>
  );
};
