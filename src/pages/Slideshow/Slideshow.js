import React,{useState} from "react";
import "./Slideshow.css";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import data from "./images.json";
import Modal from "./Model";

function Slideshow() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
   <div className="slideshow">
      <h5 className="info_heading">
        <GrCircleInformation className="info_icon" />
        update the slides for dim wallte ( Display slides on the homepage)
      </h5>
      <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
          <div className="color"  onClick={() => handleClick(item, index)}>
            <p>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="zoom" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"></path></svg>
            
            </p>
          <img
            src={item.link}
            alt={item.text}
            className="wrapper_img"
           
            />
          </div>
          <div className="link_icon">
              <AiOutlineLink />
              <p>
                Link: <i>App/Trade/Ust</i>
              </p>
            </div>
        </div>
      ))}
      
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
   </div>
  );
}

export default Slideshow;
