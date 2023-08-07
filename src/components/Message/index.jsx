import { useState } from "react"
import './style.css';


export function Message ({ message }) {
    const [showMessage, setShowMessage] = useState(true);

    const handleClose = () => {
        setShowMessage(false);
    }

    return showMessage ? (
        <div className="message">
            <p className="message-text">{message}</p>
            <span className="close-btn" onClick={handleClose}></span>
        </div>
    ): null
}