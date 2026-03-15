"use client";
import Image from "next/image";
import Link from "next/link";
import { instructors } from "../data/Instructors";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/lib/axios";
interface Instructor {
  id: number;
  name: string;
  experience: string;
  skills: string;
  image: string;
  link: string;
}

interface InstructorSection {
  section: {
    heading: string;
    highlight_text: string;
  };
  instructors: Instructor[];
}

export default function InstructorPage() {
  const [data, setData] = useState<InstructorSection | null>(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axiosInstance.get("/instructors"); // Replace with your actual endpoint
        setData(res.data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };
    fetchInstructors();
  }, []);

  if (!data) return null; // Or a skeleton loader

  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Our Instructor</h2>

            <ul className="list-style">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="active">Our Instructor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="section instructors-section">
        <div className="container">
          <h2 className="text-align-center">
            {data?.section?.heading} <br />
            <span style={{ color: "#2267cc" }}>
              {data?.section?.highlight_text}
            </span>{" "}
            Training
          </h2>

          <div className="row g-4 mt-4">
            {data?.instructors?.map((instructor) => (
              <div
                key={instructor.id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              >
                <div className="instructor-card">
                  <Link href={instructor.link} className="hover-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <div className="profile-pic">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={350}
                      height={250}
                      className="img-fluid"
                    />
                  </div>

                  <div className="instructor-info">
                    <h3>{instructor.name}</h3>

                    <p className="title">{instructor.experience}</p>

                    <p className="skills-cat">{instructor.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
