"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { getPage } from "@/app/services/pageService";
import TestimonialSection from "@/app/common-components/TestimonialSection";
import React from "react";

export default function PageClient({ page }: { page: string }) {
  const [content, setContent] = useState(page);
  const [pageDetails, setPageDetails] = useState<any>(null);
  //   console.log("content", content);
  // &populate[IndustryServiceDetailsIndustryWise][populate][DetailsName]=*
  // &populate=*
  const LoadPageContent = async (slug: string) => {
    const url = `industries/?filters[slug][$eq]=${content}&populate[IndustryServiceDetailsIndustryWise][populate][DetailsName]=*&populate[CounterName]=*&populate[IndustryServiceDetails]=*&populate[IndustrySection2]=*&populate[steps][populate][StepDetails]=*&populate[RelatedServices][populate][RelatedDetailsServiceItem]=*`;

    //
    // &populate[CounterName]=*
    // &populate[IndustrySection2][populate]=*
    const pageDetails: any = await getPage(url);
    console.log("pagedetails", pageDetails?.data[0]);
    setPageDetails(pageDetails?.data[0]);
  };

  useEffect(() => {
    if (!page) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    LoadPageContent(page);
  }, [page]);

  const icons = [
    "/images/padlock.png",
    "/images/cogwheel.png",
    "/images/handshake.png",
  ];

  const RelatedServiceIcons = [
    "/images/icon/scoping.png",
    "/images/icon/Post-exploitation.png",
    "/images/icon/reconnaissance.png",
    "/images/icon/vulnerability-identification.png",
  ];

  return (
    <>
      {!content && (
        <>
          <Loading></Loading>
        </>
      )}

      {content && (
        <>
          <>
            <section className="page-banner">
              <img src="/images/page-header-bg.jpg" alt="banner" />
              <div className="banner-container">
                <div className="container">
                  <div className="row h-100">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1 className="sub-page-mr banner-title">
                          {pageDetails?.Name}
                        </h1>

                        <ul className="breadcrum">
                          <li>Home</li>
                          <li>Industry</li>
                          <li className="active-brd"> {pageDetails?.Name}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section gov-intro">
              <div className="container">
                <div className="gov-container">
                  <div className="gov-left text-align-center">
                    <h3 className="top-text">About This Sector</h3>
                    {/* <h2 className="sub-page-mr">{pageDetails?.Heading}</h2> */}
                    <h2
                      className="sub-page-mr"
                      dangerouslySetInnerHTML={{ __html: pageDetails?.Heading }}
                    />

                    {pageDetails?.Main_Service_Details?.map(
                      (block: any, index: number) => {
                        if (block.type !== "paragraph") return null;

                        const text = block.children
                          ?.map((child: any) => child.text)
                          .join("")
                          .trim();

                        if (!text) return null; // skip empty paragraphs

                        return (
                          <p className="gov-desc" key={index}>
                            {text}
                          </p>
                        );
                      }
                    )}

                    <a href="#" className="cta-btn fill-icon">
                      <span>Discover More</span>
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

                <div className="gov-stats">
                  {pageDetails?.CounterName.map((data: any, i) => (
                    <div className="gov-stat-box" key={i}>
                      <h3 className="count-text">{data?.Value}</h3>
                      <p>{data?.Name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section gov-challenges">
              <div className="container">
                <h3 className="top-text text-align-center">
                  {pageDetails?.IndustryServiceDetails?.Heading1}
                </h3>

                <h2 className="sub-page-mr text-align-center text-white">
                  {pageDetails?.IndustryServiceDetails?.Heading2}
                </h2>

                <div className="row g-4">
                  {[
                    "Information Transparency",
                    "System Integration",
                    "Cyber Threats",
                    "Data Compliance",
                  ].map((title, i) => (
                    <div className="col-md-6 col-lg-3 challenge-card" key={i}>
                      <div className="chlng-card text-center">
                        <h5 className="card-title">{title}</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eos culpa facere ratione nihil commodi
                          repudiandae expedita quis veritatis magni obcaecati
                          explicabo non, vitae animi quia quisquam. Rerum odit
                          quia doloremque.
                        </p>
                        <img
                          src="/images/wave-bg.png"
                          alt="bg"
                          className="card-wave-bg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              className="section info-section"
              style={{
                background:
                  "linear-gradient(180deg, rgb(255 255 255) 25%, rgb(245 245 245) 100%)",
              }}
            >
              <img
                className="services_left"
                src="/images/services_left_shape.png"
                alt="bg"
              />
              <img
                className="services_right"
                src="/images/services_right_shape.png"
                alt="bg"
              />

              <div className="container">
                <div className="flex-div">
                  <div className="text-and-stats-block wow fadeInLeft">
                    <h2
                      className="wow fadeInUp sub-page-mr"
                      data-wow-delay="0.2s"
                      data-cursor="-opaque"
                    >
                      {/* Are you ready for today’s{" "} */}
                      <span className="gradient-text">
                        {pageDetails?.IndustrySection2?.Heading}
                      </span>
                    </h2>

                    <p className="description" style={{ maxWidth: "none" }}>
                      {pageDetails?.IndustrySection2?.Details?.map(
                        (block: any, index: number) => {
                          if (block.type !== "paragraph") return null;

                          const text = block.children
                            ?.map((child: any) => child.text)
                            .join("")
                            .trim();

                          if (!text) return null; // skip empty paragraphs

                          return (
                            <p className="gov-desc" key={index}>
                              {text}
                            </p>
                          );
                        }
                      )}
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

                  <div className="image-and-floating-stats">
                    <div className="floating-stats-boxes">
                      <div className="stat-box white-box">
                        <span className="number">
                          <span className="plus">%</span>
                        </span>
                        <p className="label">
                          {pageDetails?.IndustrySection2?.ImageTextBlock1}
                        </p>
                      </div>

                      <div className="stat-box blue-box">
                        <span className="number">
                          56<span className="plus">%</span>
                        </span>
                        <p className="label">
                          {pageDetails?.IndustrySection2?.ImageTextBlock2}
                        </p>
                      </div>
                    </div>

                    <div
                      className="worker-image-placeholder tilt-box"
                      style={{
                        backgroundImage: "url(/images/awards-img-1.jpg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="section gov-services">
              <div className="container">
                <h3 className="top-text text-align-center">
                  {pageDetails?.RelatedServices?.Heading}
                </h3>

                <h2
                  className="text-align-center"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  {pageDetails?.RelatedServices?.HeadingDetails}
                  <br />
                  <span className="gradient-text">
                    strengthen cybersecurity and data privacy
                  </span>
                </h2>

                <div className="step-wrapper row">
                  {pageDetails?.RelatedServices.RelatedDetailsServiceItem.map(
                    (item, index) => (
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 col-12"
                        key={item.id}
                      >
                        <div className="step-card">
                          <div className="ribbon-number">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="stat-img">
                            <img
                              src={RelatedServiceIcons[index]}
                              alt={item.ItemName}
                            />
                          </div>
                          <h3 className="title">{item.ItemName}</h3>
                          <p className="desc">{item.ItemDetails}</p>
                        </div>
                      </div>
                    )
                  )}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="step-card">
                      <div className="ribbon-number">01</div>
                      <div className="stat-img">
                        <img src="/images/icon/scoping.png" alt="" />
                      </div>
                      <h3 className="title">
                        Risk and Vulnerability Assessments
                      </h3>
                      <p className="desc">
                        Threatsys Risk offers customizable Risk and
                        Vulnerability Assessment processes to identify and
                        appraise technical, operational, and business threats
                        for public sector organizations. The process is based on
                        CERT-IN, OWASP, and NIST standards and can incorporate
                        ISO 27001, GDPR, PCI, or HIPAA frameworks.
                      </p>
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="step-card">
                      <div className="ribbon-number">02</div>
                      <div className="stat-img">
                        <img src="/images/icon/Post-exploitation.png" alt="" />
                      </div>
                      <h3 className="title">Penetration Testing</h3>
                      <p className="desc">
                        Our penetration testing service assesses a system’s
                        resistance to attacks. We attempt controlled intrusions
                        and provide a detailed report outlining attack
                        methodology and remediation steps. Red Team Assessments
                        can also be performed in stealth mode.
                      </p>
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="step-card">
                      <div className="ribbon-number">03</div>
                      <div className="stat-img">
                        <img src="/images/icon/reconnaissance.png" alt="" />
                      </div>
                      <h3 className="title">Governance, Strategy, Policy</h3>
                      <p className="desc">
                        Our cybersecurity professionals bring executive-level
                        planning and strategy expertise to public sector
                        organizations. We help design governance structures and
                        cybersecurity strategies based on NIST, CERT-IN, and
                        OWASP frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="step-card">
                      <div className="ribbon-number">04</div>
                      <div className="stat-img">
                        <img
                          src="/images/icon/vulnerability-identification.png"
                          alt=""
                        />
                      </div>
                      <h3 className="title">Incident Response</h3>
                      <p className="desc">
                        Threatsys Incident Response services help government
                        agencies prepare for and respond to cyber incidents and
                        data breaches. Our experts enhance existing response
                        plans to ensure readiness for any security event.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>

            <section className="section gov-steps">
              <div className="container">
                <h2
                  className="text-align-center"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  {/* Delivering a seamless, secure online
                  <br />
                  <span className="gradient-text">experience to citizens</span> */}
                  {pageDetails?.steps?.Heading}
                </h2>

                <div className="steps-section">
                  {pageDetails?.steps?.StepDetails.map((step, index) => (
                    <React.Fragment key={step.id}>
                      <div className="step-box">
                        <div
                          className="step-icon"
                          style={{ background: "#fac90b" }}
                        >
                          <img src={icons[index]} alt="icon" />
                        </div>
                        <h3>{step.StepDetailsHeading}</h3>
                        <p>{step.StepDetails}</p>
                      </div>

                      {/* Only render arrow if not last item */}
                      {index < pageDetails?.steps?.StepDetails.length - 1 && (
                        <div className="stp-arrow" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            <TestimonialSection />
          </>
        </>
      )}
    </>
  );
}
