"use client";
import axiosInstance from "@/app/lib/axios";
import React, { useEffect, useState } from "react";

const journeyCards = [
  {
    icon: "/images/cyber-crime.png",
    title: "Curious about the world of tech?",
    text: "Tap into a field full of innovation and endless possibilities.",
  },
  {
    icon: "/images/secure-data.png",
    title: "Looking for a future-proof career?",
    text: "Tech offers stability, growth, and global demand.",
  },
  {
    icon: "/images/regulation.png",
    title: "Thinking of starting fresh?",
    text: "A new beginning in the IT industry could be just a few clicks away.",
  },
  {
    icon: "/images/security-audit.png",
    title: "Explore limitless job options?",
    text: "From startups to giants, the IT world is full of opportunities.",
  },
  {
    icon: "/images/security-audit.png",
    title: "Said YES to any of these?",
    text: "You're in the right place to start your tech journey with mentorship.",
  },
];

const features = [
  {
    icon: "/images/instructor.png",
    title: "Free Mentorship from IT Industry Experts",
  },
  {
    icon: "/images/training.png",
    title: "Access to Free Learning Resources",
  },
  {
    icon: "/images/success.png",
    title: "Industry Secrets to Help You Succeed",
  },
  {
    icon: "/images/human-resource.png",
    title: "Career Guidance & Support",
  },
];

const steps = [
  {
    icon: "/images/contact-form.png",
    text: "Fill the form with your complete details and requirements",
  },
  {
    icon: "/images/time-slot.png",
    text: "Book a time slot for a Free Demo to talk to our expert",
  },
  {
    icon: "/images/report.png",
    text: "Get a free report and summary of a tailor-made career trajectory for you",
  },
];

function CareerMentorship() {
  const [journeyCards, setJourneyCards] = useState([]);
  const [features, setFeatures] = useState([]);
  const [intro, setInro] = useState<any>({});

  useEffect(() => {
    const loadCareerData = async () => {
      try {
        // Running requests in parallel for better performance
        const [featuresRes, journeyRes, introRes] = await Promise.all([
          axiosInstance.get("/careermentorship/features"),
          axiosInstance.get("/careermentorship/journey"),
          axiosInstance.get("/careermentorship/intro"),
        ]);

        setFeatures(featuresRes.data);
        setJourneyCards(journeyRes.data);
        setInro(introRes.data); // Fixed the typo from 'setInro'
      } catch (error) {
        console.error("Error loading Career Mentorship data:", error);
      }
    };

    loadCareerData();
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Career Mentorship Program</h2>

            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li className="active">Career Mentorship Program</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="foundation-section section">
        <div className="container">
          <div className="row foundation-container">
            <div className="col-lg-6">
              <div className="foundation-content">
                <h2>
                  {intro?.heading}
                  <span style={{ color: "#2267cc" }}>
                    {" "}
                    {intro?.highlight_text}
                  </span>{" "}
                  {intro?.heading_after}
                </h2>

                <h4 className="h4-cr">{intro?.subheading}</h4>

                <p className="description">{intro?.description}</p>

                <a href="#" className="button1">
                  {intro?.button_text ?? "Enroll Now"}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cr-images">
                <img src={intro?.image} alt="career" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section mentorship-section self-pc">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Your Journey to Becoming <br />
            the Next <span style={{ color: "#2267cc" }}>Gladiator</span> Begins
            Now
          </h2>

          <p className="text-align-center sub-head">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="row mt-5 justify-content-center">
            {journeyCards.map((item, index) => (
              <div className="col-xl-4 col-md-4 col-sm-6 col-12" key={index}>
                <div className="course-div">
                  <div className="course-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container mentorship-program-section">
          <div className="feature-intro">
            <div>
              <h2>
                Your Trusted Guide to Starting a
                <span style={{ color: "#fac90b" }}> Career</span> in IT
              </h2>

              <p>
                Whether you`&apos;`re planning a switch from a non-IT to IT
                career or just starting out in the tech industry, we`&apos;`ve
                got the expertise to give you a head start.
              </p>

              <a href="#" className="button1">
                Start your journey today
              </a>
            </div>
          </div>

          <div className="feature-cards">
            {features.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-icon">
                  <img src={item.icon} alt={item.title} />
                </div>

                <div className="card-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register Process */}
      <section className="section register-section">
        <div className="container">
          <h2 className="text-align-center">
            How to <span style={{ color: "#063bae" }}>Register</span> – The
            Process
          </h2>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div className="step" key={index}>
                <div className="icon-circle">
                  <img src={step.icon} alt="step" />
                </div>

                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="center-btn mt-5">
            <a href="#" className="button1">
              Book a Free Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerMentorship;
