import * as React from "react";
import "./css/styles.css";
import "./css/bootstrap.css";

import logo from "./images/logo.png";
import img001 from "./images/001.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import basement from "./images/basement.jpg";

import calc1 from "./images/calc1.png";
import calc2 from "./images/calc2.png";
import calc3 from "./images/calc3.png";
import main from "./images/main.jpg";

import second from "./images/second.jpg";


export default function App() {
  const [tabType, setTabType] = React.useState<string>("tab17");

  const handleMenu = (e: any, tabType: any) => {
    e.preventDefault();
    console.log({ tabType });
    setTabType(tabType);
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div id="logo" className="pull-left">
                <a href="!#">
                  <img src={logo} alt="" title="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div id="phone-menu-container" className="hidden">
                <ul className="nav-menu">
                  <li className="menu-active">
                    <a href="!#">Home</a>
                  </li>
                  <li>
                    <a href="/">Find Property</a>
                  </li>
                  <li>
                    <a href="/">list property </a>
                  </li>
                  <li>
                    <a href="/">pre-construction</a>
                  </li>
                  <li>
                    <a href="/">contact</a>
                  </li>
                </ul>
              </div>

              <div
                id="nav-menu-container"
                className="nav-menu-container pull-right-header"
              >
                <ul className="nav-menu">
                  <li className="menu-active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Find Property</a>
                  </li>
                  <li>
                    <a href="/">list property </a>
                  </li>
                  <li>
                    <a href="/">pre-construction</a>
                  </li>
                  <li>
                    <a href="/">contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pull-right-header">
                <ul className="top-bar-text left-top-bar">
                  <li>
                    <a data-toggle="modal" data-target="#signin_signup" href="">
                      Sign In/Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                  <li className="select_box">
                    <select>
                      <option>CAD </option>
                      <option>INR </option>
                      <option>CAD </option>
                    </select>
                  </li>
                  <li className="select_box">
                    <select className="selectpicker">
                      <option value="pkr" data-icon="pkr">
                        PKR
                      </option>
                      <option value="uk" data-icon="gbp">
                        GBP
                      </option>
                      <option value="usd" data-icon="usd">
                        USD
                      </option>
                      <option value="eu" data-icon="euro">
                        EURO
                      </option>
                      <option value="aud" data-icon="aud">
                        AUD
                      </option>
                      <option value="afg" data-icon="afg">
                        AFG
                      </option>
                    </select>
                  </li>
                  <li>
                    <div className="drawer">
                      <a className="show">
                        <i className="fa fa-ellipsis-v"></i>{" "}
                        <i className="fa fa-ellipsis-v"></i>{" "}
                        <i className="fa fa-ellipsis-v"></i>
                      </a>
                      <div className="showhide">
                        <ul>
                          <li>
                            <a href="">
                              <img
                                src={calc1}
                                alt="mortgage Calculator"
                                title=""
                              />
                              <span>Mortgage Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                                src={calc2}
                                alt="Affordability Calculator"
                                title=""
                              />
                              <span>Affordability Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc3} alt="Home Calculator" title="" />
                              <span>Home Evaluation Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                                src={calc1}
                                alt="Mortgage Calculator"
                                title=""
                              />
                              <span>Mortgage Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                                src={calc2}
                                alt="Affordability Calculator"
                                title=""
                              />
                              <span>Affordability Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc3} alt="Home" title="" />
                              <span>Home Evaluation Calculator</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="slider-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>bedroom boundless</h1>
              <h5>
                <i className="fa fa-map-marker"></i> DELTA, 48 Boulevard
                Jordan, Mississauga
              </h5>
            </div>
            <div className="col-md-4">
              <ul className="text-right priceul">
                <li>
                  {" "}
                  57M <span>for Sale</span>
                </li>
                <li> $2,19,000</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumb">
              <li>Home </li>
              <li>Ontario </li>
              <li>Markham </li>
              <li>Thornily </li>
              <li>Project Name </li>
              <li>Bedroom Boundless</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="main">
        <div className="listing_details">
          <div className="listing_details_div">
            <div className="container">
              <div id="about" className="listing_details_section modeldetails">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row gallerysection">
                      <div className="col-md-10">
                        <div className="large">
                          <img src={img7} />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <ul className="l-none row">
                          <li className="small">
                            <img src={img4} alt="small" />
                          </li>
                          <li className="small">
                            <img src={img5}  alt="small"/>
                          </li>
                          <li className="small">
                            <img src={img6}  alt="small"/>
                            <a href="">
                              <i className="fa fa-image"></i> 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                    <div className="modelfeatures">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="feature">
                            <i className="fa fa-bed"></i>
                            <span>2 Bedrooms</span>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="feature">
                            <i className="fa fa-bath"></i>
                            <span>2 Bathrooms</span>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="feature">
                            <i className="fa fa-sliders-h"></i>
                            <span>501 Sqft.</span>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="feature">
                            <i className="fa fa-expand-arrows-alt"></i>
                            <span>$1000 per Sqft.</span>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <a className="feature">
                            <i className="fa fa-chart-bar"></i>
                            <span>
                              Rental Score<small>$5,001</small>
                            </span>
                          </a>
                        </div>
                        <div className="col-md-2">
                          <a className="feature">
                            <i className="fa fa-chart-pie"></i>
                            <span>Investment Score</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col-md-12">
                        <h2>Description</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col-md-12">
                        <h2>floor plan details</h2>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-md-6">
                        <ul className="amenities l-none">
                          <li>
                            <b>Model name: </b>57M
                          </li>
                          <li>
                            <b>Property Type:</b> Suite
                          </li>
                          <li>
                            <b>Ownership: </b>Condo
                          </li>
                          <li>
                            <b>Interior size:</b> from 340 sqft
                          </li>
                          <li>
                            <b>Lot size: </b>123
                          </li>
                          <li>
                            <b>Ceiling height:</b> 123 Ft.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="amenities l-none">
                          <li>
                            <b>No. of stories or levels: </b>3
                          </li>
                          <li>
                            <b>Orientation: </b>LS
                          </li>
                          <li>
                            <b>Utilities: </b>--
                          </li>
                          <li>
                            <b>HVAC: </b>Propane, gravity
                          </li>
                          <li>
                            <b>Parking/garage:</b> 3
                          </li>
                          <li>
                            <b>Parking: </b>RV
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <h2>Deposit Structure</h2>
                        <ul className="amenities l-none">
                          <li>$5,000 on Signing Balance of</li>
                          <li>5 % in 30 days</li>
                          <li>5% in 180 days</li>
                          <li>5% in 540 days</li>
                          <li>5% on Occupancy </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h2>Incentives</h2>
                        <ul className="l-none">
                          <li>
                            - Free Assignment (Value of $7,500, plus Legal Fee &
                            HST)
                          </li>
                          <li>
                            - Discounted Parking (From $60,000 to $55,000)
                          </li>
                          <li>- Free Locker (Value of $5,000)</li>
                          <li>- Right to Lease during Occupancy</li>
                          <li>- Free Moveable Island (Value of $3,500)</li>
                          <li>
                            - Capped Development Charges
                            <ul className="l-none">
                              <li>$10,000 for 1B and 1B+D</li>
                              <li>$12,000 for 2B and up </li>
                            </ul>
                          </li>
                          <li>- 20% Extended Deposit Structure</li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row mb-1rem">
                      <div className="col-md-12">
                        <link
                          rel="stylesheet"
                          href="tabs/jQueryTab.css"
                          type="text/css"
                          media="screen"
                        />
                        <link
                          rel="stylesheet"
                          href="tabs/animation.css"
                          type="text/css"
                          media="screen"
                        />
                        <div className="tabs-5">
                          <ul className="tabs">
                            <li className={tabType === "tab17" ? "active" : ""}>
                              <a
                                href="!"
                                onClick={(e) => handleMenu(e, "tab17")}
                              >
                                Main Floor
                              </a>
                            </li>
                            <li className={tabType === "tab18" ? "active" : ""}>
                              <a
                                href="!"
                                onClick={(e) => handleMenu(e, "tab18")}
                              >
                                Second Level
                              </a>
                            </li>
                            <li className={tabType === "tab19" ? "active" : ""}>
                              <a
                                href="!"
                                onClick={(e) => handleMenu(e, "tab19")}
                              >
                                Basements
                              </a>
                            </li>
                          </ul>
                          <div className="tab_content_wrapper">
                            {tabType === "tab17" && (
                              <div className="tab_content" id="tab17">
                                <img className="img-responsive" src={main} />
                              </div>
                            )}
                            {tabType === "tab18" && (
                              <div className="tab_content" id="tab18">
                                <img className="img-responsive" src={second} />
                              </div>
                            )}
                            {tabType === "tab19" && (
                              <div className="tab_content" id="tab19">
                                <img
                                  className="img-responsive"
                                  src={basement}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="section-border mb-1rem">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>amenities nearby</h2>
                          <p> amenities map plugin here</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className=" mb-1rem">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>start your mortgage application</h2>
                          <div className="mortgage-application">
                            <div className="row">
                              <div className="col-sm-1">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="col-sm-8">
                                <h5>
                                  You may qualify for{" "}
                                  <label className="text-big">1.74%</label> 3
                                  years fixed mortgage{" "}
                                </h5>
                                <p>Marathon Mortgage Standard - Promotion</p>
                              </div>
                              <div className="col-sm-3">
                                <a className="red-buttons" href="">
                                  apply now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className=" mb-1rem">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>similar Homes</h2>

                          <div className="listing-grid">
                            <div className="row">
                              <div className="col-md-3 col-sm-3">
                                <div className="thumbnail_one mb-30 color-secondery">
                                  <div className="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span className="fa fa-heart"></span>{" "}
                                    </a>
                                    <div className="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div className="thum_one_content">
                                    <div className="thum_title">
                                      <h5 className="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          className="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 className="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                <div className="thumbnail_one mb-30 color-secondery">
                                  <div className="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span className="fa fa-heart"></span>{" "}
                                    </a>
                                    <div className="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div className="thum_one_content">
                                    <div className="thum_title">
                                      <h5 className="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          className="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 className="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                <div className="thumbnail_one mb-30 color-secondery">
                                  <div className="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span className="fa fa-heart"></span>{" "}
                                    </a>
                                    <div className="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div className="thum_one_content">
                                    <div className="thum_title">
                                      <h5 className="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          className="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 className="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-3">
                                <div className="thumbnail_one mb-30 color-secondery">
                                  <div className="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span className="fa fa-heart"></span>{" "}
                                    </a>
                                    <div className="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div className="thum_one_content">
                                    <div className="thum_title">
                                      <h5 className="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          className="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 className="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="col-md-3">
                    <div className="listing_details_sidebar">
                      <div className="side_widget agent_details text-center mt-0">
                        <h4 className="mb-0">by Remington Homes </h4>
                        <a href="">All Listings</a>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="prev-next-paging">
                            <div className="row">
                              <div className="col-sm-3">
                                <a className="btn prev">
                                  {" "}
                                  <i className="fa fa-angle-left"></i> prev
                                </a>
                              </div>
                              <div className="col-sm-6 text-center">
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="1 of 45"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <a className="btn next">
                                  next <i className="fa fa-angle-right"></i>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-8">
                          <ul className="black-buttons l-none w-37 mb-0">
                            <li>
                              <a href="#" data-tooltip="true" title="Print">
                                {" "}
                                <i className="fa fa-print"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="true"
                                title="Save Listing"
                              >
                                {" "}
                                <i className="fa fa-heart"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#sharelisting"
                                data-tooltip="true"
                                title="Share Listing"
                              >
                                {" "}
                                <i className="fa fa-share"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#notify"
                                data-tooltip="true"
                                title="Notify Me"
                              >
                                {" "}
                                <i className="fa fa-bell"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <a href="projectdetails.html" className="blk-buttons">
                            {" "}
                            project details
                          </a>
                        </div>
                      </div>

                      <div className="side_widget analytics_area">
                        <h3>contact </h3>
                        <form className="form-horizontal">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="control-group">
                                <label
                                  className="control-label text-uppercase"
                                  htmlFor="Email"
                                >
                                  Your Name
                                </label>
                                <div className="controls">
                                  <input
                                    id="Email"
                                    name="Email"
                                    className="form-control"
                                    type="text"
                                    required={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="control-group">
                                <label
                                  className="control-label text-uppercase"
                                  htmlFor="Email"
                                >
                                  your Email
                                </label>
                                <div className="controls">
                                  <input
                                    id="Email"
                                    name="Email"
                                    className="form-control"
                                    type="text"
                                    required={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="control-group">
                                <label
                                  className="control-label text-uppercase"
                                  htmlFor="userid"
                                >
                                  your mobile
                                </label>
                                <div className="controls">
                                  <input
                                    id="userid"
                                    name="userid"
                                    className="form-control"
                                    type="text"
                                    required={true}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="control-group">
                                <label
                                  className="control-label text-uppercase"
                                  htmlFor="userid"
                                >
                                  additional details
                                </label>
                                <div className="controls">
                                  <textarea className="form-control"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="control-group">
                                <label
                                  className="control-label"
                                  htmlFor="confirmsignup"
                                ></label>
                                <div className="controls">
                                  <button className="red-buttons" type="submit">
                                    submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="side_widget agent_details text-center">
                        <h4>google ad </h4>
                      </div>
                      <div className="side_widget agent_details text-center">
                        <h4>agent ad </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div id="about" className="bg3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">contact us</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">quick link</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">about us</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">properties</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">newsletter</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <div className="container">
            <div className="row">
              <p className="col-md-12">
                &copy; 2020 Copyright. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      <div id="signin_signup" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <br />
            <div className="bs-example bs-example-tabs">
              <ul id="myTab" className="nav nav-tabs">
                <li className="active">
                  <a href="#signin" data-toggle="tab">
                    Sign In
                  </a>
                </li>
                <li className="">
                  <a href="#signup" data-toggle="tab">
                    Register
                  </a>
                </li>
                <li className="">
                  <a href="#why" data-toggle="tab">
                    Why?
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-body">
              <div id="myTabContent" className="tab-content">
                <div className="tab-pane fade in" id="why">
                  <p>
                    We need this information so that you can receive access to
                    the site and its content. Rest assured your information will
                    not be sold, traded, or given to anyone.
                  </p>
                  <p>
                    <br /> Please contact{" "}
                    <a href="mailto:info@dalemundi.com">info@dalemundi.com</a>{" "}
                    for any other inquiries.
                  </p>
                </div>
                <div className="tab-pane active in" id="signin">
                  <form className="form-horizontal">
                    <fieldset>
                      <div className="control-group">
                        <label className="control-label" htmlFor="userid">
                          Alias:
                        </label>
                        <div className="controls">
                          <input
                            id="userid"
                            name="userid"
                            type="text"
                            className="form-control input-medium"
                            placeholder="JoeSixpack"
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="control-group">
                        <label
                          className="control-label"
                          htmlFor="passwordinput"
                        >
                          Password:
                        </label>
                        <div className="controls">
                          <input
                            required={true}
                            id="passwordinput"
                            name="passwordinput"
                            className="form-control input-medium"
                            type="password"
                            placeholder="********"
                          />
                        </div>
                      </div>

                      <div className="control-group">
                        <label
                          className="control-label"
                          htmlFor="rememberme"
                        ></label>
                        <div className="controls">
                          <label
                            className="checkbox inline"
                            htmlFor="rememberme-0"
                          >
                            <input
                              type="checkbox"
                              name="rememberme"
                              id="rememberme-0"
                              value="Remember me"
                            />
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="control-group">
                        <label
                          className="control-label"
                          htmlFor="signin"
                        ></label>
                        <div className="controls">
                          <button
                            id="signin"
                            name="signin"
                            className="btn btn-success"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="tab-pane fade" id="signup">
                  <form className="form-horizontal">
                    <fieldset>
                      <div className="control-group">
                        <label className="control-label" htmlFor="Email">
                          Email:
                        </label>
                        <div className="controls">
                          <input
                            id="Email"
                            name="Email"
                            className="form-control"
                            type="text"
                            placeholder="JoeSixpack@sixpacksrus.com"
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="control-group">
                        <label className="control-label" htmlFor="userid">
                          Alias:
                        </label>
                        <div className="controls">
                          <input
                            id="userid"
                            name="userid"
                            className="form-control"
                            type="text"
                            placeholder="JoeSixpack"
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="control-group">
                        <label className="control-label" htmlFor="password">
                          Password:
                        </label>
                        <div className="controls">
                          <input
                            id="password"
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="********"
                            required={true}
                          />
                          <em>1-8 Characters</em>
                        </div>
                      </div>

                      <div className="control-group">
                        <label
                          className="control-label"
                          htmlFor="reenterpassword"
                        >
                          Re-Enter Password:
                        </label>
                        <div className="controls">
                          <input
                            id="reenterpassword"
                            className="form-control"
                            name="reenterpassword"
                            type="password"
                            placeholder="********"
                            required={true}
                          />
                        </div>
                      </div>

                      <br />
                      <div className="control-group">
                        <label className="control-label" htmlFor="humancheck">
                          Humanity Check:
                        </label>
                        <div className="controls">
                          <label
                            className="radio inline"
                            htmlFor="humancheck-0"
                          >
                            <input
                              type="radio"
                              name="humancheck"
                              id="humancheck-0"
                              value="robot"
                              checked={true}
                            />
                            I'm a Robot
                          </label>
                          <label
                            className="radio inline"
                            htmlFor="humancheck-1"
                          >
                            <input
                              type="radio"
                              name="humancheck"
                              id="humancheck-1"
                              value="human"
                            />
                            I'm Human
                          </label>
                        </div>
                      </div>

                      <div className="control-group">
                        <label
                          className="control-label"
                          htmlFor="confirmsignup"
                        ></label>
                        <div className="controls">
                          <button
                            id="confirmsignup"
                            name="confirmsignup"
                            className="btn btn-success"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sharelisting" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Share this property</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <button type="button" className="btn btn-fb">
                <i className="fa fa-facebook-f pr-1"></i> Facebook
              </button>

              <button type="button" className="btn btn-tw">
                <i className="fa fa-twitter pr-1"></i> Twitter
              </button>

              <button type="button" className="btn btn-gplus">
                <i className="fa fa-google-plus-g pr-1"></i> Google +
              </button>

              <button type="button" className="btn btn-li">
                <i className="fa fa-linkedin-in pr-1"></i> Linkedin
              </button>

              <button type="button" className="btn btn-ins">
                <i className="fa fa-instagram pr-1"></i> Instagram
              </button>

              <button type="button" className="btn btn-pin">
                <i className="fa fa-pinterest pr-1"></i> Pinterest
              </button>

              <button type="button" className="btn btn-yt">
                <i className="fa fa-youtube pr-1"></i> Youtube
              </button>

              <button type="button" className="btn btn-email">
                <i className="fas fa-envelope pr-1"></i> Email
              </button>

              <button type="button" className="btn btn-whatsapp">
                <i className="fa fa-whatsapp pr-1"></i> Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="notify" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Notify Me</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body form-horizontal-ul"></div>
          </div>
        </div>
      </div>
    </>
  );
}
