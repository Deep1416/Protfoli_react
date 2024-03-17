import React from "react";
import avatar from "../../Assests/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { IoMdMail } from "react-icons/io";
  import { FaLinkedinIn } from "react-icons/fa";
function Introduction() {
  return (
    <>
      <div>
        <div className="w-full pb-16 pt-8 relative">
          <div className="pl-3 pr-3">
            <div className="flex  ">
              <div className="pt-24 pb-5 text-center w-[66.666%] px-16 text-white">
                <h1 className="text-4xl font-medium text-white">
                  LET ME <span className="text-[#cd5ff8]"> INTRODUCE </span> MYSELF
                </h1>
                <p className="pt-12 text-left text-xl font-normal">
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂️
                  <br />
                  <br />I am fluent in classics like{" "}
                  <i className="text-[#cd5ff8]">
                    <b> Java, Javascript and React Js. </b>
                  </i>
                  <br />
                  <br />
                  My field of Interest's are building new &nbsp;
                  <i>
                    <b className="text-[#cd5ff8]">Web Technologies and Products </b>
                    and also in areas related to
                    <b className="text-[#cd5ff8]">Web App</b>
                  </i>{" "}
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing
                  products with <b className="text-[#cd5ff8]">Node.js</b> and{" "}
                  <i>
                    <b className="text-[#cd5ff8]">Modern Javascript Library and Frameworks</b>
                  </i>{" "}
                  &nbsp; like <i className="text-[#cd5ff8]"> React.js</i>
                </p>
              </div>
              <div className="w-[33.333%] pt-36">
                <div>
                  <Tilt>
                    <img src={avatar} alt="" />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center text-white pt-14 ">
            <h1 className="text-4xl mb-2 text-center">FIND ME ON</h1>
            <p className="mb-4 text-lg text-center">Feel free to <span>connect </span>with me </p>
            <ul className="pt-4 mb-4 pl-8 flex gap-8 ">
                <li className="pl-4 pr-4 text-[#700c86] bg-white rounded-2xl  h-10 w-10 text-center transition relative"><a href="" className="text-2xl absolute top-2 right-2"><AiFillGithub /></a></li>
                <li className="pl-4 pr-4 text-[#700c86] bg-white rounded-2xl  h-10 w-10 text-center transition relative"><a className="text-2xl absolute top-2 right-2" href=""> <IoMdMail /></a></li>
                <li className="pl-4 pr-4 text-[#700c86] bg-white rounded-2xl  h-10 w-10 text-center transition relative"><a className="text-2xl absolute top-2 right-2" href=""><FaLinkedinIn /></a></li>
                <li className="pl-4 pr-4 text-[#700c86] bg-white rounded-2xl  h-10 w-10 text-center transition relative"><a className="text-2xl absolute top-2 right-2" href=""> <AiFillInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;