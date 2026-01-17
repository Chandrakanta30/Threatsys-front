"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesMenu from "@/app/common-components/ServicesMenu";

export default function Header() {
  /* ===============================
     THEME TOGGLE
  =============================== */
  const [theme, setTheme] = useState("auto");

  const applyTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);

    if (mode === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", mode);
    }
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme") || "auto";
  //   applyTheme(saved);
  // }, []);

  /* ===============================
     SERVICES ACCORDION
  =============================== */
  const [activeAcc, setActiveAcc] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAcc(activeAcc === index ? null : index);
  };

  return (
    <header className="header">
      {/* ================= TOP HEADER ================= */}
      <div className="top-header">
        <div className="container-fluid">
          <div className="top-content">
            <div className="top-header-content">
              <span className="topbar-text">
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                Under Attack? <span>09668200222</span>
              </span>
            </div>

            <div className="header-info">
              <div className="info-item">
                Follow Us on:
                <div className="social-menu">
                  <ul>
                    {[
                      ["twitter", "https://x.com/threatsys"],
                      ["instagram", "https://www.instagram.com/threatsys/"],
                      [
                        "facebook-app-symbol",
                        "https://www.facebook.com/threatsys",
                      ],
                      [
                        "youtube",
                        "https://www.youtube.com/@ThreatsysTechnologies",
                      ],
                      [
                        "linkedin",
                        "https://www.linkedin.com/company/threatsys/",
                      ],
                    ].map(([icon, url]) => (
                      <li key={icon}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={`/images/${icon}.png`}
                            alt=""
                            width={16}
                            height={16}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* THEME SWITCHER */}
              <div className="theme-switcher">
                <button
                  type="button"
                  className="theme-btn"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </button>

                <div className="theme-dropdown">
                  <button
                    onClick={() => applyTheme("light")}
                    className="theme-option"
                  >
                    ☀️ Light
                  </button>
                  <button
                    onClick={() => applyTheme("dark")}
                    className="theme-option"
                  >
                    🌙 Dark
                  </button>
                  <button
                    onClick={() => applyTheme("auto")}
                    className="theme-option"
                  >
                    ⚙️ Auto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HEADER BOTTOM ================= */}
      <div className="header-bottom">
        <div className="container-fluid">
          <div className="row">
            {/* LOGO */}
            <div className="col-md-2">
              <Link href="/" className="inr-logo">
                <Image
                  src="/images/TT-logo-dark-s.svg"
                  alt="Threatsys"
                  width={160}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* MENU */}
            <div className="col-md-10">
              <nav className="right-header" aria-label="Main navigation">
                <ul className="header-ul">
                  {/* COMPANY */}
                  <li className="menu-item has-menu">
                    <button type="button" aria-haspopup="true">
                      Company
                    </button>
                    <div className="dropdown-container simple-dropdown">
                      <ul>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/core-values">Core Values</Link>
                        </li>
                        <li>
                          <Link href="/teams">Leadership Team</Link>
                        </li>
                        <li>
                          <Link href="/careers">We are Hiring</Link>
                        </li>
                        <li>
                          <Link href="/why-choose-us">Why Choose Us</Link>
                        </li>
                        <li>
                          <Link href="/locations">Our Locations</Link>
                        </li>
                        <li>
                          <Link href="/news-coverage">News Coverage</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* SERVICES ACCORDION */}
                  {/* <li className="menu-item services-item has-menu">
                    <button type="button">Services</button>

                    <div className="dropdown-container mega-menu">
                      <ul className="accordion-menu">

                        {[
                          {
                            title: "Cyber Security Testing",
                            icon: "security-.png",
                            items: [
                              ["Web Application Security Testing", "/cyber-security-testing/web-application-security-testing"],
                              ["Network Penetration Testing", "/cyber-security-testing/network-penetration-testing"],
                              ["Web Services & API Assessment", "#"],
                              ["Mobile Apps Security Testing", "#"],
                              ["Thick Client App Testing", "#"],
                              ["IOT Security Testing", "#"],
                            ],
                          },
                          {
                            title: "Security Consulting & Compliance",
                            icon: "consulting.png",
                            items: [
                              ["External Network Pentesting", "#"],
                              ["Internal Network Assessment", "#"],
                              ["Firewall Review", "#"],
                              ["Router/Switch Security Audit", "#"],
                            ],
                          },
                          {
                            title: "Innovative Cyber Security Services",
                            icon: "forensic.png",
                            items: [
                              ["AWS Security Assessment", "#"],
                              ["Azure Cloud Audit", "#"],
                              ["GCP Security Review", "#"],
                            ],
                          },
                          {
                            title: "Cyber Security Audit & Review Services",
                            icon: "integrity.png",
                            items: [
                              ["Adversary Simulation", "#"],
                              ["Red Teaming", "#"],
                              ["MITRE ATT&CK Mapping", "#"],
                            ],
                          },
                        ].map((section, index) => (
                          <li
                            key={section.title}
                            className={`acc-item ${activeAcc === index ? "active" : ""}`}
                          >
                            <button
                              type="button"
                              className="acc-btn"
                              aria-expanded={activeAcc === index}
                              onClick={() => toggleAccordion(index)}
                            >
                              <Image
                                src={`/images/${section.icon}`}
                                alt=""
                                width={20}
                                height={20}
                              />
                              {section.title}
                              <span className="arrow-icon">▾</span>
                            </button>

                            <ul className={`acc-content ${activeAcc === index ? "open" : ""}`}>
                              {section.items.map(([label, href]) => (
                                <li key={label}>
                                  <Link href={href}>{label}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                  <ServicesMenu />

                  {/* PRODUCTS */}
                  <li
                    className="menu-item has-menu products"
                    data-menu="products-dd"
                  >
                    <button type="button">Products</button>

                    <div
                      className="dropdown-container simple-dropdown no-hover"
                      id="products-dd"
                    >
                      <ul>
                        <li>
                          <a
                            className="prdct-a"
                            href="https://www.cyqer.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="product-logo"
                              src="/images/product-logo/cyqer-logo.png"
                              alt="Cyqer"
                              width={120}
                              height={40}
                            />
                          </a>
                        </li>

                        <li>
                          <a
                            className="prdct-a"
                            href="https://grc360.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="product-logo width-img-prdt"
                              src="/images/product-logo/GRC-logo-light.png"
                              alt="GRC360"
                              width={120}
                              height={40}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* INDUSTRIES */}
                  <li className="menu-item has-menu" data-menu="industries-dd">
                    <button type="button">Industries</button>

                    <div
                      className="dropdown-container simple-dropdown"
                      id="industries-dd"
                    >
                      <ul>
                        <li>
                          <Link href="/Industry/government-industry">
                            Government Industry
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Banking & Finance</Link>
                        </li>
                        <li>
                          <Link href="#">IT, ITES & Retail Industry</Link>
                        </li>
                        <li>
                          <Link href="#">Manufacturing & Telecom</Link>
                        </li>
                        <li>
                          <Link href="#">Healthcare</Link>
                        </li>
                        <li>
                          <Link href="#">Higher Education</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* RESOURCES */}
                  <li className="menu-item has-menu" data-menu="resources-dd">
                    <button type="button">Resources</button>

                    <div
                      className="dropdown-container simple-dropdown"
                      id="resources-dd"
                    >
                      <ul>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/white-paper">White Paper</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* CONTACT */}
                  <li className="menu-item">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>

                {/* CTA */}
                <div className="header-btn-outer">
                  <Link href="/contact" className="cta-btn fill-icon">
                    <span>Schedule a Meeting</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
