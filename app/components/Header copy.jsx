import ServicesMenu from "@/app/common-components/ServicesMenu";


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="container-fluid">
            <div className="top-content">
              <div className="top-header-content">
                <a className="topbar-text">
                  <img src="./images/phone.png" alt="" />
                  Under Attack? <span>09668200222</span>
                </a>

                <a className="time-offc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  </svg>
                  <span> Mon - Sat 9:30 am – 8:30 pm</span>
                </a>
              </div>

              <div className="header-info">
                <div className="info-item">
                  Follow Us on:
                  <div className="social-menu">
                    <ul>
                      <li><a href="https://x.com/threatsys" target="_blank"><img src="./images/twitter.png" alt="" /></a></li>
                      <li><a href="https://www.instagram.com/threatsys/" target="_blank"><img src="./images/instagram.png" alt="" /></a></li>
                      <li><a href="https://www.facebook.com/threatsys" target="_blank"><img src="./images/facebook-app-symbol.png" alt="" /></a></li>
                      <li><a href="https://www.youtube.com/@ThreatsysTechnologies" target="_blank"><img src="./images/youtube.png" alt="" /></a></li>
                      <li><a href="https://www.linkedin.com/company/threatsys/" target="_blank"><img src="./images/linkedin.png" alt="" /></a></li>
                    </ul>
                  </div>
                </div>

                {/* THEME SWITCHER */}
                <div className="theme-switcher">
                  <button className="theme-btn" id="themeToggle">
                    <span id="themeIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8..." />
                      </svg>
                    </span>
                  </button>

                  <div className="theme-dropdown" id="themeDropdown">
                    <div className="theme-option" data-theme="light">Light</div>
                    <div className="theme-option" data-theme="dark">Dark</div>
                    <div className="theme-option" data-theme="auto">Auto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER BOTTOM */}
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-2">
                <div className="header-logo">
                  <img src="./images/header-shape.png" className="header-shape" alt="" />
                  <a href="./index.html" className="inr-logo">
                    <img src="./images/TT-logo-light.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-10">
                <div className="right-header">
                  <div className="header-menu">
                    <ul className="header-ul">

                      {/* COMPANY MENU */}
                      <li className="menu-item has-menu" data-menu="company-dd">
                        <a>Company</a>
                        <div className="dropdown-container simple-dropdown" id="company-dd">
                          <ul>
                            <li><a href="./about.html">About</a></li>
                            <li><a href="./core-values.html">Core Values</a></li>
                            <li><a href="./Teams.html">Leadership Team</a></li>
                            <li><a href="./careers.html">We are Hiring</a></li>
                            <li><a href="./why-choose-us.html">Why Choose Us</a></li>
                            <li><a href="./locations.html">Our Locations</a></li>
                            <li><a href="./news-coverage.html">News Coverage</a></li>
                            <li><a href="./faq.html">FAQ</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* SERVICES MENU (Accordion) */}
                      {/* <li className="menu-item services-item has-menu" data-menu="services-menu">
                        <a>Services</a>

                        <div className="dropdown-container mega-menu" id="services-menu">
                          <ul className="accordion-menu">
                            <li className="acc-item">
                              <button className="acc-btn">
                                <img src="./images/security-.png" alt="" />
                                Cyber Security Testing
                                <span className="arrow-icon">▾</span>
                              </button>
                              <ul className="acc-content">
                                <li><a href="./cyber-security-testing/web-application-security-testing.html">Web Application Testing</a></li>
                                <li><a href="./cyber-security-testing/network-penetration-testing.html">Network Pentesting</a></li>
                                <li><a href="">API Assessment</a></li>
                                <li><a href="">Mobile Apps Testing</a></li>
                                <li><a href="">Thick Client Testing</a></li>
                                <li><a href="">IOT Testing</a></li>
                              </ul>
                            </li>

                            <li className="acc-item">
                              <button className="acc-btn">
                                <img src="./images/consulting.png" alt="" />
                                Security Consulting
                                <span className="arrow-icon">▾</span>
                              </button>
                              <ul className="acc-content">
                                <li><a href="">External Pentesting</a></li>
                                <li><a href="">Internal Assessment</a></li>
                                <li><a href="">Firewall Review</a></li>
                                <li><a href="">Router/Switch Audit</a></li>
                              </ul>
                            </li>

                            <li className="acc-item">
                              <button className="acc-btn">
                                <img src="./images/forensic.png" alt="" />
                                Innovative Cyber Services
                                <span className="arrow-icon">▾</span>
                              </button>
                              <ul className="acc-content">
                                <li><a href="">AWS Assessment</a></li>
                                <li><a href="">Azure Audit</a></li>
                                <li><a href="">GCP Review</a></li>
                              </ul>
                            </li>

                            <li className="acc-item">
                              <button className="acc-btn">
                                <img src="./images/integrity.png" alt="" />
                                Audit & Review Services
                                <span className="arrow-icon">▾</span>
                              </button>
                              <ul className="acc-content">
                                <li><a href="">Adversary Simulation</a></li>
                                <li><a href="">Red Teaming</a></li>
                                <li><a href="">MITRE ATT&CK Mapping</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li> */}

                      <ServicesMenu />

                      {/* PRODUCTS */}
                      <li className="menu-item has-menu products" data-menu="products-dd">
                        <a>Products</a>
                        <div className="dropdown-container simple-dropdown no-hover" id="products-dd">
                          <ul>
                            <li><a target="_blank" href="https://www.cyqer.in/"><img src="./images/product-logo/cyqer-logo.png" className="product-logo" alt="" /></a></li>
                            <li><a target="_blank" href="https://grc360.in/"><img src="./images/product-logo/GRC-logo-light.png" className="product-logo width-img-prdt" alt="" /></a></li>
                          </ul>
                        </div>
                      </li>

                      {/* INDUSTRIES */}
                      <li className="menu-item has-menu" data-menu="industries-dd">
                        <a>Industries</a>
                        <div className="dropdown-container simple-dropdown">
                          <ul>
                            <li><a href="./government-industry.html">Government Industry</a></li>
                            <li><a href="#">Banking & Finance</a></li>
                            <li><a href="#">IT, ITes & Retail</a></li>
                            <li><a href="#">Manufacturing & Telecom</a></li>
                            <li><a href="#">Healthcare</a></li>
                            <li><a href="#">Higher Education</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* RESOURCES */}
                      <li className="menu-item has-menu" data-menu="resources-dd">
                        <a>Resources</a>
                        <div className="dropdown-container simple-dropdown">
                          <ul>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./case-studies.html">Case Studies</a></li>
                            <li><a href="./white-paper.html">White Paper</a></li>
                          </ul>
                        </div>
                      </li>

                      <li className="menu-item">
                        <a href="./contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>

                  {/* SEARCH + CTA */}
                  <div className="header-btn-outer">
                    <button className="search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        fill="#000" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5..." />
                      </svg>
                    </button>

                    <a href="#" className="cta-btn fill-icon mt-0">
                      <span>Schedule a Meeting</span>
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </header>
    </>
  );
}
