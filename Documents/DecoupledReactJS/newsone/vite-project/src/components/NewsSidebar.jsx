import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function NewsSidebar(props) {
  let { trandingNews } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div class="col-12">
                  <div class="section-title">
                    <h4 class="m-0 text-uppercase font-weight-bold">
                      Latest News
                    </h4>
                    <a
                      class="text-secondary font-weight-medium text-decoration-none"
                      href=""
                    >
                      View All
                    </a>
                  </div>
                </div>
                {props["newsslidebar"].map((element, index) => (
                  <>
                    <div className="col-lg-6">
                      <div className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={element.imgUrl}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="bg-white border border-top-0 p-4">
                          <div className="mb-2">
                            <a
                              className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                              href=""
                            >
                              {element.category}
                            </a>
                            <a className="text-body" href="">
                              <small>Jan 01, 2045</small>
                            </a>
                          </div>
                          <a
                            className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                            href=""
                          >
                            {element.title}
                          </a>
                          <p className="m-0">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                          </p>
                        </div>
                        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                          <div className="d-flex align-items-center">
                            <img
                              className="rounded-circle mr-2"
                              src={element.imgUrl}
                              width={25}
                              height={25}
                              alt=""
                            />
                            <small>John Doe</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <small className="ml-3">
                              <i className="far fa-eye mr-2" />
                              12345
                            </small>
                            <small className="ml-3">
                              <i className="far fa-comment mr-2" />
                              123
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              {/* Social Follow Start */}
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Follow Us
                  </h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#39569E" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faTwitter}
                    />
                    <span className="social-link">12,345 Followers</span>
                  </a>
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#52AAF4" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faFacebookF}
                    />
                    <span className="social-link">12,345 Followers</span>
                  </a>
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#0185AE" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faYoutube}
                    />
                    <span className="social-link">12,345 Followers</span>
                  </a>
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#C8359D" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faInstagram}
                    />
                    <span className="font-weight-medium social-link">
                      12,345 Followers
                    </span>
                  </a>
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none mb-3"
                    style={{ background: "#DC472E" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faGooglePlusG}
                    />
                    <span className="font-weight-medium social-link">
                      12,345 Subscribers
                    </span>
                  </a>
                  <a
                    href=""
                    className="d-block w-100 text-white text-decoration-none"
                    style={{ background: "#055570" }}
                  >
                    <FontAwesomeIcon
                      className="fab fa-facebook-f text-center py-4 mr-3"
                      style={{ width: 65, background: "rgba(0, 0, 0, .2)" }}
                      icon={faLinkedin}
                    />
                    <span className="font-weight-medium social-link">
                      12,345 Followers
                    </span>
                  </a>
                </div>
              </div>
              {/* Social Follow End */}
              {/* Ads Start */}
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Advertisement
                  </h4>
                </div>
                <div className="bg-white text-center border border-top-0 p-3">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/news-800x500-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* Ads End */}
              {/* Popular News Start */}
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Tranding News
                  </h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                  {trandingNews.map((element, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center bg-white mb-3"
                      style={{ height: 110 }}
                    >
                      <img className="img-fluid" src={element.imgUrl} alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a
                            className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                            href=""
                          >
                            {element.category}
                          </a>
                          <a className="text-body" href="">
                            <small>Jan 01, 2045</small>
                          </a>
                        </div>
                        <a
                          className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                          href=""
                        >
                          {element.title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Popular News End */}
              {/* Newsletter Start */}
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Newsletter
                  </h4>
                </div>
                <div className="bg-white text-center border border-top-0 p-3">
                  <p>
                    Aliqu justo et labore at eirmod justo sea erat diam dolor
                    diam vero kasd
                  </p>
                  <div className="input-group mb-2" style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary font-weight-bold px-3">
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <small>Lorem ipsum dolor sit amet elit</small>
                </div>
              </div>
              {/* Newsletter End */}
              {/* Tags Start */}
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                  <div className="d-flex flex-wrap m-n1">
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Politics
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Business
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Corporate
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Business
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Health
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Education
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Science
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Business
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Foods
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Travel
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Foods
                    </a>{" "}
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Lifestyle
                    </a>
                  </div>
                </div>
              </div>
              {/* Tags End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsSidebar;
