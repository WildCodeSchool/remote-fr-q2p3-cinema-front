import React from 'react'

const Funding = ({ showModal, hideModal, children, funding}) => {
    return (
        showModal === funding.id && (
            <div className="modalBack" onClick={hideModal}>
                <div className="modalContainer">
                    { children }
                </div>
            </div>
        )
    )
}

export default Funding;
