import {ReactNode} from "react";
import "./Modal.css"

interface Prop {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;

}

const Modal = (props: Prop) => {
    if (!props.isOpen) return null;

    return (
        <div
            onClick={props.onClose}
            className="blur"
        >
            <div
                className="box"
            >
                {props.children}
            </div>
        </div>
    );
};

export default Modal;