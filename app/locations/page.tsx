"use client";

import { useState } from "react";

export default function Index() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>("india");

  const show = (id: string) => setActiveTooltip(id);
  const hide = () => setActiveTooltip(null);

  return (
    <>
      <section className="page-banner">
        <img src="./images/page-header-bg.jpg" alt="banner" />
        <div className="banner-container">
          <div className="container">
            <div className="row h-100">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner-text">
                  <h1 className="sub-page-mr banner-title">Our Locations</h1>

                  <ul className="breadcrum">
                    <li>Home</li>
                    <li>About</li>
                    <li className="active-brd">Our Locations</li>
                  </ul>
                </div>
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

      <section className="section location-section pt-0">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>Corporate Office India</h3>
                <p>
                  3rd Floor, F3, Ryan Tower, Technology Corridor, near Trident
                  Academy, Chandaka Industrial Estate, Infocity,
                  Chandrasekharpur, Bhubaneswar, Odisha 751024
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>Threatsys Educational Wing</h3>
                <p>
                  Plot No : 155, 1st Floor, Infocity Ave, Chandrasekharpur,
                  Patia, Bhubaneswar, Odisha 751024
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>New Delhi India</h3>
                <p>
                  Plot No : B28, 1st Cross Street, Block B, Sector 1, Noida,
                  Uttra Pradesh, 201301
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>Nigeria</h3>
                <p>
                  Plot No : 21 Ahmed Onjbudo, Street Victori, Island Lagos,
                  Nigeria
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>Australia</h3>
                <p>
                  Level 25, 108 St Georges Terrace, Perth WA 6000, Australia
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-card">
                <h3>Qatar</h3>
                <p>
                  Ring Road- Zone 44 – Street #250 – Building # 189 – 2nd Floor,
                  Doha, Qatar
                </p>
                <a href="#" className="text-btn">
                  <span>Help Center</span>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#286fd9"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0175153506416!2d85.80530747501182!3d20.340895081141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190955646f835d%3A0x6459bb78195c0f0c!2sThreatsys%20Technologies%20-%20Your%20Trusted%20360%C2%B0%20Cyber%20Security%20Partner!5e0!3m2!1sen!2sin!4v1760530823132!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{
                    border: "2px solid #d0d6fd",
                    borderRadius: "7px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
