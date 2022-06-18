import React, { useState } from "react";
// import "./Simple.css";

const SimplePopUp = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-model">
        Toggle
      </button>
      {modal &&  (
        <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>Hello modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              nobis officia incidunt, pariatur ducimus magni facilis aliquam
              quod libero exercitationem reprehenderit deserunt hic sed quis
              asperiores labore, earum explicabo modi.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
      )}
     
    </div>
  );
};

export default SimplePopUp;
