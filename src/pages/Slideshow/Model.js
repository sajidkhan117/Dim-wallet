import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {BiImageAdd} from 'react-icons/bi'

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="model">
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={clickedImg} alt="bigger pic" />
          <span className="dismiss" onClick={handleClick}>
            X
          </span>
          <div className="arrow_button">
            <div onClick={handelRotationLeft} className="overlay-arrows_left">
              <div>
                <BsArrowLeft />
              </div>
            </div>

            <div onClick={handelRotationRight} className="overlay-arrows_right">
              <div>
                <BsArrowRight />
              </div>
            </div>
          <button type="upload"> <BiImageAdd className="upload"/> Change Image</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
