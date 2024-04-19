import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Hiren, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
         <p className="font-black">Bachelor of Engineering</p>
         <p className="font-thin">Government Engineering College, Bhavnagar</p>
        <p className="font-normal">CGPA : 7.87</p>
        <p>Computer Engineering</p>
        

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div>
          <li>Java</li>
          <li>HTML</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </div>
        <br />
        <br />


        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        As a web developer, my mission is to leverage my technical expertise and creative skills to build dynamic and user-friendly websites that meet the
        unique needs of clients. With a focus on innovation and continuous learning, I aim to stay ahead of the curve in web development trends and technologies, delivering solutions that not only meet but exceed expectations, driving value and success for both clients and end-users alike.
        </p>
      </div>
    </div>
  );
}

export default About;
