import React from 'react'

const Modal = ({ showModal, hideModal, children, movie}) => {
    return (
        showModal === movie.id && (
            <div className="modalBack" onClick={hideModal}>
                <div className="modalContainer">
                    { children }
                </div>
            </div>
        )
    )
}


export default Modal
