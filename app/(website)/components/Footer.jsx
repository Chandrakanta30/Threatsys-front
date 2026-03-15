"use client";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">

            {/* Logo & Address */}
            <div className="col col-lg-4 col-md-6 col-sm-6">
              <div className="footer_widget">
                <a href="#">
                  <img
                    src="/images/logo-dark.svg"
                    alt="Threatsys Academy"
                    className="footer-logo"
                  />
                </a>

                <h3 className="footer_widget_title mb-2">Address:</h3>

                <p>
                  <strong>Corporate Office:</strong>
                  <br />
                  3rd Floor, F3, Ryan Tower, Technology Corridor,
                  <br />
                  near Trident Academy, Chandaka Industrial Estate,
                  <br />
                  Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024
                </p>

                <div className="social-icon">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* Sitemap */}
            <div className="col col-md-2 col-sm-4">
              <div className="footer_widget footer-dn">
                <h3 className="footer_widget_title">Sitemap</h3>

                <ul className="page_list unordered_list_block">
                  <li><a href="#"><i className="fas fa-caret-right"></i> Home</a></li>
                  <li><a href="/about-us"><i className="fas fa-caret-right"></i> About Us</a></li>
                  <li><a href="/courses"><i className="fas fa-caret-right"></i> Courses</a></li>
                  <li><a href="/career"><i className="fas fa-caret-right"></i> Careers</a></li>
                  <li><a href="/testimonial"><i className="fas fa-caret-right"></i> Testimonial</a></li>
                  <li><a href="/contact-us"><i className="fas fa-caret-right"></i> Contact us</a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col col-md-3 col-sm-4">
              <div className="footer_widget footer-dn">
                <h3 className="footer_widget_title">Quick Links</h3>

                <ul className="page_list unordered_list_block">
                  <li><a href="/testimonial"><i className="fas fa-caret-right"></i> Reviews</a></li>
                  <li><a href="/training-calendar"><i className="fas fa-caret-right"></i> Training Calendar</a></li>
                  <li><a href="/free-events"><i className="fas fa-caret-right"></i> Upcoming Events</a></li>
                  <li><a href="/privacy-policy"><i className="fas fa-caret-right"></i> Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Courses */}
            <div className="col col-md-3 col-sm-4">
              <div className="footer_widget footer-dn">
                <h3 className="footer_widget_title">Courses</h3>

                <ul className="page_list unordered_list_block">
                  <li><a href="#"><i className="fas fa-caret-right"></i> Cyber Security</a></li>
                  <li><a href="#"><i className="fas fa-caret-right"></i> Cloud Security</a></li>
                  <li><a href="#"><i className="fas fa-caret-right"></i> Governance Risk & Compliance</a></li>
                  <li><a href="#"><i className="fas fa-caret-right"></i> Security Testing</a></li>
                  <li><a href="#"><i className="fas fa-caret-right"></i> Data Privacy</a></li>
                </ul>
              </div>
            </div>

          </div>

          <hr className="border-secondary" />

          <div className="text-center small ftr">
            <div>
              Copyright © 2025 |{" "}
              <a
                href="https://threatsys.co.in/"
                target="_blank"
                rel="noopener"
              >
                Threatsys Technologies Private Limited
              </a>
            </div>

            <div>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener"
          className="btn-whatsapp-pulse"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </footer>

      {/* Modal */}
      <div
        className="modal fade inq-modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5">Enroll Now</h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingName"/>
                  <label htmlFor="floatingName">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingEmail"/>
                  <label htmlFor="floatingEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="tel" className="form-control" id="floatingPhone"/>
                  <label htmlFor="floatingPhone">Phone No.</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="floatingMessage"
                    style={{ height: "150px" }}
                  ></textarea>

                  <label htmlFor="floatingMessage">
                    Comment / Training Required
                  </label>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                  />

                  <label className="form-check-label" htmlFor="termsCheck">
                    By submitting your contact details, you agree to our Terms
                    of Use and Privacy Policy.
                  </label>
                </div>

              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}