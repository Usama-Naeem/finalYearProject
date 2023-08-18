import React from "react";
import logo from "../../shared/assests/party.gif";
import "./home.css";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-white flex items-center justify-around">
        <div className="flex flex-col">
          <span className="text-3xl font-bold title">
            CELEBRATE WITH EVENTVANTAGE
          </span>
          <br />
          <span className="text-3xl font-light description">
            A platform to manage your events
            <br /> Trusted by hundred's of users
          </span>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
