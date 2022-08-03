import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer font-small mdb-color lighten-3 pt-4">
      <div class="container">
        <div class="row">
          <h5>This is foo</h5>
          <div class="col-lg-2 col-md-12 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>

          <div class="col-lg-2 col-md-12 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).webp"
                class="img-fluid"
                alt=""
              />
              <Link to="#">
                <div class="mask rgba-white-light"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2022 Copyright:
        <Link to="#/"> MDsajid.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
