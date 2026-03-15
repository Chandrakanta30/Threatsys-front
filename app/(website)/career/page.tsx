"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/app/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { jobs } from "../data/jobs";
import { careerVideos } from "@/app/(website)/data/videos";
import React from "react";

// TypeScript Interfaces for the Career Data
interface Job {
  id: number;
  title: string;
  company: string;
  profile: string;
  location: string;
  workingDay: string;
  description: string;
  experience: string;
  posted: string;
}

interface CareerData {
  intro: {
    heading_before: string;
    heading_highlight: string;
    heading_after: string;
    description1: string;
    description2: string;
    image1: string | null;
    image2: string | null;
  };
  happy: {
    heading: string;
    highlight_word: string;
    description: string;
  };
  videos: string[];
  jobs: Job[];
}

export default function CareerPage() {
  const [data, setData] = useState<CareerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/careers");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null; // Add loading spinner if needed

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
            {data?.intro?.heading_before} <br />
            <span style={{ color: "#2267cc" }}>
              {data?.intro?.heading_highlight}
            </span>{" "}
            {data?.intro?.heading_after}
          </h2>

          <div className="row sub-fstSection mt-5">
            {/* Images */}
            <div className="col-lg-6">
              <div className="row position-relative">
                <div className="col-6">
                  <div className="left-img img-hover">
                    <Image
                      src={data?.intro?.image1 || "/images/career1.jpg"}
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
                      src={data?.intro?.image2 || "/images/foundation-1.jpg"}
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
                <p>{data?.intro?.description1}</p>

                <p>{data?.intro?.description2}</p>

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
            {data.happy.heading
              .split(data.happy.highlight_word)
              .map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span style={{ color: "#fac90c" }}>
                      {data.happy.highlight_word}
                    </span>
                  )}
                </React.Fragment>
              ))}
          </h2>

          <p>{data.happy.description}</p>

          <div className="row mt-4">
            {data.videos.map((video: any, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <iframe
                  width="100%"
                  height="200"
                  src={video?.video_url}
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

          {data.jobs.map((job) => (
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
