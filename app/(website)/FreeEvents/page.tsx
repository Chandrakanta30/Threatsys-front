"use client";
import React, { useEffect, useState } from "react";

// const events = {
//   happening: [
//     {
//       date: "25",
//       month: "Sep",
//       title: "Cybersecurity Career Roadmap: From Beginner to Pro",
//       time: "8:00 am - 5:00 pm",
//       location: "Paris, France",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       image: "/images/event.jpg",
//       link: "/event-details",
//     },
//     {
//       date: "18",
//       month: "Dec",
//       title: "Managing Time for Study",
//       time: "8:00 am - 5:00 pm",
//       location: "Paris, France",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       image: "/images/event.jpg",
//       link: "/event-details",
//     },
//   ],

//   upcoming: [
//     {
//       date: "25",
//       month: "Sep",
//       title: "Managing Time for Study",
//       time: "8:00 am - 5:00 pm",
//       location: "Paris, France",
//       desc: "Adipisicing elit. Odio ducimus illo aspernatur blanditiis.",
//       image: "/images/event.jpg",
//     },
//   ],

//   expired: [
//     {
//       date: "25",
//       month: "Sep",
//       title: "Managing Time for Study",
//       time: "8:00 am - 5:00 pm",
//       location: "Paris, France",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       image: "/images/event.jpg",
//     },
//   ],
// };

function FreeEvents() {
  const [activeTab, setActiveTab] = useState("happening");

  const [events, setEvents] = useState<{ [key: string]: Event[] }>({
    happening: [],
    upcoming: [],
    expired: [],
  });

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        const grouped = { happening: [], upcoming: [], expired: [] };
        data.events.forEach((ev: Event) => grouped[ev.type].push(ev));
        setEvents(grouped);
      });
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Free Events</h2>

            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li className="active">Free Events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section event-section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Explore Our <span style={{ color: "#2267cc" }}>Events</span>
          </h2>

          {/* Tabs */}
          <ul className="nav nav-tabs mb-4">
            {["happening", "upcoming", "expired"].map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Events */}
          {events[activeTab]?.map((event: any, index: number) => (
            <div className="event-card" key={index}>
              <div className="event-date-box">
                <div className="event-date">
                  {event.date} <span>{event.month}</span>
                </div>
              </div>

              <div className="event-details">
                <h5>{event.title}</h5>

                <p className="mb-2">
                  <small>
                    {event.time} | {event.location}
                  </small>
                </p>

                <p className="text-muted">{event.desc}</p>

                {activeTab === "expired" ? (
                  <button className="tict-btn disabled-div">
                    View Details
                  </button>
                ) : (
                  <a className="tict-btn" href={event.link || "#"}>
                    View Details
                  </a>
                )}
              </div>

              <div className="event-image">
                <img src={event.image} alt="Event" />
                <div className="countdown">27 Days 4 Hrs 52 Mins 26 Secs</div>
              </div>
            </div>
          ))}

          {/* Pagination */}
        </div>
      </section>
    </>
  );
}

export default FreeEvents;
