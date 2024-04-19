import React from "react";

import pic from "../../public/photo.avif";

import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a motivated and versatile individual, always eager to take on new challenges.
              With a passion for learning i am dedicated to delivering high-quality results.
              With a positive attitude and a growth mindset, i am ready to make a meaningful
              contribution and achieve great things.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  
                  <li>
                    <a href="https://www.linkedin.com/hiren-parmar-9a24b7234" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:parmarhiren75673@gmail.com" target="_blank">
                    <MdEmail className="text-2xl cursor-pointer" />
                    <span><a href=""></a></span>
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[410px] md:h-[410px]"
              alt=""
            />
          </div>
        </div>
         <hr />
      </div>

     
    </>
  );
}

export default Home;
