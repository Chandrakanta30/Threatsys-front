"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { getPage } from "@/app/services/pageService";
import TestimonialSection from "@/app/common-components/TestimonialSection";

// Web Application Security Testing – API Response Types

export interface ServiceApiResponse {
  id: number;
  documentId: string;
  slug: string;
  ServiceName: string;
  serviceicon: string | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  ServiceDetails: ServiceDetail[];
  Image: string | null;
  Counter: CounterItem[];
  RelatedServices: RelatedService[];
  faq: FAQText[];
}

export interface ServiceDetail {
  id: number;
  ServiceDetailsName: string;
  ServiceDetailsDescription: string;
}

export interface CounterItem {
  id: number;
  CounterName: string;
  CounterValue: string;
}

export interface RelatedService {
  id: number;
  Name: string;
  Details: string;
}

interface FAQText {
  type: "text";
  text: string;
}
type PageData = {
  data?: ServiceApiResponse[];
};

interface FAQText {
  type: "text";
  text: string;
}

interface FAQParagraph {
  type: "paragraph";
  children: FAQText[];
}

interface FAQItem {
  id: number;
  title: string;
  Description: FAQParagraph[];
}
const stepIcons = [
  "scoping.png",
  "mapping.png",
  "reconnaissance.png",
  "vulnerability-identification.png",
  "scanning.png",
  "Post-exploitation.png",
  "report.png",
  "strategic-mitigation.png",
  "patch-verification.png",
];

