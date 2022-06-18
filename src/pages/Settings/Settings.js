import React, { useState } from "react";
import "./Settings.css";
import pic from "./icon/pic.png";
import { BiUserPlus } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { AiFillUnlock } from "react-icons/ai";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import PopupOne from "./PopUpOne/PopupOne";
import Password from "./PasswordPopUp/Password";
function Settings(props) {
  const [modal, setModal] = useState(false);
  const [changePassword, setPassword] = useState(false);
  const [open, setopen] = useState(false);
  const [click, setclick] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openFinishPopup, setOpenFinishPopup] = useState(false);
  const Doubleshow = () => {
    setclick(!click);
  };

  const show = () => {
    setopen(!open);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const ConfirmPassword = () => {
    setPassword(!changePassword);
  };

  return (
    <div className="settings" id="settings">
      <div className="settings-container">
        <div className="settings-container-left">
          <div className="setting-header">
            <p>Settings</p>
          </div>

          <div className="addUser_btn">
            <button
              onClick={() => {
                toggleModal();
                setOpenModal(true);
              }}
            >
              <BiUserPlus className="addUser_icon" />
              <span>Add new user</span>
            </button>
          </div>
          {openModal && <PopupOne closeModal={setOpenModal} />}
 

          <div className="Change_password">
            <button onClick={ConfirmPassword}>
              <AiFillUnlock className="password_icon" />
              <span>Change Password</span>
            </button>
          </div>
          {changePassword && (
            <div className="changePassword">
              <div onClick={ConfirmPassword}></div>
              <div className="Password_content">
                <form>
                  <ul>
                    <li className="Edit_password">
                      Edit Password
                      <button
                        onClick={ConfirmPassword}
                        className="changePassword_btn"
                      >
                        X
                      </button>
                    </li>

                    <div className="user_profile">
                      <div className="user_img">
                        {" "}
                        <img src={pic} alt="" />
                      </div>
                      <div className="user_name">Babature Badmasi</div>
                    </div>

                    <ul className="Set_Password">
                      <li>
                        {" "}
                        <input
                          type={open ? "password" : "text"}
                          placeholder="set password"
                          name=""
                          id=""
                          className="for_password"
                        />
                      </li>
                      <li
                        onClick={() => {
                          show();
                        }}
                      >
                        {open ? <HiOutlineLockClosed /> : <HiOutlineLockOpen />}
                      </li>
                    </ul>

                    <ul className="confirm_Password">
                      <li>
                        {" "}
                        <input
                          placeholder="confirm password"
                          type={click ? "password" : "text"}
                          name=""
                          id=""
                          className="for_password"
                        />
                      </li>
                      <li
                        onClick={() => {
                          Doubleshow();
                        }}
                      >
                        {click ? (
                          <HiOutlineLockClosed />
                        ) : (
                          <HiOutlineLockOpen />
                        )}
                      </li>
                    </ul>
                  </ul>

                  <div className="button_container">
                    <button className="Cancel_button"> Cancel</button>
                    <button className="set_password"
                      onClick={(e) => {
                        setOpenFinishPopup(true);
                        e.preventDefault();
                      }}
                     
                    >
                      Set Password
                    </button>
                    {/* <button className="set_password">Set Password</button> */}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="settings-container-right">
          <div className="settings-right-header">
            <BiUserPlus />
            <p>Add new User</p>
          </div>
          <div className="settings-users">
            <div className="setting-user">
              <div className="setting-user-profile">
                <img src={pic} alt="pic" />
                <p>Measum Abbas</p>
              </div>
              <p>You</p>
              <RiSettingsLine />
            </div>
          </div>
          <div className="settings-add-user">
            <p style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
              +
            </p>
            <p>Add new user</p>
          </div>
        </div>
      </div>
      {openFinishPopup && (<Password closeModal={setOpenFinishPopup} />)}
    </div>
  );
}

export default Settings;
