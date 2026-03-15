"use client";
import Image from "next/image";
import Link from "next/link";
import { clients } from "../data/clients";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/lib/axios";

export default function Clientele() {
  const [data, setData] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axiosInstance.get("/clients"); // Adjust endpoint as per your API
        setData(res.data?.filter((client: any) => client.logo_url != ""));
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
      {/* Banner Section */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Our Clientele</h2>

            <ul className="list-style">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="active">Our Clientele</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section our-clientele-section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Brands Who <span style={{ color: "#2267cc" }}>Believe</span> in Us
          </h2>

          <div className="row g-4 mt-4">
            {data.map((client, index) => (
              <div
                key={index}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              >
                <div className="client-box">
                  <Image
                    src={client.logo_url}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
