import React, { useState } from "react";
import "./PopUpOne.css";
import PopUpTwo from "../PopUpTwo/PopUpTwo";

const PopupOne = ({ closeModal }) => {
  const [openPopupOne, setOpenPopupOne] = useState(false);

  // const togglePopupOne = () => {
  //   setPopupOne(!popupOne);
  // };

  // const closePopup =()=>{
  //   setPopupOne(false)
  // }
  return (
    <>
      <form>
        <div className="popupOne">
          {/* <div onClick={} className="overlay"></div> */}
          <div className="popupOne_content">
            <ul>
              <li>
                Set a role for this user
                <button onClick={() => {
                  closeModal(false);
                }}

                  className="closePopupOne_btn"
                >
                  X
                </button>
              </li>
              <li className="second_li">
                Admin (can edit settings)
                <input
                  type="radio"
                  id="admin"
                  name="fav_language"
                  value="HTML"
                />
              </li>
              <li>
                Worker (cannot edit settings)
                <input
                  type="radio"
                  id="worker"
                  name="fav_language"
                  value="HTML"
                  onClick={() => {
                    setOpenPopupOne(true);
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
      {openPopupOne && (<PopUpTwo closeModal={setOpenPopupOne} />)}
    </>
  );
};

export default PopupOne;
