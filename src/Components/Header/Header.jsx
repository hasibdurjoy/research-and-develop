import React from "react";

const Header = () => {
  return (
    <div>
      <header class="main-header header-style-one">
        <div class="header-top">
          <div class="container">
            <div class="outer-box clearfix">
              <div class="header-top_right pull-right">
                <div class="header-social-link-1">
                  <ul class="clearfix">
                    <li>
                      <a href="#">
                        <i class="fa fa-message" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header">
          <div class="container">
            <div class="outer-box">
              <div class="header-left">
                <div class="logo">
                  <a href="index.html">
                    <img
                      src="assets/images/Firmiti/Firmiti-Logo.png"
                      alt="Awesome Logo"
                      title=""
                      height="70px"
                      width="120px"
                    />
                  </a>
                </div>
              </div>

              <div class="header-right">
                <div class="nav-outer style1 clearfix">
                  <div class="mobile-nav-toggler">
                    <div class="inner">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </div>
                  </div>
                  <nav class="main-menu style1 navbar-expand-md navbar-light">
                    <div
                      class="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul class="navigation clearfix">
                        <li class="dropdown current">
                          <a href="#">KYC service</a>
                        </li>
                        <li>
                          <a href="about.html">Audit Service</a>
                        </li>
                        <li class="dropdown">
                          <a href="#">Project</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div class="header-right_buttom">
                  <div class="btns-box">
                    <a class="btn-one" href="contact.html">
                      <div class="border_line">
                        <img
                          src="assets/images/shape/button-border.png"
                          alt=""
                        />
                      </div>
                      <span class="txt">Request Audit</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sticky-header">
          <div class="container">
            <div class="clearfix">
              <div class="logo float-left">
                <a href="index.html" class="img-responsive">
                  <img
                    src="assets/images/Firmiti/Firmiti-Logo.png"
                    alt=""
                    title=""
                    height="50px"
                    width="120px"
                  />
                </a>
              </div>
              <div class="right-col float-right">
                <nav class="main-menu clearfix"></nav>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn">
            <span class="icon fa fa-times-circle"></span>
          </div>
          <nav class="menu-box">
            <div class="nav-logo">
              <a href="index.html">
                <img
                  src="assets/images/resources/mobilemenu-logo.png"
                  alt=""
                  title=""
                  height="50px"
                  width="120px"
                />
              </a>
            </div>
            <div class="menu-outer"></div>
            <div class="social-links">
              <ul class="clearfix">
                <li>
                  <a href="#">
                    <span class="fab fa fa-telegram-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa fa-twitter-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa fa-github-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa fa-google-plus-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa fa-youtube-square"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
