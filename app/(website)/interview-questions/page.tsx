import React from "react";

const interviewCourses = [
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "/images/interview.jpg",
    link: "./interview-questions-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "/images/interview.jpg",
    link: "./interview-questions-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "/images/interview.jpg",
    link: "./interview-questions-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "/images/interview.jpg",
    link: "./interview-questions-details.html",
  },
];

const InterviewQuestionsSection = () => {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Interview Questions</h2>
            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li className="active">Interview Questions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interview Questions Grid */}
      <section className="section our-team-section">
        <div className="container">
          <div className="row">
            {interviewCourses.map((course, index) => (
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
                key={index}
              >
                <a className="course-box" href={course.link}>
                  <div className="course-image">
                    <img src={course.image} alt={`Course Image ${index + 1}`} />
                  </div>

                  <div className="course-header">
                    <div className="course-title">{course.title}</div>
                    <div className="course-meta">
                      <div className="c-time">
                        <img src="/images/calendar.png" alt="Time Icon" />
                        <span>{course.date}</span>
                      </div>

                      <div className="c-time">
                        <img src="/images/view.png" alt="View Icon" />
                        <span>{course.views}</span>
                      </div>

                      <div>
                        Words By: <span>{course.author}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InterviewQuestionsSection;
