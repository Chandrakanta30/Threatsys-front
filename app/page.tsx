"use client"; // Required in Next.js 13+ with app directory
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Parallax, Autoplay } from "swiper";
// Navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import LogoSlider from "./common-components/LogoSlider";
import { useState } from "react";
// SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default function Home() {
  const slides = [
    {
      subtitle: "Innovation in Cyber Defense",
      titleGradient: "Empowering Security",
      titleNormal: "with Next-Gen Solutions",
      description:
        "Safeguarding your business with AI-driven cybersecurity products.",
      video: "./images/banner-video/Banner-Video-1.webm",
      bgImage: "https://imgpanda.com/upload/ib/gCzPpwgzAw.png",
    },
    {
      subtitle: "Trust Through Compliance",
      titleGradient: "Building Resilience",
      titleNormal: "with Expert Testing",
      description:
        "Ensuring security and compliance through advanced VAPT services.",
      video: "./images/banner-video/Banner-Video-4.mp4",
      bgImage: "https://imgpanda.com/upload/ib/gCzPpwgzAw.png",
    },
    {
      subtitle: "Global Reach, Local Expertise",
      titleGradient: "Securing Enterprises",
      titleNormal: "Across Borders",
      description:
        "Delivering trusted cyber solutions worldwide with proven excellence.",
      video: "./images/banner-video/Banner-Video-5.mp4",
      bgImage: "https://imgpanda.com/upload/ib/gCzPpwgzAw.png",
    },
    {
      subtitle: "Intelligence That Protects",
      titleGradient: "Redefining Cyber",
      titleNormal: "Defense with AI",
      description:
        "Transforming cybersecurity with predictive, AI-powered protection.",
      video: "./images/banner-video/Banner-Video-3.webm",
      bgImage: "https://imgpanda.com/upload/ib/gCzPpwgzAw.png",
    },
  ];

  const logos1 = Array.from(
    { length: 30 },
    (_, i) => `/images/LOGO/${i + 1}.png`
  );
  const logos2 = Array.from(
    { length: 30 },
    (_, i) => `/images/LOGO/${i + 31}.png`
  );
  const logos3 = Array.from(
    { length: 30 },
    (_, i) => `/images/LOGO/${i + 61}.png`
  );

  const panels = [
    {
      title: "Government Industry",
      items: [
        "Risk & Vulnerability Assessments",
        "Penetration Testing",
        "Governance, Risk & Compliance (GRC)",
        "Security Strategy & Policy Development",
        "e-Governance Application Security",
        "Cloud & Infrastructure Security Audit",
        "Incident Response & Forensics",
        "CERT-In & regulatory compliance support",
      ],
    },
    {
      title: "Banking & Finance",
      items: [
        "Core Banking & Payment System Security Testing",
        "Mobile Banking & Wallet Security Assessment",
        "ATM, POS & Card Network Testing",
        "Transaction Fraud Risk Assessment",
        "RBI & PCI-DSS Compliance Testing",
        "API Security & Identity Access Review",
        "Cloud & Infrastructure Hardening",
        "Continuous Monitoring & Threat Hunting",
      ],
    },
    {
      title: "IT, ITes & Retail Industry",
      items: [
        "Web, Mobile & SaaS Platform Security Testing",
        "API & Microservices Security",
        "E-commerce & POS System Security",
        "Cloud Security & Configuration Review",
        "Supply-Chain & Vendor Risk Assessment",
        "Identity & Access Management Review",
        "Infrastructure & Network Penetration Testing",
        "DevSecOps & Secure SDLC Implementation",
      ],
    },
    {
      title: "Manufacturing & Telecom",
      items: [
        "SCADA / ICS / OT Security Testing",
        "IoT & Embedded Device Security",
        "Network Architecture Review & Hardening",
        "Supply-Chain & Hardware Security Assessment",
        "Cloud, Data Center & Telecom Infra Security",
        "Firmware & Protocol-Level Analysis",
        "Business Continuity & Disaster Recovery Review",
        "Threat Monitoring & Anomaly Detection",
      ],
    },
    {
      title: "Healthcare",
      items: [
        "Hospital Network & Server Security",
        "EMR/EHR Application Security Testing",
        "Governance, Strategy, Policy",
        "Medical Device & IoT Equipment Testing",
        "Patient Data Privacy & DPDP Compliance",
        "Ransomware Readiness & Response Planning",
        "Cloud & Telemedicine Platform Security",
        "API, Mobile App & Portal PenTesting",
        "Continuous Vulnerability Management",
      ],
    },
    {
      title: "Higher Education",
      items: [
        "LMS & Student Portal Security Testing",
        "Campus Network & Wi-Fi Infrastructure Audit",
        "Identity & Access Management for Students/Staff",
        "Research Data & IP Protection",
        "Cloud & Virtual Classroom Security",
        "Phishing Simulation & Awareness Training",
        "Application, API & Server Hardening",
        "Data Privacy & Compliance Readiness",
      ],
    },
  ];

  const [activePanel, setActivePanel] = useState(0);

  return (
    <>
      {/* <!-- ============header-search=========== --> */}
      <div className="search__popup">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search__wrapper">
                <div className="search__close">
                  <button type="button" className="search-close-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="search__form">
                  <form action="#">
                    <div className="search__input">
                      <input
                        className="search-input-field"
                        type="text"
                        placeholder="Type keywords here"
                      />
                      <span className="search-focus-border"></span>
                      <button type="submit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#000"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup-overlay"></div>
      {/* <!-- header-search-end --> */}

      <section className="creative-showcase--slider">
        <div className="banner-horizental">
          <Swiper
            modules={[Navigation, Pagination, Parallax, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            parallax={true}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="swiper-container-h"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-bg overlay-dark"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  data-swiper-parallax="1152"
                >
                  <div className="slide-container">
                    <div className="slide-row">
                      <div className="slider-content">
                        <h6
                          className="slide-subtitle"
                          data-swiper-parallax="-1000"
                        >
                          {slide.subtitle}
                        </h6>
                        <h1 className="slide-heading">
                          <a href="#">
                            <span
                              data-swiper-parallax="-2000"
                              className="yel-gradient"
                            >
                              {slide.titleGradient}
                            </span>
                            <br />
                            <span
                              data-swiper-parallax="-3000"
                              className="fw-300"
                            >
                              {slide.titleNormal}
                            </span>
                          </a>
                        </h1>
                        <h5 className="slider-sub" data-swiper-parallax="-4000">
                          {slide.description}
                        </h5>
                        <a
                          href="#"
                          className="cta-btn"
                          data-swiper-parallax="-5000"
                        >
                          <span>Let&apos;s Validate Defenses</span>
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

                  <div className="video-container">
                    <video autoPlay loop muted>
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-wrapper creative-button--wrapper">
              <div
                className="swiper-button-next"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <div>
                  <span>Next</span>
                </div>
                <div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div
                className="swiper-button-prev"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <div>
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div>
                  <span>Prev</span>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      <section className="section p-0">
        <div className="marquee">
          <div className="marquee__inner">
            <div className="marquee__item">
              Threatsys wins Best Cybersecurity Company at Rising Odisha Vision
              2036.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>

            <div className="marquee__item">
              Threatsys showcases future cyber defense at NASSCOM Event.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>

            <div className="marquee__item">
              Threatsys wins Best Cybersecurity Company at Rising Odisha Vision
              2036.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>
            {/* <!-- Duplicate for continuous scroll --> */}
            <div className="marquee__item">
              Threatsys wins Best Cybersecurity Company at Rising Odisha Vision
              2036.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>

            <div className="marquee__item">
              Threatsys showcases future cyber defense at NASSCOM Event.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>

            <div className="marquee__item">
              Threatsys wins Best Cybersecurity Company at Rising Odisha Vision
              2036.
              <span className="marquee__seperator">
                <img
                  className="w-shl"
                  src="./images/shield2.png"
                  alt="shield"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us section">
        <img src="./images/about-bg2.png" alt="Logo" className="shd-bg-logo" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="content-about">
                <h3 className="wow fadeInLeft top-text">About Us</h3>
                <h2
                  className="wow fadeInLeft down-text-m"
                  data-wow-delay="0.1s"
                  data-cursor="-opaque"
                >
                  {" "}
                  Defending the Digital Future
                  <br />{" "}
                  <span className="gradient-text">
                    with Intelligence and Innovation{" "}
                  </span>
                </h2>

                <h6 className="wow fadeInLeft">
                  We Protect $1Billion Transactions every year.
                </h6>
                <p className="wow fadeInLeft" data-wow-delay="0.2s">
                  Threatsys is a CERT-IN empanelled and ISO 27001, ISO 20000,
                  SOC 2 Type 2 certified global cybersecurity company committed
                  to securing enterprises in an increasingly connected world. We
                  empower organizations to protect their digital ecosystems
                  through advanced threat intelligence, compliance automation,
                  and AI-powered security solutions.Our comprehensive suite of
                  products helps businesses detect, prevent, and respond to
                  threats with precision and confidence.
                </p>

                <div className="cta-box wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="cta-text">
                    <h4 className="d-none">
                      We protect what matters most — your trust, data, and
                      digital growth. Your protection, our priority.
                    </h4>

                    <a href="#" className="cta-btn fill-icon d-none">
                      <span>Get Secured Now</span>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <section className="meeting-card-section">
                      <div className="meeting-card">
                        <button className="subscribe-btn">
                          <div className="icon-box">
                            <img
                              src="./images/handshake.png"
                              alt="meeting icon"
                            />
                          </div>
                          <div className="text-box">
                            <h4>Schedule a Meeting</h4>
                          </div>
                        </button>
                      </div>
                    </section>
                  </div>
                </div>

                {/* <!-- <ul className="services wow fadeInRight" data-wow-delay="0.4s">
                          <li>Threat Detection and Monitoring</li>
                          <li>Access Control Management</li>
                          <li>Security Awareness Training</li>
                      </ul> --> */}
              </div>
            </div>

            <div className="col-lg-5 col-md-12 for-center-align">
              <div className="row staticstic-container">
                <span className="middle-point"></span>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 static-col">
                  <div
                    className="join-us-statistics wow animate__fadeInDown"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span
                      className="static-num count-text"
                      data-speed="1500"
                      data-stop="2000"
                      data-suffix="+"
                    >
                      2000+
                    </span>
                    <span className="static-txt">Satisfied Clients</span>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 static-col">
                  <div
                    className="join-us-statistics wow animate__fadeInDown"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span
                      className="static-num count-text"
                      data-speed="1500"
                      data-stop="15"
                      data-suffix="+"
                    >
                      15+
                    </span>
                    <span className="static-txt">Years of Excellence </span>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 static-col">
                  <div
                    className="join-us-statistics wow animate__fadeInDown"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span
                      className="static-num count-text"
                      data-speed="1500"
                      data-stop="8000"
                      data-suffix="+"
                    >
                      8000+
                    </span>
                    <span className="static-txt">Projects Delivered</span>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 static-col">
                  <div
                    className="join-us-statistics wow animate__fadeInDown"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span
                      className="static-num count-text"
                      data-speed="1500"
                      data-stop="25"
                      data-suffix="+"
                    >
                      25+
                    </span>
                    <span className="static-txt">Industries Secured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    our prestigious clientele <br />
                    since 2014
                  </span>
                </h2>
                <img
                  src="./images/TT.svg"
                  alt="Logo"
                  className="line-logo-img"
                />
              </div>

              <div className="col-md-8">
                {/* <div
                  className="slider"
                  // style={{
                  //   "--width": "150px",
                  //   "--height": "50px",
                  //   "--imageQuantity": 10,
                  // }}
                >
                  {" "}
                  <div className="list">
                    <div className="item">
                      <img src="images/LOGO/1.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/2.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/3.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/4.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/5.png" alt="Logo" />
                    </div>

                    <div className="item">
                      <img src="images/LOGO/6.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/7.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/8.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/9.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/10.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/11.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/12.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/13.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/14.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/15.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/16.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/17.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/18.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/19.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/20.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/21.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/22.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/23.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/24.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/25.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/26.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/27.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/28.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/29.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/30.png" alt="Logo" />
                    </div>
                  </div>
                </div>

                <div
                  className="slider"
                  // reverse="true"
                  // style={{
                  //   "--width": "200px",
                  //   "--height": "200px",
                  //   "--imageQuantity": 7
                  // }}
                >
                  <div className="list">
                    <div className="item">
                      <img src="images/LOGO/31.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/32.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/33.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/34.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/35.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/36.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/37.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/38.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/39.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/40.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/41.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/42.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/43.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/44.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/45.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/46.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/47.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/48.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/49.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/50.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/51.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/52.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/53.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/54.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/55.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/56.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/57.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/58.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/59.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/60.png" alt="Logo" />
                    </div>
                  </div>
                </div>

                <div
                  className="slider "
                  // style="--width: 150px; --height: 50px; --imageQuantity: 10"
                >
                  <div className="list">
                    <div className="item">
                      <img src="images/LOGO/61.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/62.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/63.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/64.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/65.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/66.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/67.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/68.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/69.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/70.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/71.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/72.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/73.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/74.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/75.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/76.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/77.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/78.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/79.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/80.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/81.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/82.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/83.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/84.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/85.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/86.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/87.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/88.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/89.png" alt="Logo" />
                    </div>
                    <div className="item">
                      <img src="images/LOGO/90.png" alt="Logo" />
                    </div>
                  </div>
                </div> */}

                <LogoSlider logos={logos1} />
                <LogoSlider logos={logos2} />
                <LogoSlider logos={logos3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services section">
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
          <div className="row section-row">
            <div className="col-lg-12">
              {/* <!-- Section Title Start --> */}
              <div className="text-align-center">
                <h3 className="wow fadeInUp top-text text-align-center">
                  Our Services
                </h3>
                <h2
                  className="wow fadeInUp text-white"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  {" "}
                  Advanced AI-powered
                  <br />{" "}
                  <span className="gradient-yl">
                    cyber security services & solutions
                  </span>
                </h2>
              </div>
              {/* <!-- Section Title End --> */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}

              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="./images/consulting.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">Cyber Security Consulting</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    We bring deep expertise in cybersecurity consulting,
                    assessing your security posture and providing a clear path
                    to protect your business.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">Cyber Security Consulting</a>
                    </li>
                    <li>
                      <a href="">CERT-IN Cyber Security Audit</a>
                    </li>
                    <li>
                      <a href="">SEBI Compliance Audit</a>
                    </li>
                    <li>
                      <a href="">DL SAR Compliance Audit</a>
                    </li>
                    <li>
                      <a href="">IRDAI Security Audit</a>
                    </li>
                    <li>
                      <a href="">RBI Security Audit Services</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Service Item End --> */}
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="./images/security-.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">Cyber Security Testing</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    Our security testing tackles mission-critical challenges,
                    ensuring your business stays hack-proof with Threatsys.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">Web Application Security Testing</a>
                    </li>
                    <li>
                      <a href="">Network Penetration Testing</a>
                    </li>
                    <li>
                      <a href="">Mobile Apps Security Testing</a>
                    </li>
                    <li>
                      <a href="">Thick Client Security Testing</a>
                    </li>
                    <li>
                      <a href="">IOT Security Testing</a>
                    </li>
                    <li>
                      <a href="">SCADA Security Testing</a>
                    </li>
                    <li>
                      <a href="">Enterprise Security Testing</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Service Item End --> */}
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}

              <div
                className="service-item service_last_box wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="./images/safe.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">Cyber Security Compliances</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    Our Cybersecurity Compliance Services eliminate regulatory
                    confusion, address threats, reduce inefficiencies, and let
                    you focus on business growth.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">ISO Compliance</a>
                    </li>
                    <li>
                      <a href="">PCI DSS Compliance</a>
                    </li>
                    <li>
                      <a href="">SOC2 Compliance</a>
                    </li>
                    <li>
                      <a href="">HIPAA Compliance</a>
                    </li>
                    <li>
                      <a href="">GDPR Compliance</a>
                    </li>
                    <li>
                      <a href="">FISMA Compliance</a>
                    </li>
                    <li>
                      <a href="">GRC Compliance</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Service Item End --> */}
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}
              <div
                className="service-item brd-b0 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="./images/forensic.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">Cyber Forensic & Investigation</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    Our Cyber Forensics & Investigation solutions deliver attack
                    context, full infrastructure visibility, expert
                    intelligence, and frontline insights.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">Cyber Forensics and Incident Response</a>
                    </li>
                    <li>
                      <a href="">Cyber Crime Investigation</a>
                    </li>
                    <li>
                      <a href="">Online Reputation Management</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Service Item End --> */}
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}
              <div
                className="service-item brd-b0 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="icon-box">
                  <img src="./images/reliability.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">Managed Cyber Security Solutions</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    Looking to outsource managed cybersecurity? Our Evaluation
                    Checklist helps you ask the right questions and achieve
                    results aligned with your business needs.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">Managed Security Services</a>
                    </li>
                    <li>
                      <a href="">Corporate Infrastructure Security</a>
                    </li>
                    <li>
                      <a href="">SOC as a Services</a>
                    </li>
                    <li>
                      <a href="">Online Reputation Management</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Service Item End --> */}
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4 pr-lg-0 pl-lg-0 pr-3 pl-3">
              {/* <!-- Service Item Start --> */}

              <div
                className="service-item service_last_box service_lower_box wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="icon-box">
                  <img src="./images/integrity.png" alt="Image" />
                </div>

                <div className="service-title">
                  <h3>
                    <a href="#">360° Cyber Security as a Services</a>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    Threatsys delivers flexible Cybersecurity-as-a-Service,
                    eliminating the need for constant investment in hardware and
                    software.
                  </p>
                </div>
                <div className="service-btn">
                  <a
                    href="service-single.html"
                    title="View Cyber Security Consulting"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- Overlay Content --> */}
                <div className="overlay">
                  <ul>
                    <li>
                      <a href="">DPDP Compliance Services</a>
                    </li>
                    <li>
                      <a href="">STQC Cyber Security Audit Services</a>
                    </li>
                    <li>
                      <a href="">VCISO Consulting Services</a>
                    </li>
                    <li>
                      <a href="">Take Down Services</a>
                    </li>
                    <li>
                      <a href="">Dak Web Monitoring Services</a>
                    </li>
                    <li>
                      <a href="">Root Cause Analysis Services</a>
                    </li>
                    <li>
                      <a href="">ISO 27017 Compliance Audit</a>
                    </li>
                  </ul>
                  <div className="service-btn">
                    <a
                      href="service-single.html"
                      title="View Cyber Security Consulting"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Service Item End --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section bento-section">
        <div className="container">
          <div className="bento-grid">
            {/* Card 1 */}
            <div className="card large wow fadeInLeft">
              <div className="inr-border">
                <h2>Securing Offensively by using AI</h2>
                <p style={{ marginBottom: "13px" }}>
                  Don&apos;t wait for attack, go on the offense
                </p>

                <div className="orbit-container">
                  <div className="orbit1"></div>
                  <div className="orbit2"></div>
                  <div className="orbit3"></div>

                  <div className="icon-orbit icon1">
                    <img src="./images/TT.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon2">
                    <img src="./images/TIWING.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon3">
                    <img src="./images/GRC360.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon4">
                    <img src="./images/TA.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon5">
                    <img src="./images/Cyqer.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon6">
                    <img src="./images/TIWING.png" alt="Icon" />
                  </div>
                  <div className="icon-orbit icon7">
                    <img src="./images/GRC360.png" alt="Icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card awards wow fadeInRight">
              <div className="inr-border">
                <h2>Recognitions of Excellence</h2>
                <p>Stacked with Awards, Stepping with Success</p>

                {/* Award Slider Row 1 */}
                <div className="awards-icons">
                  <div className="swiper awardsSwiper">
                    <div className="swiper-wrapper">
                      {["01", "02", "03", "04", "05"].map((num) => (
                        <div className="swiper-slide" key={num}>
                          <div className="award">
                            <img
                              src={`./images/Award Achieved-${num}.png`}
                              alt="Award"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Award Slider Row 2 */}
                <div className="awards-icons">
                  <div className="swiper awardsSwiper">
                    <div className="swiper-wrapper">
                      {["06", "07", "08", "09", "10"].map((num) => (
                        <div className="swiper-slide" key={num}>
                          <div className="award">
                            <img
                              src={`./images/Award Achieved-${num}.png`}
                              alt="Award"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card stats wow fadeInLeft">
              <div className="inr-border">
                <h2>Data That Speaks Volumes</h2>
                <p>Turn insights into confident decisions</p>

                <div className="stats-container">
                  <div className="stat">
                    <div className="stat-img">
                      <img src="./images/folder.png" alt="Image" />
                    </div>
                    <h3
                      className="count-text"
                      data-speed="1500"
                      data-stop="250"
                      data-suffix="+"
                    >
                      250+
                    </h3>
                    <p>Bugs Found & Reported</p>
                  </div>

                  <div className="stat">
                    <div className="stat-img">
                      <img
                        src="./images/professional-success.png"
                        alt="Image"
                      />
                    </div>
                    <h3
                      className="count-text"
                      data-speed="1500"
                      data-stop="120"
                      data-suffix="+"
                    >
                      120+
                    </h3>
                    <p>Skilled Experts</p>
                  </div>

                  <div className="stat">
                    <div className="stat-img">
                      <img src="./images/global-security.png" alt="Image" />
                    </div>
                    <h3
                      className="count-text"
                      data-speed="1500"
                      data-stop="150"
                      data-suffix="+"
                    >
                      150+
                    </h3>
                    <p>Hall of Fame</p>
                  </div>

                  <div className="stat">
                    <div className="stat-img">
                      <img src="./images/industry-exp.png" alt="Image" />
                    </div>
                    <h3
                      className="count-text"
                      data-speed="1500"
                      data-stop="8"
                      data-suffix="+"
                    >
                      8+
                    </h3>
                    <p>Countries Presence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card breaches wow fadeInRight">
              <div className="inr-border">
                <h2>Research Book</h2>

                {/* Hidden Swiper */}
                <div className="swiper myNewsSwiper d-none">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a
                        href="/threatsys/images/pdf/document.pdf"
                        className="news-box"
                        target="_blank"
                      >
                        <div className="newscoverage-img">
                          <img src="./images/document-1.jpg" alt="doc" />
                        </div>
                        <div className="magazine-content">
                          <h6 className="line-clamp-2">
                            Decoding the Dark Web – What Exists Beyond the
                            Surface
                          </h6>
                        </div>
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a
                        href="/threatsys/images/pdf/document-2.pdf"
                        className="news-box"
                        target="_blank"
                      >
                        <div className="newscoverage-img">
                          <img src="./images/document-2.jpg" alt="doc" />
                        </div>
                        <div className="magazine-content">
                          <h6 className="line-clamp-2">
                            Reverse Engineering Android Apps for Security
                          </h6>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>

                {/* Visible Content */}
                <div className="magazine-content">
                  <h6 className="line-clamp-2">
                    Decoding the Dark Web, What Exists Beyond the Surface
                  </h6>
                </div>

                <div className="date">
                  <span className="day">18</span>
                  <span className="month">MAR</span>
                </div>

                <div className="footer-crd">
                  <div className="file-info">
                    <img src="./images/pdf.png" alt="file" className="icon" />
                    <p>
                      Format: PDF,
                      <br />
                      Language: English
                    </p>
                  </div>

                  <div className="service-btn">
                    <a
                      href="/threatsys/images/pdf/document.pdf"
                      target="_blank"
                      title="View PDF"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <img
                src="./images/Wood-art.png"
                alt="bg"
                className="bg-wood-art"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section ceos-message p-0">
        <div className="container">
          <div className="ceo-container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-12">
                <div className="message-left">
                  {/* <div className="circle-1"><div className="inner-circle"></div></div> */}

                  <img
                    src="./images/round-line.png"
                    alt="Image"
                    className="round-line"
                  />

                  <div className="bg-line1"></div>

                  <img
                    src="./images/banner-img-2.png"
                    alt="CEO Image"
                    className="ceo-img wow fadeInLeft"
                  />
                </div>
              </div>

              <div className="col-xl-7 col-lg-7 col-12">
                <div className="message-right">
                  <img
                    src="./images/md-msg-shape.png"
                    alt="shape"
                    className="md-div-shp"
                  />

                  <img
                    src="./images/quotes.png"
                    alt="Logo"
                    className="line-logo-img"
                  />

                  <div className="pbmit-heading-subheading wow fadeInRight">
                    <h2
                      className="wow fadeInUp sub-page-mr text-white"
                      data-wow-delay="0.2s"
                      data-cursor="-opaque"
                    >
                      CEO&apos;s <span className="gradient-yl">Message</span>
                    </h2>

                    <img
                      src="./images/line.png"
                      alt="img"
                      className="header-line"
                    />
                  </div>

                  <p className="mrb-15 wow fadeInRight">
                    As we celebrate this significant milestone, my sincere
                    gratitude goes to our clients, employees, and partners who
                    are the foundation of Threatsys’ success. What began as a
                    vision to strengthen India’s cybersecurity is now a trusted
                    brand protecting businesses and citizens globally. We remain
                    guided by our commitment to excellence, innovation, and
                    resilience.{" "}
                    <strong>
                      “Together, we are building a safer digital future.”
                    </strong>
                  </p>

                  {/* <h5>"Together, we are building a safer digital future".</h5> */}

                  <h4 className="name wow fadeInUp">Deepak Ku Nath</h4>
                  <h6 className="desg wow fadeInUp">Managing Director & CEO</h6>

                  <div className="certificate-container wow fadeInUp">
                    <div className="certificate-grid">
                      {Array.from({ length: 16 }, (_, i) => (
                        <img
                          key={i}
                          src={`./images/certificate-deepak-ku-nath-${i + 1}.${
                            i === 5 ? "jpeg" : i === 10 ? "jpg" : "png"
                          }`}
                          alt={`Certificate ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <h3 className="wow fadeInUp top-text text-align-center">Industries</h3>
        <h2
          className="wow fadeInUp text-align-center"
          data-wow-delay="0.2s"
          data-cursor="-opaque"
        >
          The Service
          <span className="gradient-text">We Secured Seamlessly</span>
        </h2>
        <div className="container">
          <div className="panels">
            {panels.map((panel, index) => (
              <div
                key={index}
                className={`panel ${activePanel === index ? "active" : ""}`}
                onMouseEnter={() => setActivePanel(index)}
              >
                <div className="content-up">
                  <span>{panel.title}</span>
                  <ul>
                    {panel.items.map((item, i) => (
                      <li key={i}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="cta-btn">
                    Know More
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
            ))}
          </div>
        </div>
      </section>

      <section className="home-scroll_section section p-0">
        {/* <!-- LEFT IMAGES --> */}
        <div className="grid-col home-scroll_visual page-padding">
          <div className="home-scroll_img-wrap w-dyn-list">
            <div role="list" className="home-scroll_img-list w-dyn-items">
              {/* <!-- 1 → Matches First Text Block --> */}
              <div role="listitem" className="home-scroll_img-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/awards-img-1.jpg"
                  className="home-scroll_img"
                />
              </div>

              {/* <!-- 2 → Matches Second Text Block --> */}
              <div role="listitem" className="home-scroll_img-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/awards-img-2.jpg"
                  className="home-scroll_img"
                />
              </div>

              {/* <!-- 3 → Matches Third Text Block --> */}
              <div role="listitem" className="home-scroll_img-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/MSME-img.jpg"
                  className="home-scroll_img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- RIGHT CONTENT --> */}
        <div className="grid-col home-scroll_content page-padding">
          <div className="home-scroll_text-wrap w-dyn-list">
            <div role="list" className="home-scroll_text-list w-dyn-items">
              {/* <!-- 1 --> */}
              <div role="listitem" className="home-scroll_text-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/awards-img-1.jpg"
                  className="home-scroll_photo"
                />

                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Unmatched Success And
                  <br />
                  <span className="gradient-text">
                    Unparalleled Achievements
                  </span>
                </h2>

                <ul className="services">
                  <li>
                    TS-23-09-icon-60x60-cyber-security-audit Emerging
                    Entrepreneur in Cyber Security award from Lt. Gen. K. T.
                    Parnaik (PVSM, UYSM, YSM), Governor of Arunachal Pradesh at
                    ETNow Business Conclave 2025
                  </li>
                  <li>
                    Honored with this prestigious Best Cyber Security Company of
                    India award by the Honourable Minister, Nitin Gadkari,
                    Government of India, at New Delhi
                  </li>
                  <li>
                    Our CEO honored as Best Cyber Security Entrepreneur of India
                    by Insight Success Magazine in 2024
                  </li>
                  <li>
                    Our CEO Honored as the Youngest Entrepreneur of Odisha by
                    the Director of IIT Bhubaneswar.
                  </li>
                </ul>

                <a href="#" className="cta-btn fill-icon mt-0">
                  <span>Read More</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* <!-- 2 --> */}
              <div role="listitem" className="home-scroll_text-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/awards-img-2.jpg"
                  className="home-scroll_photo"
                />

                <h2
                  className="wow fadeInUp gradient-text"
                  data-wow-delay="0.2s"
                >
                  The Best Cybersecurity Company
                  <br />
                  <span className="gradient-text">Everyone Trusts Blindly</span>
                </h2>

                <ul className="services">
                  <li>
                    Honored with the “Excellence in Cyber Security” award by
                    Entrepreneur Magazine at Bangalore
                  </li>
                  <li>
                    Honored with the “Best Cyber Security Personality of the
                    Year 2025” award by a leading magazine
                  </li>
                  <li>
                    Partner with the Government of Odisha to showcase the
                    state’s growth and potential to the world at the Utkarsh
                    Odisha – Make in Odisha 2025 Conclave.
                  </li>
                </ul>

                <a href="#" className="cta-btn fill-icon mt-0">
                  <span>Read More</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* <!-- 3 --> */}
              <div role="listitem" className="home-scroll_text-item w-dyn-item">
                <img
                  alt="Image"
                  loading="lazy"
                  src="./images/MSME-img.jpg"
                  className="home-scroll_photo"
                />

                <h2
                  className="wow fadeInUp gradient-text"
                  data-wow-delay="0.2s"
                >
                  Shaping the Future of Digital
                  <br />
                  <span className="gradient-text">
                    Security in Odisha & Beyond
                  </span>
                </h2>

                <ul className="services">
                  <li>
                    Industry Excellence Award at Odisha Nirmana MSME Summit
                    2025, felicitated by Shri Gokula Nanda Mallik, Hon’ble
                    Minister, MSME, Fisheries & ARD, Shri Sampad Chandra Swain,
                    Hon’ble Minister of State, and Ms. Tanaya Patnaik, Executive
                    Director, Sambad Group & Editor of Kanak News.
                  </li>
                  <li>
                    Recognized for Outstanding Cybersecurity Leadership for
                    strengthening Odisha’s digital ecosystem and contributing to
                    India’s secure digital future.
                  </li>
                  <li>
                    Honored for Driving Innovation & Impact in Cybersecurity,
                    reflecting the dedication of our team and the trust of our
                    clients and partners.
                  </li>
                  <li>
                    This Recognition Celebrates Threatsys’ Vision to build a
                    safer, stronger, and globally competitive cybersecurity hub
                    in Odisha.
                  </li>
                </ul>

                <a href="#" className="cta-btn fill-icon mt-0">
                  <span>Read More</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section global-presence-section">
        <div className="container">
          <h3 className="wow fadeInUp top-text text-align-center">
            Regional Presence
          </h3>
          <h2
            className="wow fadeInUp text-align-center"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Our Cybersecurity
            <br />{" "}
            <span className="gradient-text">Footprint Across the Globe</span>
          </h2>

          {/* <!-- <h2 className="img-text">Global Presence</h2> --> */}

          <h3 className="rot-text  wow fadeInLeft">Presence</h3>

          <div className="map-container">
            <img className="map-img" src="./images/map-1.svg" alt="Image" />
            <div className="map-dot dot-usa" data-target="tooltip-usa"></div>
            <div className="tooltip tooltip-usa" id="tooltip-usa">
              <img
                className="tool-img"
                src="./images/global-presence/GP_USA.webp"
                alt="Image"
              />
              <div>
                <h4>UNITED STATE OF AMERICA</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div
              className="map-dot dot-kenya"
              data-target="tooltip-kenya"
            ></div>
            <div className="tooltip tooltip-kenya" id="tooltip-kenya">
              <img
                className="tool-img"
                src="./images/global-presence/GP_KENYA.webp"
                alt="Image"
              />
              <div>
                <h4>KENYA</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div className="map-dot dot-uk" data-target="tooltip-uk"></div>
            <div className="tooltip tooltip-uk" id="tooltip-uk">
              <img
                className="tool-img"
                src="./images/global-presence/GP_UK.webp"
                alt="Image"
              />
              <div>
                <h4>UNITED KINGDOM</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div
              className="map-dot dot-qatar"
              data-target="tooltip-qatar"
            ></div>
            <div className="tooltip tooltip-qatar" id="tooltip-qatar">
              <img
                className="tool-img"
                src="./images/global-presence/GP_QATAR.webp"
                alt="Image"
              />
              <div>
                <h4>AFRICA</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div
              className="map-dot dot-dubai"
              data-target="tooltip-dubai"
            ></div>
            <div className="tooltip tooltip-dubai" id="tooltip-dubai">
              <img
                className="tool-img"
                src="./images/global-presence/GP_DUBAI.webp"
                alt="Image"
              />
              <div>
                <h4>DUBAI</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div
              className="map-dot dot-india"
              data-target="tooltip-india"
            ></div>
            <div className="tooltip tooltip-india active" id="tooltip-india">
              <img
                className="tool-img"
                src="./images/global-presence/GP_INDIA.webp"
                alt="Image"
              />
              <div>
                <h4>INDIA</h4>
                <p>Headquarters of Global Security</p>
              </div>
            </div>

            <div className="map-dot dot-au" data-target="tooltip-au"></div>
            <div className="tooltip tooltip-au" id="tooltip-au">
              <img
                className="tool-img"
                src="./images/global-presence/GP_AUSTRALIA.webp"
                alt="Image"
              />
              <div>
                <h4>AUSTRALIA</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>

            <div
              className="map-dot dot-nigeria"
              data-target="tooltip-nigeria"
            ></div>
            <div className="tooltip tooltip-nigeria" id="tooltip-nigeria">
              <img
                className="tool-img"
                src="./images/global-presence/GP_NIGERIA.webp"
                alt="Image"
              />
              <div>
                <h4>NIGERIA</h4>
                <p>Our Regional Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-section">
        <img
          src="./images/bg-pattern.png"
          alt="Bg Pattern"
          className="bg-pattern"
        />

        <div className="container">
          <h3 className="wow fadeInUp top-text">Our Projects</h3>
          <h2
            className="wow fadeInUp text-white"
            // style="position:relative;"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Empowering Global Brands
            <br />{" "}
            <span className="gradient-yl">
              {" "}
              with Trusted Cybersecurity Solutions
            </span>
          </h2>

          <div className="product-slider">
            <div className="swiper productSwiper">
              <div className="swiper-wrapper">
                {/* <!-- Product Card 1 --> */}
                <div className="swiper-slide">
                  <a href="" className="product-card">
                    <div className="product-img">
                      <img src="./images/subhdra.png" alt="Image" />
                    </div>
                    <div className="product-content">
                      <h4>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h4>

                      <div className="product-meta">
                        <span className="date">3rd May 2024</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <!-- Product Card 2 --> */}
                <div className="swiper-slide">
                  <a href="" className="product-card">
                    <div className="product-img">
                      <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                        alt="Image"
                      />
                    </div>
                    <div className="product-content">
                      <h4>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h4>

                      <div className="product-meta">
                        <span className="date">3rd May 2024</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <!-- Product Card 3 --> */}
                <div className="swiper-slide">
                  <a href="" className="product-card">
                    <div className="product-img">
                      <img src="./images/subhdra.png" alt="Project" />
                    </div>
                    <div className="product-content">
                      <h4>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h4>

                      <div className="product-meta">
                        <span className="date">3rd May 2024</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <!-- Product Card 4 --> */}
                <div className="swiper-slide">
                  <a href="" className="product-card">
                    <div className="product-img">
                      <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                        alt="Image"
                      />
                    </div>
                    <div className="product-content">
                      <h4>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h4>

                      <div className="product-meta">
                        <span className="date">3rd May 2024</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- Product Card 5 --> */}
                <div className="swiper-slide">
                  <a href="" className="product-card">
                    <div className="product-img">
                      <img src="./images/subhdra.png" alt="Project" />
                    </div>
                    <div className="product-content">
                      <h4>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h4>

                      <div className="product-meta">
                        <span className="date">3rd May 2024</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="next-prev justify-content-start">
                <div className="nav-btn prev-btn"></div>
                <div className="nav-btn next-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section brand-section">
        <div className="container">
          <h3 className="wow fadeInUp top-text text-align-center">
            Our Certification
          </h3>
          <h2
            className="wow fadeInUp text-align-center"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Empowering Your Business with
            <br /> <span className="gradient-text"> Trusted Cybersecurity</span>
          </h2>
          <div className="cert-brand-logo">
            {/* <!-- Row 1 : 6 logos --> */}
            <div className="brand-row">
              <div className="brand-card delay1">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-19.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-39.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay2">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-20.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-40.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay3">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-21.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-41.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay4">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-22.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-42.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay5">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-23.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-43.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay6">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-24.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-44.webp" alt="Image" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Row 2 : 4 logos --> */}
            <div className="brand-row">
              <div className="brand-card delay7">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-25.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img src="./images/certification-tt-45.webp" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="brand-card delay8">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-26.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img
                      src="./images/certification/certification-tt-19.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="brand-card delay9">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-27.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img
                      src="./images/certification/certification-tt-20.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="brand-card delay10">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-28.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img
                      src="./images/certification/certification-tt-21.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Row 3 : 2 logos --> */}
            <div className="brand-row">
              <div className="brand-card delay11">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-29.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img
                      src="./images/certification/certification-tt-22.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="brand-card delay12">
                <div className="flip-box">
                  <div className="front">
                    <img
                      src="./images/certification/certification-tt-30.png"
                      alt="Image"
                    />
                  </div>
                  <div className="back">
                    <img
                      src="./images/certification/certification-tt-23.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-area">
        <div className="container">
          <div className="">
            <div className="testimonial-box">
              <div className="testimonial-left wow fadeInLeft">
                <h3 className="wow fadeInUp top-text">Testimonials</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Discover Real Experiences
                  <br />{" "}
                  <span className="gradient-text">from Happy Clients</span>
                </h2>

                {/* <!-- Swiper --> */}
                <div className="swiper testimonialSwiper">
                  <div className="swiper-wrapper">
                    {/* <!-- Slide 1 --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <h3>Priyadarshi Nanu Pany</h3>
                        <span>CEO, CSM TECHNOLOGIES</span>
                        <p>
                          “Threatsys has been a trusted security partner for our
                          organisation. Their team brought clarity to complex
                          issues whether it was testing, compliance, or regular
                          audits. We’ve seen a visible improvement in our
                          security posture and overall confidence in our
                          systems.”
                        </p>
                        <div className="verified-section">
                          <div className="verified-left">
                            <img
                              src="./images/brand-logos/csm.png"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Slide 2 --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <h3>Subhadarshi Mishra</h3>
                        <span>MANAGING DIRECTOR, SPARC PVT. LTD.</span>
                        <p>
                          “The expertise Threatsys brings is unmatched. They
                          helped us identify hidden vulnerabilities, streamline
                          our compliance journey, and strengthen our internal
                          processes. Their proactive approach makes us feel
                          truly protected in an ever-evolving threat landscape.”
                        </p>
                        <div className="verified-section">
                          <div className="verified-left">
                            <img
                              src="./images/brand-logos/sparc-logo.svg"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Slide 3 --> */}
                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <h3>Kaushik Subudhi</h3>
                        <span>Founder, Zooppay</span>
                        <p>
                          “Working with Threatsys has transformed how we look at
                          cybersecurity. Their thorough assessments, compliance
                          guidance, and continuous reviews have made our
                          environment significantly more resilient. A dependable
                          team that delivers results every single time.”
                        </p>
                        <div className="verified-section">
                          <div className="verified-left">
                            <img
                              src="./images/brand-logos/zooppay.png"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Pagination and navigation --> */}
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div
                className="testimonial-right wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img src="./images/partner-img.png" alt="Happy client" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">
          <div className="front-blog">
            <div className="content-container">
              <h3 className="wow fadeInUp top-text text-align-center">
                {" "}
                Our Blog
              </h3>
              <h2
                className="wow fadeInUp text-align-center"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                More Articles
                <span className="gradient-text">from Resource Library</span>
              </h2>
            </div>

            <div className="front-blog-list">
              <a className="front-blog-item article-blog wow fadeInUp" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  // style="background-image: url('./images/blog1.jpg')"
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

              <a className="front-blog-item article-blog wow fadeInUp" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  // style="background-image: url('./images/blog2.jpg')"
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

              <a className="front-blog-item article-blog wow fadeInUp" href="#">
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  // style="background-image: url('./images/blog3.jpg')"
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
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="cntct-box">
            {/* CTA Box Content Start */}
            <div className="cta-box-content">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h2
                  className="wow fadeInUp text-white"
                  data-cursor="-opaque"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  Protect your business with <br />
                  <span className="gradient-yl">
                    AI-powered cyber security service !
                  </span>
                </h2>
              </div>
              {/* Section Title End */}

              {/* CTA Contact Info Start */}
              <div className="cta-contact-info">
                {/* CTA Contact Item Start */}
                <div className="cta-contact-item">
                  {/* <div className="icon-box">
              <img src="./images/icon-phone.svg" alt="Image" />
            </div> */}
                  <div className="cta-contact-content">
                    <h3>Get contact now</h3>
                    <p>
                      <a href="tel:+919668200222">+91-9668200222</a>
                    </p>
                  </div>
                </div>
                {/* CTA Contact Item End */}

                {/* CTA Contact Item Start */}
                <div className="cta-contact-item">
                  {/* <div className="icon-box">
              <img src="images/icon-mail.svg" alt="Image" />
            </div> */}
                  <div className="cta-contact-content">
                    <h3>Sent e-mail</h3>
                    <p>
                      <a href="mailto:sales@threatsys.co.in">
                        sales@threatsys.co.in
                      </a>
                    </p>
                  </div>
                </div>
                {/* CTA Contact Item End */}
              </div>
              {/* CTA Contact Info End */}
            </div>
            {/* CTA Box Content End */}

            {/* CTA Box Image Start */}
            <div className="cta-box-image">
              <img src="./images/CTA-girl.svg" alt="Image" />
              <img className="cnt-bg" src="./images/round-2.png" alt="Image" />
            </div>
            {/* CTA Box Image End */}

            <img
              className="arw-move"
              src="./images/arrow-move.svg"
              alt="Image"
            />
          </div>
        </div>
      </section>

      {/* <!-- ================================= --> */}

      <section className="section verify-section d-none">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3
                className="wow fadeInUp top-text animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Verify Certificate
              </h3>

              <h2
                className="wow fadeInUp animated"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                Because Every Genuine Effort <br />
                <span className="gradient-text">Deserves Proof</span>
              </h2>

              <img className="dot-bg" src="./images/dot-bg.png" alt="Bg" />
            </div>

            <div className="col-md-6">
              <div className="form-vry">
                <form className="verify-form" id="verifyForm">
                  <input
                    type="text"
                    id="certificateNo"
                    name="certificateNo"
                    placeholder="Certificate No."
                    required
                  />

                  <span>OR</span>

                  <input
                    type="text"
                    id="serialNo"
                    name="serialNo"
                    placeholder="Serial No. (optional)"
                  />

                  <button type="submit">Verify Now</button>
                </form>

                <div
                  className="verify-result"
                  id="verifyResult"
                  aria-live="polite"
                  style={{ display: "none" }}
                ></div>

                <img
                  className="round-1-ft"
                  src="./images/blue-round.png"
                  alt="round"
                />
                <img
                  className="round-2-ft"
                  src="./images/blue-round.png"
                  alt="round"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-shp"></div>
        <div className="right-shp d-none"></div>
      </section>
    </>
  );
}
