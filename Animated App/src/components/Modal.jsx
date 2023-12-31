import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          start: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
          end: { opacity: 0, y: -30 },
        }}
        initial="start"
        animate="visible"
        exit="end"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
