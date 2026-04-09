"use client";
import axiosInstance from "@/app/lib/axios";
import React, { useEffect, useState } from "react";

const OurTeam = () => {
  const [data, setData] = useState<any | null>(null);
  const [teamMembers, setTeamMembers] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axiosInstance.get("/team-section"); // Adjust endpoint as per your API
        setData(res.data?.section);
        setTeamMembers(res.data.members);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading || !data) {
    return <div className="loading-spinner">Loading...</div>; // Replace with a skeleton if preferred
  }

  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Our Team</h2>

            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>

              <li>
                <a href="./about-us.html">About Us</a>
              </li>

              <li className="active">Our Team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section our-team-section">
        <div className="container">
          <h2
            className="subPage-hading text-align-center"
            data-splitting="true"
          >
            {data.heading}{" "}
            <span style={{ color: "#2267cc" }}> {data.highlight_text}</span>
          </h2>

          <p className="sub-head wow fadeInUp">{data.description}</p>

          <div className="row">
            {/* Member 1 */}

            {teamMembers?.map((member: any) => (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="team-card wow fadeInUp">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#memberdetails"
                      className="hover-arrow"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <div className="team-outer">
                      <img
                        src={member?.image_url || "/images/team-img.jpg"}
                        alt="Team Member"
                      />
                    </div>

                    <div className="team-info">
                      <h3>{member.name}</h3>
                      <p> {member.role}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
