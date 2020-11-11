import * as React from "react";
import "./css/styles.css";
import "./css/bootstrap.css";

import logo from "./images/logo.png";
import img001 from "./images/001.jpg";
import img01 from "./images/01.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import area from "./images/area.png";
import basement from "./images/basement.jpg";
import bath from "./images/bath.png";
import bed from "./images/bed.png";
import blankAvatar from "./images/blank-avatar.jpg";
import calc1 from "./images/calc1.png";
import calc2 from "./images/calc2.png";
import calc3 from "./images/calc3.png";
import garage from "./images/garage.png";
import graph from "./images/graph.jpg";
import graph1 from "./images/graph1.jpg";
import main from "./images/main.jpg";
import pricehistory from "./images/pricehistory.png";
import second from "./images/second.jpg";
import slider from "./images/slider.jpg";

export default function App() {
  return (
    <>
      <header id="header">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div id="logo" class="pull-left">
                <a href="#">
                  <img src={logo} alt="" title="" />
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div id="phone-menu-container" class="hidden">
                <ul class="nav-menu">
                  <li class="menu-active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Find Property</a>
                  </li>
                  <li>
                    <a href="#">list property </a>
                  </li>
                  <li>
                    <a href="#">pre-construction</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>

              <div
                id="nav-menu-container"
                class="nav-menu-container pull-right-header"
              >
                <ul class="nav-menu">
                  <li class="menu-active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Find Property</a>
                  </li>
                  <li>
                    <a href="#">list property </a>
                  </li>
                  <li>
                    <a href="#">pre-construction</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pull-right-header">
                <ul class="top-bar-text left-top-bar">
                  <li>
                    <a data-toggle="modal" data-target="#signin_signup" href="">
                      Sign In/Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                  <li class="select_box">
                    <select>
                      <option>CAD </option>
                      <option>INR </option>
                      <option>CAD </option>
                    </select>
                  </li>
                  <li class="select_box">
                    <select class="selectpicker">
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
                    <div class="drawer">
                      <a class="show">
                        <i class="fa fa-ellipsis-v"></i>{" "}
                        <i class="fa fa-ellipsis-v"></i>{" "}
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="showhide">
                        <ul>
                          <li>
                            <a href="">
                              <img src={calc1} alt="" title="" />
                              <span>Mortgage Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc2} alt="" title="" />
                              <span>Affordibility Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc3} alt="" title="" />
                              <span>Home Evaluation Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc1} alt="" title="" />
                              <span>Mortgage Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc2} alt="" title="" />
                              <span>Affordibility Calculator</span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src={calc3} alt="" title="" />
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
      <div class="slider-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h1>bedroom boundless</h1>
              <h5>
                <i class="fa fa-map-marker"></i> DELTA, 48 Boulevard Jourdan,
                Mississauga
              </h5>
            </div>
            <div class="col-md-4">
              <ul class="text-right priceul">
                <li>
                  {" "}
                  57M <span>for Sale</span>
                </li>
                <li> $2,19,000</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="breadcrumbs">
          <div class="container">
            <ul class="breadcrumb">
              <li>Home </li>
              <li>Ontario </li>
              <li>Markham </li>
              <li>Thornhill </li>
              <li>Project Name </li>
              <li>Bedroom Boundless</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="main">
        <div class="listing_details">
          <div class="listing_details_div">
            <div class="container">
              <div id="about" class="listing_details_section modeldetails">
                <div class="row">
                  <div class="col-md-9">
                    <div class="row gallerysection">
                      <div class="col-md-10">
                        <div class="large">
                          <img src={img7} />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <ul class="l-none row">
                          <li class="small">
                            <img src={img4} />
                          </li>
                          <li class="small">
                            <img src={img5} />
                          </li>
                          <li class="small">
                            <img src={img6} />
                            <a href="">
                              <i class="fa fa-image"></i> 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="clearfix"></div>
                    <div class="modelfeatures">
                      <div class="row">
                        <div class="col-md-2">
                          <div class="feature">
                            <i class="fa fa-bed"></i>
                            <span>2 Bedrooms</span>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="feature">
                            <i class="fa fa-bath"></i>
                            <span>2 Bathrooms</span>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="feature">
                            <i class="fa fa-sliders-h"></i>
                            <span>501 Sqft.</span>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="feature">
                            <i class="fa fa-expand-arrows-alt"></i>
                            <span>$1000 per Sqft.</span>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <a class="feature">
                            <i class="fa fa-chart-bar"></i>
                            <span>
                              Rental Score<small>$5,001</small>
                            </span>
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a class="feature">
                            <i class="fa fa-chart-pie"></i>
                            <span>Investment Score</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-md-12">
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
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-md-12">
                        <h2>floor plan details</h2>
                      </div>
                      <div class="clearfix"></div>
                      <div class="col-md-6">
                        <ul class="amenities l-none">
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
                      <div class="col-md-6">
                        <ul class="amenities l-none">
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
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-md-6">
                        <h2>Deposit Structure</h2>
                        <ul class="amenities l-none">
                          <li>$5,000 on Signing Balance of</li>
                          <li>5 % in 30 days</li>
                          <li>5% in 180 days</li>
                          <li>5% in 540 days</li>
                          <li>5% on Occupancy </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <h2>Incentives</h2>
                        <ul class="l-none">
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
                            <ul class="l-none">
                              <li>$10,000 for 1B and 1B+D</li>
                              <li>$12,000 for 2B and up </li>
                            </ul>
                          </li>
                          <li>- 20% Extended Deposit Structure</li>
                        </ul>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row mb-1rem">
                      <div class="col-md-12">
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
                        <div class="tabs-5">
                          <ul class="tabs">
                            <li class="active">
                              <a href="#tab17">Main Floor</a>
                            </li>
                            <li>
                              <a href="#tab18">Second Level</a>
                            </li>
                            <li>
                              <a href="#tab19">Basements</a>
                            </li>
                          </ul>
                          <div class="tab_content_wrapper">
                            <div class="tab_content" id="tab17">
                              <img class="img-responsive" src={main} />
                            </div>
                            <div class="tab_content" id="tab18">
                              <img class="img-responsive" src={second} />
                            </div>
                            <div class="tab_content" id="tab19">
                              <img class="img-responsive" src={basement} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>

                    <div class="section-border mb-1rem">
                      <div class="row">
                        <div class="col-md-12">
                          <h2>amenities nearby</h2>
                          <p> amenities map plugin here</p>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class=" mb-1rem">
                      <div class="row">
                        <div class="col-md-12">
                          <h2>start your mortgage application</h2>
                          <div class="mortgage-application">
                            <div class="row">
                              <div class="col-sm-1">
                                <i class="fa fa-check"></i>
                              </div>
                              <div class="col-sm-8">
                                <h5>
                                  You may qualify for{" "}
                                  <label class="text-big">1.74%</label> 3 years
                                  fixed mortgage{" "}
                                </h5>
                                <p>Marathon Mortgage Standard - Promotion</p>
                              </div>
                              <div class="col-sm-3">
                                <a class="red-buttons" href="">
                                  apply now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class=" mb-1rem">
                      <div class="row">
                        <div class="col-md-12">
                          <h2>similar Homes</h2>

                          <div class="listing-grid">
                            <div class="row">
                              <div class="col-md-3 col-sm-3">
                                <div class="thumbnail_one mb-30 color-secondery">
                                  <div class="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span class="fa fa-heart"></span>{" "}
                                    </a>
                                    <div class="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div class="thum_one_content">
                                    <div class="thum_title">
                                      <h5 class="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          class="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 class="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 col-sm-3">
                                <div class="thumbnail_one mb-30 color-secondery">
                                  <div class="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span class="fa fa-heart"></span>{" "}
                                    </a>
                                    <div class="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div class="thum_one_content">
                                    <div class="thum_title">
                                      <h5 class="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          class="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 class="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 col-sm-3">
                                <div class="thumbnail_one mb-30 color-secondery">
                                  <div class="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span class="fa fa-heart"></span>{" "}
                                    </a>
                                    <div class="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div class="thum_one_content">
                                    <div class="thum_title">
                                      <h5 class="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          class="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 class="hover_primary">
                                        <small>Sales from</small> $50,000
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 col-sm-3">
                                <div class="thumbnail_one mb-30 color-secondery">
                                  <div class="image_area overlay_one overfollow">
                                    <img src={img001} alt="" />
                                    <a>
                                      <span class="fa fa-heart"></span>{" "}
                                    </a>
                                    <div class="sale sale_position">
                                      {" "}
                                      <span>sale</span>
                                    </div>
                                  </div>
                                  <div class="thum_one_content">
                                    <div class="thum_title">
                                      <h5 class="hover_primary">
                                        <a href="">Apolo Family Appartment</a>
                                      </h5>
                                      <p>
                                        <i
                                          class="fa fa-map-marker"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Ontario, Canada
                                      </p>
                                      <h5 class="hover_primary">
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
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-md-3">
                    <div class="listing_details_sidebar">
                      <div class="side_widget agent_details text-center mt-0">
                        <h4 class="mb-0">by Remington Homes </h4>
                        <a href="">All Listings</a>
                      </div>

                      <div class="row">
                        <div class="col-sm-12">
                          <div class="prev-next-paging">
                            <div class="row">
                              <div class="col-sm-3">
                                <a class="btn prev">
                                  {" "}
                                  <i class="fa fa-angle-left"></i> prev
                                </a>
                              </div>
                              <div class="col-sm-6 text-center">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value="1 of 45"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <a class="btn next">
                                  next <i class="fa fa-angle-right"></i>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-8">
                          <ul class="black-buttons l-none w-37 mb-0">
                            <li>
                              <a href="#" data-tooltip="true" title="Print">
                                {" "}
                                <i class="fa fa-print"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="true"
                                title="Save Listing"
                              >
                                {" "}
                                <i class="fa fa-heart"></i>{" "}
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
                                <i class="fa fa-share"></i>{" "}
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
                                <i class="fa fa-bell"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <a href="projectdetails.html" class="blk-buttons">
                            {" "}
                            project details
                          </a>
                        </div>
                      </div>

                      <div class="side_widget analytics_area">
                        <h3>contact </h3>
                        <form class="form-horizontal">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="control-group">
                                <label
                                  class="control-label text-uppercase"
                                  for="Email"
                                >
                                  Your Name
                                </label>
                                <div class="controls">
                                  <input
                                    id="Email"
                                    name="Email"
                                    class="form-control"
                                    type="text"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-12">
                              <div class="control-group">
                                <label
                                  class="control-label text-uppercase"
                                  for="Email"
                                >
                                  your Email
                                </label>
                                <div class="controls">
                                  <input
                                    id="Email"
                                    name="Email"
                                    class="form-control"
                                    type="text"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-12">
                              <div class="control-group">
                                <label
                                  class="control-label text-uppercase"
                                  for="userid"
                                >
                                  your mobile
                                </label>
                                <div class="controls">
                                  <input
                                    id="userid"
                                    name="userid"
                                    class="form-control"
                                    type="text"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="control-group">
                                <label
                                  class="control-label text-uppercase"
                                  for="userid"
                                >
                                  additional details
                                </label>
                                <div class="controls">
                                  <textarea class="form-control"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="control-group">
                                <label
                                  class="control-label"
                                  for="confirmsignup"
                                ></label>
                                <div class="controls">
                                  <button class="red-buttons" type="submit">
                                    submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="side_widget agent_details text-center">
                        <h4>google ad </h4>
                      </div>
                      <div class="side_widget agent_details text-center">
                        <h4>agent ad </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>

        <div id="about" class="bg3">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="widget">
                  <h4 class="widget-title">contact us</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 col-md-6">
                <div class="widget">
                  <h4 class="widget-title">quick link</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="widget">
                  <h4 class="widget-title">about us</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="widget">
                  <h4 class="widget-title">properties</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="widget">
                  <h4 class="widget-title">newsletter</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icofont icofont-curved-double-right"></i>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright text-center">
          <div class="container">
            <div class="row">
              <p class="col-md-12">
                &copy; 2020 Copyright. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>

      <div id="signin_signup" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <br />
            <div class="bs-example bs-example-tabs">
              <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                  <a href="#signin" data-toggle="tab">
                    Sign In
                  </a>
                </li>
                <li class="">
                  <a href="#signup" data-toggle="tab">
                    Register
                  </a>
                </li>
                <li class="">
                  <a href="#why" data-toggle="tab">
                    Why?
                  </a>
                </li>
              </ul>
            </div>
            <div class="modal-body">
              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade in" id="why">
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
                <div class="tab-pane active in" id="signin">
                  <form class="form-horizontal">
                    <fieldset>
                      <div class="control-group">
                        <label class="control-label" for="userid">
                          Alias:
                        </label>
                        <div class="controls">
                          <input
                            required=""
                            id="userid"
                            name="userid"
                            type="text"
                            class="form-control"
                            placeholder="JoeSixpack"
                            class="input-medium"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="passwordinput">
                          Password:
                        </label>
                        <div class="controls">
                          <input
                            required=""
                            id="passwordinput"
                            name="passwordinput"
                            class="form-control"
                            type="password"
                            placeholder="********"
                            class="input-medium"
                          />
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="rememberme"></label>
                        <div class="controls">
                          <label class="checkbox inline" for="rememberme-0">
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

                      <div class="control-group">
                        <label class="control-label" for="signin"></label>
                        <div class="controls">
                          <button
                            id="signin"
                            name="signin"
                            class="btn btn-success"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class="tab-pane fade" id="signup">
                  <form class="form-horizontal">
                    <fieldset>
                      <div class="control-group">
                        <label class="control-label" for="Email">
                          Email:
                        </label>
                        <div class="controls">
                          <input
                            id="Email"
                            name="Email"
                            class="form-control"
                            type="text"
                            placeholder="JoeSixpack@sixpacksrus.com"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="userid">
                          Alias:
                        </label>
                        <div class="controls">
                          <input
                            id="userid"
                            name="userid"
                            class="form-control"
                            type="text"
                            placeholder="JoeSixpack"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="password">
                          Password:
                        </label>
                        <div class="controls">
                          <input
                            id="password"
                            name="password"
                            class="form-control"
                            type="password"
                            placeholder="********"
                            required=""
                          />
                          <em>1-8 Characters</em>
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="reenterpassword">
                          Re-Enter Password:
                        </label>
                        <div class="controls">
                          <input
                            id="reenterpassword"
                            class="form-control"
                            name="reenterpassword"
                            type="password"
                            placeholder="********"
                            required=""
                          />
                        </div>
                      </div>

                      <br />
                      <div class="control-group">
                        <label class="control-label" for="humancheck">
                          Humanity Check:
                        </label>
                        <div class="controls">
                          <label class="radio inline" for="humancheck-0">
                            <input
                              type="radio"
                              name="humancheck"
                              id="humancheck-0"
                              value="robot"
                              checked="checked"
                            />
                            I'm a Robot
                          </label>
                          <label class="radio inline" for="humancheck-1">
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

                      <div class="control-group">
                        <label
                          class="control-label"
                          for="confirmsignup"
                        ></label>
                        <div class="controls">
                          <button
                            id="confirmsignup"
                            name="confirmsignup"
                            class="btn btn-success"
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
            <div class="modal-footer">
              <center>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>

      <div id="sharelisting" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Share this property</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <button type="button" class="btn btn-fb">
                <i class="fa fa-facebook-f pr-1"></i> Facebook
              </button>

              <button type="button" class="btn btn-tw">
                <i class="fa fa-twitter pr-1"></i> Twitter
              </button>

              <button type="button" class="btn btn-gplus">
                <i class="fa fa-google-plus-g pr-1"></i> Google +
              </button>

              <button type="button" class="btn btn-li">
                <i class="fa fa-linkedin-in pr-1"></i> Linkedin
              </button>

              <button type="button" class="btn btn-ins">
                <i class="fa fa-instagram pr-1"></i> Instagram
              </button>

              <button type="button" class="btn btn-pin">
                <i class="fa fa-pinterest pr-1"></i> Pinterest
              </button>

              <button type="button" class="btn btn-yt">
                <i class="fa fa-youtube pr-1"></i> Youtube
              </button>

              <button type="button" class="btn btn-email">
                <i class="fas fa-envelope pr-1"></i> Email
              </button>

              <button type="button" class="btn btn-whatsapp">
                <i class="fa fa-whatsapp pr-1"></i> Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="notify" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Notify Me</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body form-horizontal-ul"></div>
          </div>
        </div>
      </div>
    </>
  );
}
