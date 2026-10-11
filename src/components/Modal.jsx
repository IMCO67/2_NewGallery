import { Envia } from "./Button";

export function Modal({ isOpen, onClose, reinicia, children }) {
    if (!isOpen) return null;

    const onClick = () => {
        onClose();
        reinicia();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✖</button>
                {children}
                <Envia onClick={onClick}>Reiniciar puntuaciones</Envia>
            </div>
        </div>
    );
}