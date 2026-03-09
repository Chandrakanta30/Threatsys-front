"use client";

import { testimonials } from "@/app/data/testimonials";
import { useState } from "react";

export default function TestimonialPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Testimonial</h2>

            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="/about-us">About Us</a>
              </li>

              <li className="active">Testimonial</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section all-testimonial-section">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-xl-9">
              {testimonials.map((item) => (
                <div className="testimonial-card" key={item.id}>
                  <div className="profile">
                    <img src={item.image} className="avatar" alt={item.name} />

                    <span className="quote-badge">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                      </svg>
                    </span>
                  </div>

                  <div>
                    <h3 className="name">{item.name}</h3>

                    <div className="stars">{"★".repeat(item.rating)}</div>

                    <p className="comment">{item.comment}</p>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                >
                  <i className="fas fa-angle-left"></i>
                </button>

                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`page-btn ${
                      currentPage === num ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}

                <button
                  className="page-btn"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                >
                  <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-3">
              <div className="instructor-sidebar">
                <h4 className="title">Quick Contact</h4>

                <p>
                  Feel free to contact us through LinkedIn or Facebook if you
                  prefer!
                </p>

                <form>
                  <div className="form-grp">
                    <input type="text" placeholder="Name" />
                  </div>

                  <div className="form-grp">
                    <input type="email" placeholder="E-mail" />
                  </div>

                  <div className="form-grp">
                    <input type="text" placeholder="Topic" />
                  </div>

                  <div className="form-grp">
                    <input type="number" placeholder="Phone" />
                  </div>

                  <div className="form-grp">
                    <textarea placeholder="Type Message"></textarea>
                  </div>

                  <button className="button1 mt-2" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
