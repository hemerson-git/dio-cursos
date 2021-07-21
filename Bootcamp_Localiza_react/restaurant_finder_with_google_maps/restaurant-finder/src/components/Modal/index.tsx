import { useEffect } from "react";
import { MouseEvent, ReactNode } from "react";
import Portal from "./Portal";

import { Overlay, Modal as Dialog } from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ children, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    function onEscPressed(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onEscPressed);

    return () => {
      document.removeEventListener("keydown", onEscPressed);
    };
  }, [onClose]);

  function onOverlayClick() {
    onClose();
  }

  function handleDialogClick(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  if (!isOpen) return null;

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={(e) => handleDialogClick(e)}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
}

export default Modal;
