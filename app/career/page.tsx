"use client";

import Image from "next/image";
import Link from "next/link";
import { jobs } from "../data/jobs";
import { careerVideos } from "@/app/data/videos";

export default function CareerPage() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Career</h2>

            <ul className="list-style">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="active">Career</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Intro */}
      <section className="section career-section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Be Part Of Our Team – Turning Truth Into <br />
            <span style={{ color: "#2267cc" }}>Powerful</span> Business
            Decisions
          </h2>

          <div className="row sub-fstSection mt-5">
            {/* Images */}
            <div className="col-lg-6">
              <div className="row position-relative">
                <div className="col-6">
                  <div className="left-img img-hover">
                    <Image
                      src="/images/career1.jpg"
                      alt="career"
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="right-img img-hover">
                    <Image
                      src="/images/foundation-1.jpg"
                      alt="career"
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="bg-shape-career"></div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <div className="content-div content-p">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  possimus error numquam aliquid fugit quae totam sint.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt ipsum perspiciatis aliquid qui quis, exercitationem
                  natus temporibus iste dolor facere vitae.
                </p>

                <a href="#job-list" className="button1 mt-3">
                  View openings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Family */}
      <section className="section happy-family">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Building a <span style={{ color: "#fac90c" }}>Happy</span> Workplace
            Together
          </h2>

          <p>
            Work is made fun and satisfying by introducing employee engagement
            activities and helping new employees to settle in.
          </p>

          <div className="row mt-4">
            {careerVideos.map((video, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <iframe
                  width="100%"
                  height="200"
                  src={video}
                  title="Career Video"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="section job-list" id="job-list">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Explore <span style={{ color: "#2267cc" }}>Careers</span>
          </h2>

          {jobs.map((job) => (
            <div className="job-card mt-4" key={job.id}>
              <h3>{job.title}</h3>

              <div className="company">{job.company}</div>

              <div className="description">
                <p>
                  Job Profile: <span>{job.profile}</span>
                </p>

                <p>
                  Location: <span>{job.location}</span>
                </p>

                <p>
                  Working Day: <span>{job.workingDay}</span>
                </p>

                <p>
                  Description: <span>{job.description}</span>
                </p>
              </div>

              <div className="job-details">
                <div>
                  <i className="fa fa-briefcase"></i> {job.experience}
                </div>

                <div>
                  <i className="fa fa-map-marker-alt"></i> {job.location},
                  Odisha
                </div>
              </div>

              <div className="job-footer">
                <span>
                  {job.posted} - <a href="#">save job</a>
                </span>

                <button
                  className="apply-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#applyJobModal"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
