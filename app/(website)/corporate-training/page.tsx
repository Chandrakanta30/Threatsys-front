"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/lib/axios";

const CorporateTraining = () => {
  const stats = [
    { number: "83443+", text: "Professionals Trained", icon: "reading.png" },
    { number: "120+", text: "Organizations Assisted", icon: "whiteboard.png" },
    { number: "46+", text: "Countries Reached", icon: "rating.png" },
    { number: "200+", text: "Certified Trainers", icon: "coach.png" },
  ];

  const courses = [
    {
      title: "Cyber Security",
      desc: "Protect systems and networks from digital threats.",
      icon: "cyber-crime.png",
    },
    {
      title: "Cloud Security",
      desc: "Secure cloud infrastructure and data.",
      icon: "secure-data.png",
    },
    {
      title: "Governance Risk Compliance",
      desc: "Manage policies and risks.",
      icon: "regulation.png",
    },
    {
      title: "Security Testing",
      desc: "Identify vulnerabilities in systems.",
      icon: "security-audit.png",
    },
  ];

  const slider1Logos = [
    "Aadhaar.png",
    "airtel.png",
    "alphabet.png",
    "amazon.png",
    "infopulse.png",
    "microsoft.png",
    "razorpay.png",
    "shadowfax.png",
    "verizon.png",
    "axis.png",
    "evolvous.png",
    "infopulse.png",
    "nandighosa.png",
    "paysecure.png",
    "payten.png",
    "paytm.png",
  ];

  const slider2Logos = [
    "firstbank.png",
    "logo-1.png",
    "payten.png",
    "united-nation.png",
    "bihar.png",
    "fnb.png",
    "gemini.png",
    "i3ms.png",
    "jsw.png",
    "marketwolf.png",
    "logo-1.png",
    "sevenpay.png",
    "ministery-mines.png",
    "suyog.png",
  ];

  const tabs = [
    {
      id: "educate",
      title: "Educate",
      icon: "training.png",
      image: "educate.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facilis optio atque perferendis vel laudantium tempora error.",
      features: [
        "Tailored Solutions",
        "Post Training Assistance",
        "Access Recorded Sessions",
        "Tailored Solutions",
      ],
    },
    {
      id: "excel",
      title: "Excel",
      icon: "good-feedback.png",
      image: "excel.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facilis optio atque perferendis vel laudantium tempora error.",
      features: [
        "Tailored Solutions",
        "Post Training Assistance",
        "Access Recorded Sessions",
        "Tailored Solutions",
      ],
    },
    {
      id: "empower",
      title: "Empower",
      icon: "human-resource.png",
      image: "empower.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facilis optio atque perferendis vel laudantium tempora error.",
      features: [
        "Tailored Solutions",
        "Post Training Assistance",
        "Access Recorded Sessions",
        "Tailored Solutions",
      ],
    },
  ];
  const galleryImages = [
    "https://cdn.pixabay.com/photo/2023/05/22/10/49/houses-8010401_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/13/05/36/mountains-8123933_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/12/21/35/stream-7651969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/10/24/20/22/muhlviertel-7544316_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/09/13/11/47/mountains-4473760_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/29/20/01/sunset-4238445_1280.jpg",
  ];

  const [data, setData] = useState<any>(null);
  // const activeContent = data?.tabs.find((tab) => tab.id === activeTab);

  const [activeTab, setActiveTab] = useState("educate");
  const activeContent = data?.tabs.find((t: any) => t.tab_type === activeTab);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get("/corporate-page");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Corporate Training</h2>

            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li className="active">Corporate Training</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section clientele-section corprt-section">
        <h2 className="text-align-center">
          Trusted by Leading{" "}
          <span style={{ color: "#2870db" }}>Enterprises</span> Worldwide
        </h2>

        {/* Slider 1 */}
        <div
          className="slider"
          style={
            {
              "--width": "150px",
              "--height": "50px",
              "--imageQuantity": slider1Logos.length,
            } as React.CSSProperties
          }
        >
          <div className="list">
            {slider1Logos.map((logo, index) => (
              <div className="item" key={index}>
                <img src={`/images/brand-logos/${logo}`} alt="Company Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Slider 2 */}
        <div
          className="slider"
          //   reverse="true"
          style={
            {
              "--width": "200px",
              "--height": "200px",
              "--imageQuantity": slider2Logos.length,
            } as React.CSSProperties
          }
        >
          <div className="list">
            {slider2Logos.map((logo, index) => (
              <div className="item" key={index}>
                <img src={`/images/brand-logos/${logo}`} alt="Company Logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-sec2 corprt-section2">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Our <span style={{ color: "#2870db" }}>Growth</span> Story
          </h2>

          <div className="row">
            {data?.stats.map((item, index) => (
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6" key={index}>
                <div className="card">
                  <div className="icon-div">
                    <img src={`./images/${item.icon}`} alt="" />
                  </div>

                  <h4>{item.number}</h4>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section corprt-section3">
        <div className="container">
          {/* Tabs */}
          <div className="tab-box">
            <ul className="nav nav-tabs tab-btns tab-buttons clearfix">
              {data?.tabs.map((tab) => (
                <li className="nav-item" key={tab.id}>
                  <button
                    className={`tab-btn w-100 p-0 nav-link ${
                      activeTab === tab.tab_type ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.tab_type)}
                  >
                    <div className="icon-box">
                      <img
                        className="black"
                        src={`/images/${tab.icon}`}
                        alt={tab.title}
                      />
                    </div>
                    <h4>{tab.title}</h4>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab-content mt-4">
            <div className="corporate-content-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="right-text-container">
                    <h3>{activeContent?.title}</h3>

                    <p>{activeContent?.description}</p>

                    <div className="features">
                      {activeContent?.features.map((feature, index) => (
                        <div key={index}>{feature}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="img-crprt">
                    <img
                      src={`/images/${activeContent?.image}`}
                      alt={activeContent?.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Training <span style={{ color: "#fac90c" }}>Gallery</span>
          </h2>

          <div className="gallery-container">
            {data?.gallery.map((img, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <a
                    href={img?.image}
                    data-fancybox="gallery"
                    data-caption={`Caption Image ${index + 1}`}
                  >
                    <img
                      src={img?.image}
                      alt={`Gallery ${index + 1}`}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-offered">
        <div className="container">
          <h2 className="text-align-center">
            Discover <span style={{ color: "#2267cc" }}>Courses</span>
          </h2>

          <div className="row">
            {data?.courses.map((course, index) => (
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className="course-div">
                  <div className="course-icon">
                    <img src={`./images/${course.icon}`} alt={course.title} />
                  </div>

                  <h4>{course.title}</h4>

                  <p>{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="subPage-hading">
            Frequently Asked <span style={{ color: "#2267cc" }}>Questions</span>
          </h2>

          <div className="accordion">
            {data?.faqs.map((data: any) => (
              <>
                <div className="accordion-item">
                  <button className="accordion-button">{data?.question}</button>

                  <div className="accordion-body">{data?.answer}</div>
                </div>
              </>
            ))}

            <div className="accordion-item">
              <button className="accordion-button">
                Are all listed batches guaranteed?
              </button>

              <div className="accordion-body">
                Most batches are guaranteed unless unforeseen situations occur.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CorporateTraining;
