import React, { useState } from "react";
import "./Memberships.css";
import axios from "axios";
import Cookies from "js-cookie";
import updateIcon from "../../assets/images/Icon.png";
import { MdDriveEta, MdKeyboardArrowUp } from "react-icons/md";
import { BsChevronDoubleDown } from "react-icons/bs";
import memberIcon from "../KYC/assets/user.png";
import { GrBitcoin } from "react-icons/gr";

import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import { AiOutlineClose } from "react-icons/ai";
import iconImg from "../../assets/images/addison.png";
import Switch from "./Switch";

import btcImg from "../../assets/Vector.png";
import BTC1 from "../../assets/BTC1.png";
import BTC2 from "../../assets/BTC2.png";
import BTC3 from "../../assets/BTC3.png";
import BTC4 from "../../assets/BTC4.png";

export default function Memberships() {
  const [membersData, setMembersData] = useState([]);
  // const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(false);

  const OpenEmail = () => {
    let member = membersData.filter((item) => {
      return item.email === email;
    });
    alert(member.id);
  };

  axios
    .get("https://shielded-peak-58778.herokuapp.com/api/v1/users/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setMembersData(res.data);
      } else {
        console.log("sorry babes");
      }
    });

  return (
    <main className="memberships">
      <section className="memberships-members">
        <div className="members-header">
          <h3>Memberships Counts</h3>
          <BsChevronDoubleDown />
        </div>
        <div className="members-data">
          {membersData.map((item, key) => (
            <Popup
              modal
              nested
              // open={open}
              position="top center"
              trigger={
                <div key={key} className="members-container">
                  <div className="members-image">
                    <img src={memberIcon} alt="" />
                  </div>
                  <span
                    className="members-email"
                    // onClick={() => {
                    //   setEmail(item.email);
                    //   OpenEmail();
                    // }}
                  >
                    {" "}
                    {item.email}
                  </span>
                  <span className="members-subscription">just subscribed</span>
                </div>
              }
            >
              {(close) => (
                <div className="Popup-container">
                  <main className="popup-main">
                    <div className="popup-header">
                      <h3>Account details</h3>
                      <AiOutlineClose
                        onClick={() => close()}
                        className="popup-icon"
                      />
                    </div>
                    <section className="popup-details">
                      <div className="popup-account">
                        <img src={iconImg} alt="" />
                        <div className="account-headings">
                          <span className="Email_bold">{item.email}</span>
                          <span className="status-account">
                            Account status : Running
                          </span>
                        </div>
                        <MdKeyboardArrowUp />
                      </div>
                      <div className="popup-cryptodetails">
                        <div>
                          <p>Totla crypto bought(USD)</p>
                          <div className="popoUp_dollar">
                            <p>21k</p>
                          </div>
                        </div>
                        <div>
                          <p>Total crypto Sold(USD)</p>
                          <div className="popoUp_dollar">
                            <p>5k</p>
                          </div>
                        </div>
                      </div>
                      <div className="popup-cryptodetails">
                        <div>
                          <p>Totla times reported</p>
                          <div className="popoUp_dollar">
                            <p> 5 Times</p>
                          </div>
                        </div>
                        <div>
                          {/* <button className="popUp_buttons" onClick={() => { setOpen(true); }}>
                            Current account balance
                          </button> */}

                          <div
                            className="popUp_buttons"
                            onClick={() => close()}
                          >
                            <Popup
                              modal
                              nested
                              // open={open}
                              position="top center"
                              trigger={<span>Current account balance</span>}
                            >
                              <div className="Popup-container">
                                <main className="popup-main">
                                  <div className="popup-header">
                                    <h3>Account details</h3>
                                    <AiOutlineClose
                                      onClick={() => close()}
                                      className="popup-icon"
                                    />
                                  </div>

                                  <section className="popup-details">
                                    <div className="popup-account account-headings2">
                                      <img src={iconImg} alt="" />
                                      <div className="account-headings ">
                                        <span className="Email_bold">
                                          {item.email}
                                        </span>
                                        <span className="status-account">
                                          Account status : Running
                                        </span>
                                      </div>
                                      {/* <MdKeyboardArrowUp /> */}
                                      <button
                                        className="back"
                                        onClick={() => close()}
                                      >
                                        back
                                      </button>
                                    </div>
                                    <div className="popup-account-headings">
                                      <span>Name</span>
                                      <span>Chart</span>
                                      <span>Price in possession ($)</span>
                                    </div>
                                    <section className="account_details-portion">
                                      <div className="account_transation">
                                        <div className="account-bitcoin-details">
                                          <img
                                            src={BTC4}
                                            alt=""
                                            className="account-bitcoin"
                                          />
                                          <span className="bitcoin-details">
                                            <b>BTC</b>
                                            <p className="bitcoin-name">
                                              Bitcoin
                                            </p>
                                          </span>
                                        </div>
                                        <div className="bitcoin-chart">
                                          <img src={btcImg} alt="" />
                                        </div>

                                        <div className="bitcoin-prices">
                                          <span>$37,761</span>
                                          <span className="bitcoin-price-down">
                                            -15.94%
                                          </span>
                                        </div>
                                      </div>
                                      <div className="account_transation">
                                        <div className="account-bitcoin-details">
                                          {/* <GrBitcoin className="account-bitcoin" /> */}
                                          <img
                                            src={BTC3}
                                            alt=""
                                            className="account-bitcoin"
                                          />
                                          <span className="bitcoin-details">
                                            <b>SOL</b>
                                            <p className="bitcoin-name">
                                              Solnana
                                            </p>
                                          </span>
                                        </div>
                                        <div className="bitcoin-chart">
                                          <img src={btcImg} alt="" />
                                        </div>

                                        <div className="bitcoin-prices">
                                          <span>$37,761</span>
                                          <span className="bitcoin-price-down">
                                            -15.94%
                                          </span>
                                        </div>
                                      </div>
                                      <div className="account_transation">
                                        <div className="account-bitcoin-details">
                                          <img
                                            src={BTC1}
                                            alt=""
                                            className="account-bitcoin"
                                          />
                                          <span className="bitcoin-details">
                                            <b>ETH</b>
                                            <p className="bitcoin-name">
                                              Ethereum
                                            </p>
                                          </span>
                                        </div>
                                        <div className="bitcoin-chart">
                                          <img src={btcImg} alt="" />
                                        </div>

                                        <div className="bitcoin-prices">
                                          <span>$37,761</span>
                                          <span className="bitcoin-price-down">
                                            -15.94%
                                          </span>
                                        </div>
                                      </div>
                                      <div className="account_transation">
                                        <div className="account-bitcoin-details">
                                          <img
                                            src={BTC2}
                                            alt=""
                                            className="account-bitcoin"
                                          />
                                          <span className="bitcoin-details">
                                            <b>USDT</b>
                                            <p className="bitcoin-name">
                                              Tether USD
                                            </p>
                                          </span>
                                        </div>
                                        <div className="bitcoin-chart">
                                          <img src={btcImg} alt="" />
                                        </div>

                                        <div className="bitcoin-prices">
                                          <span>$37,761</span>
                                          <span className="bitcoin-price-down">
                                            -15.94%
                                          </span>
                                        </div>
                                      </div>
                                      <div className="Switch_popup">
                                        <div className="popup-status2">
                                          <Switch />
                                        </div>
                                      </div>
                                    </section>
                                  </section>
                                </main>
                              </div>
                            </Popup>
                          </div>
                          <div className="popoUp_dollar">
                            <p>1m</p>
                          </div>
                        </div>
                      </div>
                      <div className="popup-status">
                        <Switch />
                      </div>
                    </section>
                  </main>
                </div>
              )}
            </Popup>
          ))}
        </div>
        <div className="members-updates">
          <button className="member_btn">
            <span>Update list </span>
            <img src={updateIcon} alt="" className="updates-icon" />
          </button>
        </div>
      </section>
      <section className="memberships-stats ">
        <div className="stats-header members-header">
          <h3>Memberships stats</h3>
          <span>6000/30000 users</span>
          <BsChevronDoubleDown />
        </div>
        <div className="stats-details">
          <span>
            <b style={{ color: "lightgreen" }}>22%</b> of users have subscibed
            for memberships
          </span>
        </div>
      </section>
    </main>
  );
}
