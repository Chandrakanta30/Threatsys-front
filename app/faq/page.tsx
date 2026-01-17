"use client";

export default function FaqSection() {
  return (
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
          Find answers and solutions to common cyber security services issues
          and questions. If you can’t find an answer, contact us anytime and we
          will be happy to help you further.
        </p>

        <div className="row">
          {/* FAQ ACCORDION */}
          <div className="col-lg-8">
            <div className="accordion" id="accordionExample">
              {/* Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Which Applications Do You Test?
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      First and foremost, We’ve tested several types of
                      applications. Our vast experience allows us to support
                      Banking, Government, Insurance, eCommerce, Payment
                      Gateways, Healthcare, Gaming, B2B Software, Financial
                      Services, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What Are The Costs For Doing A Penetration Test?
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Costs vary depending on scope, size, systems, and
                      frequency. We recommend a fixed-fee model to eliminate
                      unexpected expenses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why Should I have Penetration Testing?
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Penetration testing identifies vulnerabilities before
                      attackers exploit them, ensuring business continuity and
                      compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Why Should I have Penetration Testing?
                  </button>
                </h2>

                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      It helps maintain regulatory compliance and protects
                      sensitive data from breaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-4">
            <div className="contact-container">
              <h2>How May We Help You!</h2>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <i className="ri-user-line"></i>
                    <input type="text" placeholder="Name" required />
                  </div>

                  <div className="form-group">
                    <i className="ri-mail-line"></i>
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <i className="ri-phone-line"></i>
                    <input type="text" placeholder="Number" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service-select" className="visually-hidden">
                      Select Service
                    </label>
                    <select id="service-select" required>
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
                  <textarea placeholder="Write Message" required></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Now <i className="ri-arrow-right-line"></i>
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
  );
}
