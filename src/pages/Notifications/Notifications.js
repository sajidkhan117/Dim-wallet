import React from "react";
import "./Notifications.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { GrContact } from "react-icons/gr";
function Notifications(props) {
  return (
    <div className="notifications" id="notifications">
      <div className="Notification_container" id="memberships">
        <div className="Notification_content">
          <div className="Notification_count">
            <div>Notfication</div>
            <div>All</div>
            <div>
              <BsChevronDoubleDown />
            </div>
          </div>

          <div className="Notification_DAta">
            <div className="Data">
              <p className="padd_bottom">
                <span className="Notification_icons">
                  {" "}
                  <RiContactsBook2Fill className="noti" />
                </span>{" "}
                <span className="span_color">Someone</span>
                <p className="noti_para">just suscribed for
                membership</p> 
              </p>
              <p className="padd_bottom">
                <span className="Notification_icons">
                  <MdOutlineLogin className="noti" />{" "}
                </span>{" "}
                <span className="span_color">Logins</span> <p className="noti_para"> statistaic for the
                day have been updated </p>  
              </p>

              <p className="padd_bottom">
                <span className="Notification_icons">
                  <GrContact className="noti" />
                </span>{" "}
                <p className="noti_para">  A new <span className="span_color">Complaint</span> just came in</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Notifications;
