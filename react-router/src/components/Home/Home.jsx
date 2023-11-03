import React from "react";
import img1 from "../../images/react-router.png";
import bg from "../../images/bg.jpg";

const Home = () => {
  return (
    <>
      <div className="home ">
        <p className="h2 bg-danger text-white text-center p-4 mb-0">
          React Router
        </p>
        <div className="background">
          <img
            src={bg}
            alt=""
            style={{ width: "100%", height: "30rem", marginTop: "0" }}
          />
        </div>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={img1}
                alt="grid-img-router"
                style={{ width: "300px" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <p className="h5 mb-3">React-Router-Dom</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                consequuntur deserunt error nobis tempora, at dolorum sequi
                voluptate repellat laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
