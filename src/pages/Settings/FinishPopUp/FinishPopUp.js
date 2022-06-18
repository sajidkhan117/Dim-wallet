import React from 'react';
import './FinishPopUp.css';
import {BsCheckCircle} from 'react-icons/bs';

const FinishPopUp = ({ closeModal }) => {
    return (
        <>
            <form>
                <div className="finishPopup">
                    <div className="finishPopup_header">
                        <p>Success</p>
                        <span className='close_btn' onClick={() => {
                            closeModal(false);
                        }}>X</span>
                    </div>
                    <div className="finishPopup_content">
                        <div className="success_icon">
                            <BsCheckCircle />
                        </div>
                        <div className="success_message">
                            <p>New account has been added successfully!</p>
                        </div>
                    </div>
                    <div className="finishPopup_footer">
                        <button onClick={(e) => {
                            closeModal(false);
                            e.preventDefault();
                        }} className='back_btn'>Back</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FinishPopUp