import React, { useState } from 'react';
import './EmailPopUp.css';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import FinishPopUp from '../FinishPopUp/FinishPopUp';
// import EmailPopUp from '../EmailPopUp/EmailPopUp';

const EmailPopUp = ({ closeModal }) => {
  const [openFinishPopup, setOpenFinishPopup] = useState(false);
  const [openEmailPopup, setOpenEmailPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function switchToCell() {
    setOpenEmailPopup(!openEmailPopup);
  }

  function toggleLock() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <form>
        <div className="emailPopup">
          <div className="emailPopup_header">
            <p>Add new account (Worker)</p>
            <span className='close_btn' onClick={() => {
              closeModal(false);
            }}>X</span>
          </div>
          <div className="emailPopup_content">
            <div className="inputs_container">
              <input type="number" placeholder='Register By Cell No' />
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

            <div className="switch_to_email">
              <p onClick={() => {
                  closeModal(false);
              }}>
                or register by cell no
              </p>
              {/* <button onClick={(e) => {
                e.preventDefault();
                setOpenFinishPopup(true);
              }}>or register by cell</button> */}
            </div>


          </div>
          <div className="emailPopup_footer">
            <button onClick={(e) => {
                closeModal(false)
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

export default EmailPopUp;