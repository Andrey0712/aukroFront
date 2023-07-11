import React from "react";
import "./NoPage.css";
//import Page404 from "../../images/dribbble_1.gif";

const NoPage = () => {
  return (
    <section className="page_404">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-sm-12 ">
          <div className=" text-center">
            <div className="four_zero_four_bg">
              <h1>404</h1>
            </div>

            <div className="contant_box_404">
              <h3>
                Look like you're lost the page you are looking for not avaible!
              </h3>

              <a href="/" className="link_404">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default NoPage;
