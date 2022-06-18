import React from "react";
import "./Complaints.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Complaints(props) {
  return (
    <div className="complaints" id="complaints">
      <div className="Complaints_whole" id="notifications">
        <div className="Complaints_container" id="memberships">
          <div className="Complaints_content">
            <div className="Complaints_count">
              <div>Complaints</div>
              <div>
                Unread{" "}
                <span className="complaints_arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>
              <div>
                All{" "}
                <span className="complaints_arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>
              <div>
                <BsChevronDoubleDown />
              </div>
            </div>

            <div className="Complaints_DAta">
              <div className="C_Data">
                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>

                <p className="complaints_bottom">
                  <span className="complaints_icons">
                    {" "}
                    <AiOutlineMail />
                  </span>{" "}
                  For gyps@yahoo.com Sir i just iio asfy
                </p>
              </div>
            </div>
          </div>

          <div className="Complaints_gmail">
            <div className="Gmail_data_center">
              <div className="Gmail_portion">
                {" "}
                <p>
                  {" "}
                  <span className="G_Form">From </span>{" "}
                  <span className="gmail_color">gypsy@yahoo.com</span> : Sir i
                  just iio asfy..{" "}
                </p>{" "}
              </div>
              <div className="Gmail_lorem">
                {" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla placeat, accusantium voluptatibus corporis cum
                  temporibus autem distinctio. Quisquam quos fugiat ratione at
                  aut rem nisi magnam nesciunt illum consectetur? Quaerat
                  repudiandae provident quibusdam asperiores? Consequuntur ipsa
                  sequi recusandae quia repellendus reprehenderit voluptatem?
                  Soluta dolorum corporis fuga ea ut eius, neque temporibus quia
                  non optio dolore, quis distinctio animi sapiente veritatis.
                  Eligendi porro et distinctio eius quia assumenda minima.
                  Temporibus sapiente nobis pariatur, porro hic eligendi fugiat
                  tenetur autem optio aliquid delectus ratione assumenda minima
                  ipsa velit soluta vero nihil ea in corporis maiores quis,
                  inventore unde odio? Nulla aperiam, sint recusandae quasi
                  eaque consectetur quo officiis deserunt dolor enim distinctio
                  amet sed fugit.
                  {" "}
                </p>
              </div>
              <div className="Button_container">
                <div className="button_div">
                  <button className="Red_button">Mark as resolved</button>
                  <button className="blue_button"> Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;
