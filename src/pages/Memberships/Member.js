// import axios from "axios";
// import React, { useState } from "react";
// import { BsChevronDoubleDown } from "react-icons/bs";
// import { MdRefresh } from "react-icons/md";
// import Cookies from "js-cookie";
// import { MemberData } from "./MemberData";
// import "./Memberships.css";
// import memberIcon from "../KYC/assets/user.png";

// function Member(props) {
//   const [membersData, setMembersData] = useState([]);

//   axios
//     .get("https://shielded-peak-58778.herokuapp.com/api/v1/users/users", {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET",
//         "auth-token": localStorage.getItem("auth-token"),
//       },
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         setMembersData(res.data);
//       } else {
//         console.log("sorry babes");
//       }
//     });

//   return (
//     <>
//       <div className="memberships" id="memberships">
//         <div className="membership_content">
//           <div className="membership_count">
//             <div>Memberships counts</div>
//             <div>
//               <BsChevronDoubleDown />
//             </div>
//           </div>
//           <div className="for_btn_issue">
//             <div className="Membership_map">
//               {membersData.map((items, key) => (
//                 <div className="MemberShip-data">
//                   <img
//                     src={memberIcon}
//                     alt="membership"
//                     className="membership-image"
//                   />
//                   <div>
//                     {" "}
//                     <a href="/">{items.email}</a>
//                   </div>
//                   <div>just subscribed</div>
//                 </div>
//               ))}
//             </div>

//             <div className="membership_button">
//               <button>
//                 updated list ? <MdRefresh className="Refresh_icons" />{" "}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="Memberships_status">
//           <div className="MemberShip_header">
//             <div> Membership Status</div>
//             <div className="Membership_color"> 60000/300000 Users</div>
//             <div>
//               {" "}
//               <BsChevronDoubleDown />
//             </div>
//           </div>

//           <div className="Status_data">
//             <div className="Status_portion">
//               <p>
//                 <span style={{ color: "#01DD42" }}>22%</span> of user have
//                 subscribed for membership
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Member;
