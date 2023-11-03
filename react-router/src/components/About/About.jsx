import React from "react";
import img1 from "../../images/react-router.png";

const About = () => {
  return (
    <div className="home m-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img1} alt="grid-img-router" style={{ width: "100%" }} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p className="h5 mb-3">React-Router-Dom</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              consequuntur deserunt error nobis tempora, at dolorum sequi
              voluptate repellat laborum voluptate repellat laborum.
            </p>
          </div>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consequuntur deserunt error nobis tempora, at dolorum sequi voluptate
          repellat laborum voluptate repellat laborum Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Dolorem velit atque error magni id
          sed amet veritatis repudiandae natus! Consequatur! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Impedit voluptates quis
          eligendi id corrupti veniam voluptatum dolor recusandae officiis
          nisi!.
        </p>
      </div>
    </div>
  );
};
export default About;