export default function PageClient({ page }: { page: string }) {
  const [content, setContent] = useState(page);
  const [pageDetails, setPageDetails] = useState<ServiceApiResponse | null>(
    null
  );

  //   console.log("content", content);

  // const loadPageContent = async (slug: string) => {
  //   try {
  //     const url = `services/?filters[slug][$eq]=${encodeURIComponent(
  //       slug
  //     )}&populate=*`;
  //     const pageDetails = await getPage(url);

  //     console.log("pagedetails", pageDetails);
  //     setPageDetails(pageDetails?.data?.[0] ?? null);
  //   } catch (error) {
  //     console.error("Failed to load page content", error);
  //   }
  // };

  // useEffect(() => {
  //   if (!content) return;
  //   loadPageContent(content);
  // }, [content]);

  useEffect(() => {
    if (!content) return;

    let cancelled = false;

    getPage(
      `/services/?filters[slug][$eq]=${encodeURIComponent(content)}&populate=*`
    )
      .then((pageDetails: any) => {
        if (cancelled || !pageDetails?.data) return;

        setPageDetails(pageDetails.data[0] ?? null);
      })
      .catch((err: unknown) => {
        console.error("Failed to load page content", err);
      });

    return () => {
      cancelled = true;
    };
  }, [content]);

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
              <img src="../images/testing-banner.jpg" alt="banner" />
              <div className="banner-container">
                <div className="container">
                  <div className="row h-100">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1 className="sub-page-mr banner-title">
                          {pageDetails?.ServiceName}
                        </h1>

                        <ul className="breadcrum">
                          <li>Home</li>
                          <li>Services</li>
                          <li>Cyber Security Testing</li>
                          <li className="active-brd">
                            {pageDetails?.ServiceName}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section services-details-section">
              <div className="container">
                <h3 className="wow fadeInUp top-text text-align-center">
                  Services
                </h3>

                <h2
                  className="wow fadeInUp text-align-center"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Importance of Penetration
                  <span className="gradient-text">
                    {" "}
                    Testing in Cyber Defense
                  </span>
                </h2>

                {/* <div className="row align-items-center">
                  <div className="col-xl-7 col-md-12">
                    <div className="details-cntr-text wow fadeInLeft">
                      <p className="page-sub-text">
                        Mitigate network security risks, identify weak points,
                        and stay compliant with ease.
                      </p>

                      <p>
                        At Threatsys, we uncover gaps in your network security{" "}
                        <strong>before attackers do</strong>. As a trusted{" "}
                        <strong>
                          Network Penetration Testing Company in Bhubaneswar
                        </strong>
                        , India, we perform both internal and external tests to
                        assess real-world threats. Our testing simulates
                        cyberattacks to reveal vulnerabilities affecting data{" "}
                        <strong>
                          Confidentiality, Integrity, and Availability (CIA)
                        </strong>
                        . Starting with a vulnerability assessment, our experts
                        combine advanced tools with manual techniques to detect
                        and exploit security flaws. After testing, you receive a{" "}
                        <strong>detailed report</strong> explaining how
                        vulnerabilities were found and how to fix them, ensuring
                        stronger, safer network defenses.
                      </p>

                      <p>
                        Our network penetration tests begin with a vulnerability
                        assessment, where our expert penetration testers utilize
                        multiple tools to gain initial knowledge. A
                        vulnerability assessment is not a replacement for a
                        network penetration test, though. After interpreting
                        those results, our expert penetration testers will use
                        manual techniques, human intuition, and their
                        backgrounds in network administration to attack those
                        vulnerabilities.
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-5 col-md-12">
                    <div className="service-vector wow fadeInRight">
                      <img src="../images/Asset 95.svg" alt="" />
                    </div>
                  </div>
                </div> */}

                {pageDetails?.ServiceDetails?.map(
                  (item: ServiceDetail, index: number) => {
                    const paragraphs =
                      item.ServiceDetailsDescription.split("\n\n").filter(
                        Boolean
                      );

                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={item.id}
                        className="row align-items-center mb-5"
                      >
                        {isEven && (
                          <div className="col-xl-7 col-md-7">
                            <div className="details-cntr-text wow fadeInLeft">
                              <p className="page-sub-text">
                                {item.ServiceDetailsName}
                              </p>

                              {paragraphs.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="col-xl-5 col-md-5">
                          <div
                            className={`service-vector wow ${
                              isEven ? "fadeInRight" : "fadeInLeft"
                            }`}
                          >
                            <img
                              src="../images/Asset 95.svg"
                              alt={item.ServiceDetailsName}
                            />
                          </div>
                        </div>

                        {!isEven && (
                          <div className="col-xl-7 col-md-7">
                            <div className="details-cntr-text wow fadeInRight">
                              <p className="page-sub-text">
                                {item.ServiceDetailsName}
                              </p>

                              {paragraphs.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            <section className="section data-section fnt">
              <div className="container">
                <div className="why-choose-counter-list">
                  {pageDetails?.Counter.map((item, index) => {
                    const value = item.CounterValue.replace(/\D/g, "");
                    const suffix = item.CounterValue.replace(/\d/g, "");

                    return (
                      <div
                        key={item.id}
                        className="why-choose-counter-item wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${(index + 1) * 0.1}s`}
                      >
                        <div className="icon-box">
                          <img
                            src={`../images/icon-why-choose-counter-${
                              index + 1
                            }.svg`}
                            alt={item.CounterName}
                          />
                        </div>

                        <div className="why-choose-counter-content">
                          <h3>
                            <span className="counter">{value}</span>
                            {suffix}
                          </h3>
                          <p>{item.CounterName}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="section services-details-section">
              <img
                className="services_right"
                src="../images/services_right_shape.png"
                alt="bg"
              />
              <img
                className="services_left"
                src="../images/services_left_shape.png"
                alt="bg"
              />

              <div className="container">
                <h3 className="wow fadeInUp top-text text-align-center">
                  Services
                </h3>

                <h2
                  className="wow fadeInUp text-align-center"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Best Website Security
                  <br />
                  <span className="gradient-text">
                    Testing Services in Bhubaneswar, Odisha
                  </span>
                </h2>

                <div className="step-wrapper row">
                  {pageDetails?.RelatedServices?.map(
                    (step: RelatedService, index: number) => (
                      <div
                        key={step.id}
                        className="col-xl-4 col-lg-4 col-md-6 col-12"
                      >
                        <div className="step-card">
                          <div className="ribbon-number">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="stat-img">
                            <img
                              src={`../images/icon/${stepIcons[index]}`}
                              alt={step.Name}
                            />
                          </div>

                          <h3 className="title">{step.Name}</h3>

                          <p className="desc">{step.Details.trim()}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            <section className="section services-details-wapt">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-md-12">
                    <h3 className="wow fadeInUp top-text">
                      Web Application Security Benefits
                    </h3>

                    <h2
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      data-cursor="-opaque"
                    >
                      Our WAPT services bring you a unique set
                      <span className="gradient-text">
                        {" "}
                        of security advantages
                      </span>
                    </h2>

                    <div className="w-100">
                      <a href="#" className="cta-btn fill-icon mt-0">
                        <span>Get Secured Now</span>
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

                    <img
                      src="../images/TT.svg"
                      alt="Logo"
                      className="line-logo-img"
                    />
                  </div>

                  <div className="col-xl-7 col-md-12">
                    <div className="benefits-row">
                      <div className="benefit-item wow fadeInRight">
                        <h3>Deep Insights</h3>
                        <p>
                          Identifying every detail that could be abused or
                          become an attack surface. Insights help uncover hidden
                          and critical vulnerabilities.
                        </p>
                      </div>

                      <div className="benefit-item wow fadeInRight">
                        <h3>Identifying &amp; Fixing Vulnerabilities</h3>
                        <p>
                          Finding vulnerabilities, prioritizing high-risk
                          issues, and providing a strategic plan to fix them
                          through reliable assessment.
                        </p>
                      </div>

                      <div className="benefit-item wow fadeInRight">
                        <h3>Black Box &amp; White Box Pentesting</h3>
                        <p>
                          Detailed analysis of application design, networking,
                          system settings, data sources, authorization, and
                          authentication flows.
                        </p>
                      </div>

                      <div className="benefit-item wow fadeInRight">
                        <h3>Manual &amp; Automated Application Testing</h3>
                        <p>
                          Our experts detect hidden flaws that automation alone
                          cannot reveal, combining both manual and automated
                          testing approaches.
                        </p>
                      </div>

                      <div className="benefit-item wow fadeInRight">
                        <h3>CERT-IN Security Audit</h3>
                        <p>
                          As a CERT-In–associated auditor, we conduct certified
                          security assessments for applications, networks, and
                          websites.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="section full-testimonial">
              <div className="container">
                <img
                  src="../images/quotes.png"
                  alt="Logo"
                  className="line-logo-img"
                />

                <div className="swiper msgswiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="service-text-testimonial">
                        <h4>
                          Threatsys&apos;s team went deep down into the rabbit
                          hole to understand the product and find several
                          bugs...
                        </h4>
                        <p>Security Officer, Leading Healthcare Company</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section> */}
            <TestimonialSection />

            <section className="section faq-section">
              <div className="container">
                <h2
                  className="wow text-align-center sub-page-mr"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Popular Questions{" "}
                  <span className="gradient-text">We’re Asked Often</span>
                </h2>

                <p className="text-align-center mb-40">
                  Find answers and solutions to common cyber security services
                  issues and questions. If you can’t find an answer, contact us
                  anytime and we will be happy to help you further.
                </p>

                <div className="row">
                  {/* FAQ ACCORDION */}
                  <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">
                      {pageDetails?.faq?.map((item: any, index: number) => {
                        const headingId = `heading-${item.id}`;
                        const collapseId = `collapse-${item.id}`;

                        return (
                          <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header" id={headingId}>
                              <button
                                className={`accordion-button ${
                                  index !== 0 ? "collapsed" : ""
                                }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded={index === 0}
                                aria-controls={collapseId}
                              >
                                {item.title}
                              </button>
                            </h2>

                            <div
                              id={collapseId}
                              className={`accordion-collapse collapse ${
                                index === 0 ? "show" : ""
                              }`}
                              aria-labelledby={headingId}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                {item.Description.map((block, i) =>
                                  block.children.map((child, j) => (
                                    <p key={`${i}-${j}`}>{child.text}</p>
                                  ))
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CONTACT FORM (unchanged) */}
                  <div className="col-lg-4">
                    <div className="contact-container">
                      <h2>How May We Help You!</h2>

                      <form className="contact-form">
                        <div className="form-row">
                          <div className="form-group">
                            <i className="ri-user-line" />
                            <input type="text" placeholder="Name" required />
                          </div>

                          <div className="form-group">
                            <i className="ri-mail-line" />
                            <input type="email" placeholder="Email" required />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <i className="ri-phone-line" />
                            <input type="text" placeholder="Number" required />
                          </div>

                          <div className="form-group">
                            <select required defaultValue="">
                              <option value="" disabled>
                                Service
                              </option>
                              <option>Cyber Security</option>
                              <option>Web Development</option>
                              <option>Cloud Solutions</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group textarea">
                          <textarea placeholder="Write Message" required />
                        </div>

                        <button type="submit" className="submit-btn">
                          Submit Now <i className="ri-arrow-right-line" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <img
                  src="/images/question.png"
                  alt="FAQ Illustration"
                  className="faq-image"
                />
              </div>
            </section>
          </>
        </>
      )}
    </>
  );
}
