"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Mousewheel } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";

export default function Index() {
  const timelineData = [
    {
      year: 2022,
      text: "Threatsys continued expansion and strengthened enterprise security offerings.",
    },
    {
      year: 2021,
      text: "Launched CYQER, an all-in-one SOC product for Cyber Yield Quantification and enterprise reporting.",
    },
    {
      year: 2020,
      text: "Received Emerging Cyber Security Company of the Year award.",
    },
    {
      year: 2019,
      text: "Expanded globally across Australia, Gulf, and Africa.",
    },
    {
      year: 2018,
      text: "Threatsys Technologies Pvt. Ltd. was officially formed.",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <section className="page-banner">
        <img src="./images/page-header-bg.jpg" alt="banner" />
        <div className="banner-container">
          <div className="container">
            <div className="row h-100">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner-text">
                  <h1 className="sub-page-mr banner-title">About</h1>

                  <ul className="breadcrum">
                    <li>Home</li>
                    <li>Company</li>
                    <li className="active-brd">About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-us-section">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="video-bx">
                  <div className="reveal tilt-box">
                    <img src="./images/02.jpg" alt="Team" />
                  </div>

                  <div className="video-play-icon">
                    <a
                      href="https://www.youtube.com/watch?v=ifVMdkqx8oY"
                      target="_blank"
                      className=" popup-youtube video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>

                  <div className="small-img-move tilt-box">
                    <img src="./images/03.jpg" alt="Team" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                <div className="content-bx1 wow fadeInRight">
                  {/* <!-- <span className="bg-content">About Us</span> --> */}
                  <h3 className="top-text">About Us</h3>
                  <h2
                    className="sub-page-mr"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Accelerating Security for the
                    <br />{" "}
                    <span className="gradient-text">
                      {" "}
                      Evolving Threat Landscape
                    </span>
                  </h2>

                  <h4>
                    We are committed to delivering proactive cybersecurity
                    solutions that safeguard your digital assets with the
                    highest standards of protection.
                  </h4>
                  <p className="m-b20">
                    Threatsys Technologies Pvt. Ltd. is a CERT-IN associated and
                    ISO-certified cybersecurity company delivering 360°
                    protection to clients across industries. With 8+ years of
                    experience, we secure IT infrastructures for global
                    enterprises through cutting-edge security solutions.
                  </p>
                  <p>
                    We offer Managed SOC, cybersecurity consulting, and audit
                    services aligned with global standards like GDPR, NIST, and
                    SOC 2. At Threatsys, our mission is to build resilient,
                    proactive defences and long-term partnerships with our
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section data-section fnt">
        <div className="container">
          <div className="why-choose-counter-list">
            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon-box">
                <img src="./images/icon-why-choose-counter-1.svg" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">125</span>+
                </h3>
                <p>Experts across Cyber Security specializations</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-box">
                <img src="./images/icon-why-choose-counter-2.svg" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">4000</span>+
                </h3>
                <p>Tested & Delivered 4000+ Cyber Security Projects</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-box">
                <img src="./images/icon-why-choose-counter-3.svg" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">65</span>+
                </h3>
                <p>Certified CEH, CISM, CISA, CISO, OSCP Professionals.</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="icon-box">
                <img src="./images/icon-why-choose-counter-4.svg" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">17</span>+
                </h3>
                <p>So far we have partners across 17 countries</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon-box">
                <img src="./images/revenue.png" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">$3</span>M
                </h3>
                <p>$0 to $3M revenue within 3.5 years worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section history-section d-none">
        <div className="container">
          <h3 className="wow fadeInUp top-text text-align-center">
            Our History
          </h3>
          <h2
            className="wow fadeInUp text-align-center"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            A Journey
            <span className="gradient-text">Through Time</span>
          </h2>

          <div className="timeline-container">
            {/* <!-- Year Swiper --> */}
            <div className="swiper year-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">2007</div>
                <div className="swiper-slide">2006</div>
                <div className="swiper-slide">1995</div>
                <div className="swiper-slide">1993</div>
                <div className="swiper-slide">1977</div>
              </div>
            </div>

            {/* <!-- Description Swiper --> */}
            <div className="swiper desc-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  Secured a 20-year mining lease, later extended for an
                  additional 30 years
                </div>
                <div className="swiper-slide">Event description for 2006</div>
                <div className="swiper-slide">Event description for 1995</div>
                <div className="swiper-slide">Event description for 1993</div>
                <div className="swiper-slide">Event description for 1977</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section info-section">
        <img
          className="services_left"
          src="./images/services_left_shape.png"
          alt="bg"
        />
        <img
          className="services_right"
          src="./images/services_right_shape.png"
          alt="bg"
        />
        <div className="container">
          <div className="flex-div">
            <div className="text-and-stats-block wow fadeInLeft">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    What We Do
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Who We Help?
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Why Choose Us
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h2
                    className="wow fadeInUp sub-page-mr"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Empowering Organizations with
                    <span className="gradient-text">
                      {" "}
                      Next-Gen Cybersecurity
                    </span>
                  </h2>

                  <p className="description">
                    We’re committed to delivering security without compromise.
                    Threatsys offer best-in-breed cybersecurity solutions today
                    to ensure you can securely advance your organization.
                  </p>

                  <a href="#" className="cta-btn fill-icon mt-0">
                    <span>View Our Services</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h2
                    className="sub-page-mr"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Delivering Cybersecurity
                    <br />{" "}
                    <span className="gradient-text">
                      {" "}
                      Excellence Across All Sectors
                    </span>
                  </h2>

                  <p className="description">
                    Threatsys serve clients of different sizes, including
                    mid-sized to large Fortune 100 companies, in a wide variety
                    of industries in each and every kinds of organisations.
                  </p>

                  <a href="#" className="cta-btn fill-icon mt-0">
                    <span>Industries We Serve</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h2
                    className="sub-page-mr"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Customized Protection,
                    <br />{" "}
                    <span className="gradient-text"> All in One Place</span>
                  </h2>

                  <p className="description">
                    Threatsys do not believe one size fits all in cyber
                    security, we advocate an incremental approach for all our
                    customers as per their needs. All in one Solutions at one
                    place.
                  </p>

                  <a href="#" className="cta-btn fill-icon mt-0">
                    <span>Find Out More</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="image-and-floating-stats">
              <div className="floating-stats-boxes">
                <div className="stat-box white-box">
                  <span className="number">
                    615<span className="plus">+</span>
                  </span>
                  <p className="label">
                    PROJECT <br /> COMPLETED
                  </p>
                </div>
                <div className="stat-box blue-box">
                  <span className="number">
                    236<span className="plus">+</span>
                  </span>
                  <p className="label">
                    WINNING <br /> AWARDS
                  </p>
                </div>
              </div>

              <div className="worker-image-placeholder tilt-box"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section vmb-history-wrapper year-wrapper">
        <h3 className="his-text">History</h3>
        <div className="container">
          <div className="row mt-minus-history">
            <aside className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="left-panel">
                <div>
                  <div className="gallery-left">
                    <div className="gallery-left-inner">
                      <div className="swiper-container gallery-history-thumbs">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="year-name-blox">2025</div>
                          </div>
                          <div className="swiper-slide">
                            <div className="year-name-blox">2024</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2023</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2022</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2021</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2020</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2019</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2018</div>
                          </div>
                          <div className="swiper-slide">
                            <div className="year-name-blox">2017</div>
                          </div>

                          <div className="swiper-slide">
                            <div className="year-name-blox">2016</div>
                          </div>
                          <div className="swiper-slide">
                            <div className="year-name-blox">2015</div>
                          </div>
                          <div className="swiper-slide">
                            <div className="year-name-blox">2014</div>
                          </div>
                          <div className="swiper-slide">
                            <div className="year-name-blox">2013</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hswiper-button-prev swiper-button-desktop">
                      <span className="arrow arrow-bar is-top"></span>
                    </div>
                    <div className="hswiper-button-next swiper-button-desktop">
                      <span className="arrow arrow-bar is-bottom"></span>
                    </div>
                  </div>

                  <div className="gallery-right">
                    <div className="swiper-container gallery-history-main">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2025</h3>
                            <p>
                              The year began with the inauguration of Threatsys’
                              new Head Office in Bhubaneswar, strengthening our
                              operational excellence and innovation
                              capabilities. Soon after, we expanded globally
                              with a new branch in Dubai, advancing our mission
                              to deliver world-class cybersecurity solutions
                              worldwide.
                            </p>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2024</h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Facere, excepturi corrupti enim odio illo
                              expedita velit assumenda nisi reiciendis eveniet!
                              Temporibus consequuntur qui quam quo harum
                              maiores, laborum odit tempora?
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2023</h3>
                            <p>
                              Under the leadership of Deepak Kumar Nath (Founder
                              & CEO), Threatsys achieved 50% revenue growth and
                              expanded its client base across 8 countries. With
                              14 international partners and the success of
                              CYQER, Threatsys solidified its position as one of
                              India’s top cybersecurity companies.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2022</h3>
                            <p>
                              Threatsys formed strategic alliances with leading
                              IT and cybersecurity companies like qSeap
                              Infotech, Securium Solutions, CSM Technologies,
                              and Aabsys IT. Successfully delivered 2000+
                              projects, including UN, state government, and
                              financial institution collaborations.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2021</h3>
                            <p>
                              Launched CYQER, an all-in-one SOC product for
                              Cyber Yield Quantification and enterprise
                              reporting. CYQER gained significant client
                              adoption for its integration of SIEM, SOC, UEBA,
                              and SOAR capabilities.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2020</h3>
                            <p>
                              Threatsys received the Emerging Cyber Security
                              Company of the Year award from Shri Nitin Gadkari,
                              supported by MSME and Startup India. The company
                              became NASSCOM-registered and partnered with
                              CERT-IN empanelled firms, serving government and
                              banking clients nationwide.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2019</h3>
                            <p>
                              Threatsys expanded internationally, partnering
                              with companies across Australia, Gulf countries,
                              Africa, and Asia. These collaborations
                              strengthened efficiency and market presence in
                              both local and overseas cybersecurity markets.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2018</h3>
                            <p>
                              Threatsys Technologies Pvt. Ltd. was officially
                              formed to deliver 360° Cyber Security Services.
                              The new corporate office was inaugurated at DLF
                              Cybercity, Bhubaneswar, positioning Threatsys as a
                              dedicated cybersecurity brand.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2017</h3>
                            <p>
                              GTP inaugurated its new office in Infocity,
                              Bhubaneswar, marking another milestone in Odisha’s
                              tech ecosystem. The company gained numerous
                              clients and continued striving for excellence in
                              cybersecurity services.
                            </p>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2016</h3>
                            <p>
                              The company expanded its footprint by establishing
                              a new office in New Delhi, reflecting growth and
                              nationwide presence. With increasing clientele,
                              GTP strengthened its service delivery and
                              technical infrastructure.
                            </p>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2015</h3>
                            <p>
                              To enhance cybersecurity talent and training,
                              Global Institute of Information Security was
                              founded under the Global Group of Companies. This
                              initiative aimed at developing skilled
                              cybersecurity professionals across India.
                            </p>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2014</h3>
                            <p>
                              GTP continued strengthening its technological and
                              cybersecurity services, expanding client networks
                              and building a foundation for future innovation
                              and manpower development under the Global Group.
                            </p>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-years-data">
                            <h3>2013</h3>
                            <p>
                              Global Tech Promoters (GTP) was established as the
                              first Cyber Security company in Odisha, under the
                              Global Group of Companies. The firm primarily
                              focused on Cyber Security solutions and IT/ITes
                              services, laying the foundation for Threatsys.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section> */}

      <section className="history-section">
        <div className="history-wrapper">
          {/* LEFT YEARS */}
          <div className="history-years">
            <Swiper
              modules={[Thumbs, Mousewheel]}
              direction="vertical"
              slidesPerView={5}
              spaceBetween={20}
              mousewheel
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              className="history-thumbs"
            >
              {timelineData.map((item) => (
                <SwiperSlide key={item.year}>
                  <span className="year">{item.year}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT CONTENT */}
          <div className="history-content">
            <Swiper
              modules={[Thumbs, Mousewheel]}
              direction="vertical"
              mousewheel
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              className="history-main"
            >
              {timelineData.map((item) => (
                <SwiperSlide key={item.year}>
                  <h2>{item.year}</h2>
                  <p>{item.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">
          <div className="front-blog">
            <div className="content-container">
              <h3 className="wow fadeInUp top-text text-align-center">
                Our Next-Gen Cyber News
              </h3>
              <h2
                className="wow fadeInUp text-align-center"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Catch the Latest <br />
                <span className="gradient-text">
                  Cyber Insights from Threatsys
                </span>
              </h2>
            </div>

            <div className="front-blog-list">
              <a className="front-blog-item article-blog" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  //   style="background-image: url('./images/blog1.jpg')"
                ></div>

                <div className="front-blog-item-content article__body">
                  <div>
                    <h3 className="article__title">
                      How Crypto Exchanges Can Stay Ahead of Cyber Threats in
                      2025
                    </h3>
                  </div>
                  <div className="article__excerpt">
                    <p>
                      The rise of cryptocurrency has reshaped global finance,
                      but it has also opened a new frontier of cyber threats.
                      With billions of dollars transacted da..
                    </p>
                  </div>
                  <footer className="article__footer">
                    <div className="custom-news-meta">
                      <span>29th Oct 2025</span>
                    </div>
                    {/* <!-- <div className="footer__readmore">
                                    <span className="footer__readmore-text">Read more</span>
                                    <span className="footer__readmore-arrow">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </div> --> */}
                  </footer>
                </div>
              </a>

              <a className="front-blog-item article-blog" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  //   style="background-image: url('./images/blog2.jpg')"
                ></div>
                <div className="front-blog-item-content article__body">
                  <div>
                    <h3 className="article__title">
                      National Cybersecurity Awareness Month 2025 with Threatsys
                    </h3>
                  </div>
                  <div className="article__excerpt">
                    <p>
                      October marks National Cybersecurity Awareness Month
                      (NCSAM) , a global initiative dedicated to building
                      awareness around digital safety and empowering individuals
                      and organizations to stay cyber smart.
                    </p>
                  </div>
                  <footer className="article__footer">
                    <div className="custom-news-meta">
                      <span>24th Oct 2025</span>
                    </div>
                  </footer>
                </div>
              </a>

              <a className="front-blog-item article-blog" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  //   style="background-image: url('./images/blog3.jpg')"
                ></div>
                <div className="front-blog-item-content article__body">
                  <div>
                    <h3 className="article__title">
                      Why Cybersecurity Is Crucial for the Education Sector in
                      2025
                    </h3>
                  </div>
                  <div className="article__excerpt">
                    <p>
                      The education sector has undergone a massive
                      transformation in recent years. From online classes and
                      digital assignments to cloud-based student management
                      systems, technology has become the foundation of modern
                      learning. However, this digital leap has also opened the
                      doors to a new kind of threat , cyberattacks targeting
                      educational institutions.
                    </p>
                  </div>
                  <footer className="article__footer">
                    <div className="custom-news-meta">
                      <span>16th Oct 2025</span>
                    </div>
                  </footer>
                </div>
              </a>
            </div>

            <div className="text-align-center w-100 mt-5">
              <a href="#" className="cta-btn fill-icon mt-0">
                <span>View All Blogs</span>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="clientele-section section clientele-section-cont">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Threatsys is trusted by
                  <br />{" "}
                  <span className="">
                    our prestigious clientele <br /> since 2014
                  </span>
                </h2>
                <img
                  src="./images/TT.svg"
                  alt="Logo"
                  className="line-logo-img"
                />
              </div>

              <div className="col-md-8">
                <div
                  className="slider"
                  //   style="--width: 150px; --height: 50px; --imageQuantity: 10"
                >
                  <div className="list">
                    <div className="item">
                      <img src="./images/LOGO/1.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/2.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/3.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/4.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/5.png" alt="Logo" />
                    </div>

                    <div className="item">
                      <img src="./images/LOGO/6.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/7.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/8.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/9.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/10.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/11.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/12.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/13.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/14.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/15.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/16.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/17.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/18.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/19.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/20.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/21.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/22.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/23.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/24.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/25.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/26.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/27.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/28.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/29.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/30.png" alt="Logo" />
                    </div>
                  </div>
                </div>

                <div
                  className="slider"
                  //   reverse="true"
                  //   style="--width: 200px; --height: 200px; --imageQuantity: 7"
                >
                  <div className="list">
                    <div className="item">
                      <img src="./images/LOGO/31.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/32.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/33.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/34.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/35.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/36.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/37.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/38.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/39.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/40.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/41.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/42.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/43.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/44.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/45.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/46.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/47.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/48.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/49.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/50.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/51.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/52.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/53.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/54.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/55.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/56.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/57.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/58.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/59.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/60.png" alt="Logo" />
                    </div>
                  </div>
                </div>

                <div
                  className="slider "
                  //   style="--width: 150px; --height: 50px; --imageQuantity: 10"
                >
                  <div className="list">
                    <div className="item">
                      <img src="./images/LOGO/61.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/62.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/63.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/64.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/65.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/66.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/67.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/68.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/69.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/70.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/71.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/72.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/73.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/74.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/75.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/76.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/77.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/78.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/79.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/80.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/81.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/82.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/83.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/84.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/85.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/86.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/87.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/88.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/89.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="./images/LOGO/90.png" alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
