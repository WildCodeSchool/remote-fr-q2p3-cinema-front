import React from 'react'

const Modal = ({ showModal, hideModal, children}) => {
    return (
        showModal && (
            <div className="modalBack" onClick={hideModal}>
                <div className="modalContainer">
                    { children }
                </div>
            </div>
        )
    )
}

export default Modal
