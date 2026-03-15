import React from "react";

const batches = [
  {
    course: "CRISC Certification Training",
    date: "23 Aug - 14 Sep",
    time: "09:00 - 13:00 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "full",
  },
  {
    course: "CISSP - Certified Information Systems Security Professional",
    date: "23 Aug - 28 Sep",
    time: "09:00 - 13:00 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "full",
  },
  {
    course: "CISA - Certified Information Systems Auditor",
    date: "24 Aug - 27 Sep",
    time: "09:30 - 13:30 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "full",
  },
  {
    course: "CCSP - Certified Cloud Security Professional",
    date: "30 Aug - 12 Oct",
    time: "09:00 - 13:00 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "open",
  },
  {
    course: "AWS Combo",
    date: "30 Aug - 01 Nov",
    time: "19:00 - 23:00 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "open",
  },
  {
    course: "ISO/IEC 42001 Lead Auditor Training And Certification",
    date: "30 Aug - 28 Sep",
    time: "19:00 - 23:00 IST",
    mode: "ONLINE",
    type: "Weekend",
    status: "open",
  },
];

function TrainingCalendar() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Training Calendar</h2>
            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Training Calendar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Upcoming <span style={{ color: "#2267cc" }}>Batches</span> at a
            Glance
          </h2>

          <div className="batch-card bg-white">
            {/* Filter */}
            <div className="filter-bar d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search Upcoming Batches to Fit Your Goals"
              />

              <label htmlFor="month-select" className="visually-hidden">
                Select Month
              </label>

              <select
                id="month-select"
                className="form-select text-primary"
                aria-label="Select Month"
              >
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>All Months</option>
              </select>
            </div>

            {/* Table */}
            <div className="table-responsive course-tbl custom-table">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Mode</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {batches.map((batch, index) => (
                    <tr key={index}>
                      <td className="course-name">{batch.course}</td>
                      <td>{batch.date}</td>
                      <td>{batch.time}</td>
                      <td>
                        <span className="status-online">{batch.mode}</span>
                      </td>
                      <td>{batch.type}</td>
                      <td>
                        {batch.status === "full" ? (
                          <span className="status-batch-full">BATCH FULL</span>
                        ) : (
                          <a href="#" className="status-enroll">
                            ENROLL NOW
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section choose-us-section choose-us-cl">
        <img
          src="/images/threatsys-logo-bg.png"
          alt="Background Logo"
          className="background-logo-shd"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img src="/images/team.jpg" alt="Team" />
                <div className="insight-badge">
                  27K+ <span>Program Enrollments</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="content">
                <h1 className="sub-text">Why Choose Us</h1>

                <h2>
                  Lead the fight against cybercrime{" "}
                  <span style={{ color: "#2267cc" }}>with expertise</span>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus repellat vitae nemo a pariatur eligendi.
                </p>

                <div className="features">
                  <div>Certified Trainers</div>
                  <div>Highly Interactive Sessions</div>
                  <div>Skill-based Training</div>
                  <div>Certification Focus</div>
                  <div>Flexible Schedule</div>
                  <div>Tailored Solutions</div>
                  <div>Post Training Assistance</div>
                  <div>Access Recorded Sessions</div>
                </div>

                <a href="#" className="button1 mt-0">
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="subPage-hading">
            Frequently Asked <span style={{ color: "#2267cc" }}>Questions</span>
          </h2>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What learning modes does your program offer?
                </button>
              </h2>

              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  The batches listed above provide an online instructor-led
                  classroom training experience. You can also opt for
                  personalized 1-on-1 training or on-demand access to training
                  materials.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Are all listed batches guaranteed to run?
                </button>
              </h2>

              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, 99% of our training batches are guaranteed to run except
                  in unforeseen circumstances.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  What additional value do your batches provide?
                </button>
              </h2>

              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Our batches focus on certification goals and skill-based
                  training delivered by certified trainers with post-training
                  support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrainingCalendar;
