import { ReactNode } from "react";
import ReactDom from "react-dom";

type ModalProps = {
  children: ReactNode;
};

function PortalModal({ children }: ModalProps) {
  const portal = document.querySelector("#modal-root");
  if (!portal) {
    return <div>{children}</div>;
  }

  return ReactDom.createPortal(children, portal);
}

export default PortalModal;
