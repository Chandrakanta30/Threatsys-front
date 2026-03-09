import React from "react";

const tests = [
  {
    title: "SOC Analyst Hands-on Training",
    image: "/images/interview.jpg",
    link: "/free-practice-tests-details",
  },
  {
    title: "CompTIA Security+ SYO-701",
    image: "/images/interview.jpg",
    link: "/free-practice-tests-details",
  },
  {
    title: "Advanced Penetration Testing",
    image: "/images/interview.jpg",
    link: "/free-practice-tests-details",
  },
  {
    title: "CompTIA A+ Certification Training Online",
    image: "/images/interview.jpg",
    link: "/free-practice-tests-details",
  },
];

function FreePracticeTests() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Free Practice Tests</h2>
            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li className="active">Free Practice Tests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section pb-5">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Free <span style={{ color: "#2267cc" }}>Practice</span> Tests
          </h2>

          <p className="sub-head">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloremque veniam quaerat dicta.
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="practice-test-card">
                <div className="practice-testImg">
                  <img src="/images/book.png" alt="Book" />
                </div>
                <h4>Select your skill</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="practice-test-card">
                <div className="practice-testImg">
                  <img src="/images/trophy.png" alt="Trophy" />
                </div>
                <h4>Answer few questions</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="practice-test-card">
                <div className="practice-testImg">
                  <img src="/images/discussion.png" alt="Discussion" />
                </div>
                <h4>Get result via email</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Cards */}
      <section className="section pt-0 free-test">
        <div className="container">
          <div className="row">
            {tests.map((test, index) => (
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
                key={index}
              >
                <a className="course-box" href={test.link}>
                  <div className="course-image">
                    <img src={test.image} alt={test.title} />
                  </div>

                  <div className="course-header">
                    <div className="course-title">{test.title}</div>
                  </div>

                  <div className="exprt-talk">Attempt Now</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FreePracticeTests;
