import { FC } from "react";
import './style.scss'

interface IProps {
    handleReset: Function,
    message: String,
    onClose: Function
}

const Modal: FC<IProps> = ({ handleReset, message, onClose }): JSX.Element => {

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <div className="modal-title">
                        Hello !!
                    </div>
                    <button onClick={() => onClose()} className="close">
                        X
                    </button>
                </div>
                <div className="modal-body-title">
                    <div className="">
                        {message}
                    </div>
                    <div className="">
                        Vous avez 2 minute pour matches toutes les cartes!
                    </div>
                </div>
                <button onClick={(e) => {
                    handleReset()
                    onClose()
                }} className="modal-body-button">
                    Pret ?
                </button>
            </div>
        </div>
    )
}

export default Modal