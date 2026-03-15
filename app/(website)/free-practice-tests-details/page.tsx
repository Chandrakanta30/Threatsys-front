import React from "react";

const practiceSets = [
  { number: 1, time: "20 Min", questions: 20 },
  { number: 2, time: "20 Min", questions: 20 },
  { number: 3, time: "20 Min", questions: 20 },
];

function SOCTestDetails() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>SOC Analyst</h2>
            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li>
                <a href="/free-practice-tests">Free Practice Tests</a>
              </li>
              <li className="active">SOC Analyst</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Sets */}
      <section className="section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            SOC Analyst <span style={{ color: "#2267cc" }}>Hands-on</span>{" "}
            Training
          </h2>

          <div className="row">
            {practiceSets.map((set) => (
              <div className="col-md-4" key={set.number}>
                <a className="course-box practice-test-dtl" href="/free-test">
                  <div className="tst-dtl-crd">
                    <h3>
                      Practice Set <span>{set.number}</span>
                    </h3>
                    <div className="c-time">
                      <div>{set.time}</div>
                      <div>{set.questions} Questions</div>
                    </div>
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

export default SOCTestDetails;
