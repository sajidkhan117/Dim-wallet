import React, { useState } from 'react';
import './PopUpTwo.css';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import FinishPopUp from '../FinishPopUp/FinishPopUp';
import EmailPopUp from '../EmailPopUp/EmailPopUp';

const PopUpTwo = ({ closeModal }) => {
  const [openFinishPopup, setOpenFinishPopup] = useState(false);
  const [openEmailPopup, setOpenEmailPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function switchToEmail() {
    setOpenEmailPopup(!openEmailPopup);
  }

  function toggleLock() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <form>
        <div className="popupTwo">
          <div className="popupTwo_header">
            <p>Add new account (Worker)</p>
            <span className='close_btn' onClick={() => {
              closeModal(false);
            }}>X</span>
          </div>
          <div className="popupTwo_content">
            <div className="inputs_container">
              <input type="email" placeholder='Register By Email' />
            </div>
            <div className="inputs_container">

              <input type={showPassword ? "text" : "password"} placeholder='Password' />

              <button className="lock_btn" onClick={(e) => {
                e.preventDefault();
                toggleLock(true);
              }}>
                {" "}
                {showPassword ? <BsFillLockFill /> : <BsFillUnlockFill />}

              </button>

            </div>
            <div className="inputs_container">

              <input type={showPassword ? "text" : "password"} placeholder='Repeat Password' />

              <button className="lock_btn" onClick={(e) => {
                e.preventDefault();
                toggleLock(true);
              }}>
                {" "}
                {showPassword ? <BsFillLockFill /> : <BsFillUnlockFill />}

              </button>
              
            </div>

            <div className="switch_to_cell">
              <p onClick={switchToEmail}>
                or register by email
              </p>
            </div>


          </div>
          <div className="popupTwo_footer">
            <button onClick={(e) => {
              closeModal(false);
              e.preventDefault();
            }} className='cancel_btn'>Cancel</button>

            <button onClick={(e) => {
              setOpenFinishPopup(true);
              e.preventDefault();
            }} className='finish_btn'>Finish</button>
            
          </div>
        </div>
      </form>
      {openFinishPopup && (<FinishPopUp closeModal={setOpenFinishPopup} />)}
      {openEmailPopup && (<EmailPopUp closeModal={setOpenEmailPopup} />)}
    </>
  )
}

export default PopUpTwo