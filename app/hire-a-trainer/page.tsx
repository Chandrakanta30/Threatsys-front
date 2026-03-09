import React from "react";

const leftOptions = [
  "Limited scope for customization",
  "No pre-training analysis",
  "Timezone doesn’t match",
  "Request a trainer months in advance",
  "Long & tedious process",
  "No Learning Credits",
];

const rightOptions = [
  "100% Customizable",
  "Free Training Needs Analysis (TNA)",
  "Certified Trainers (all time zones)",
  "Certified Trainers (short notice)",
  "Quick Turnaround Time",
  "Get CPEs & Learning Credits",
];

const steps = [
  {
    title: "Consultation",
    desc: "We'll discuss your goals, preferences, and areas you want to improve",
  },
  {
    title: "Trainer Match",
    desc: "Based on your needs, we'll match you with a qualified trainer.",
  },
  {
    title: "Tailored Curriculum",
    desc: "Your trainer will create a customized plan to guide your journey.",
  },
  {
    title: "Progress and Growth",
    desc: "Watch your skills improve as you work closely with your trainer.",
  },
  {
    title: "Feedback and Adjustments",
    desc: "Your trainer will provide feedback and adjust the curriculum.",
  },
  {
    title: "Continuous Improvement",
    desc: "Ongoing learning to help you stay ahead in your field.",
  },
];

function HireTrainerPage() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Hire-a-Trainer</h2>
            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li className="active">Hire-a-Trainer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Why Choose <span style={{ color: "#2267cc" }}>Threatsys</span>{" "}
            Academy?
          </h2>

          <div className="outer-tree">
            <div className="tree-container">
              {/* Left Side */}
              <div className="side left">
                {leftOptions.map((item, index) => (
                  <div className={`info-box info-box${index + 1}`} key={index}>
                    <div className="icon red">?</div> {item}
                  </div>
                ))}
              </div>

              {/* Center */}
              <div className="center">
                <h3>Training Options</h3>
                <p>
                  Compare <strong>Other Courses</strong> vs{" "}
                  <strong>Hire a Trainer</strong>
                </p>
              </div>

              {/* Right Side */}
              <div className="side right">
                {rightOptions.map((item, index) => (
                  <div className={`info-box info-box${index + 7}`} key={index}>
                    <div className="icon red">💡</div> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="w-100 text-align-center">
            <a
              href="#"
              className="button1"
              data-bs-toggle="modal"
              data-bs-target="#req-call-back"
            >
              Request a Call-Back
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Slider */}
      <section className="section services-slider">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            How It <span style={{ color: "#2267cc" }}>Works</span>
          </h2>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              {steps.map((step, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="service-card" data-name={`0${index + 1}`}>
                    <h3>{step.title}</h3>
                    <div className="divider"></div>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HireTrainerPage;
