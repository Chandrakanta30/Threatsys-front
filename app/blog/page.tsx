import React from "react";

const blogPosts = [
  {
    title: "Security Alerting and Monitoring Concepts and Tools",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "./images/interview.jpg",
    link: "./blog-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "./images/interview.jpg",
    link: "./blog-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "./images/interview.jpg",
    link: "./blog-details.html",
  },
  {
    title: "ISO 27001 Lead Auditor Exam Practice Questions and Answers",
    date: "23 May 2025",
    views: 508,
    author: "Ankita Sahoo",
    image: "./images/interview.jpg",
    link: "./blog-details.html",
  },
];

const BlogPage = () => {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Blog</h2>
            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li className="active">Blog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section blog-section">
        <div className="container">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-xl-9 col-lg-9 col-md-8 col-12">
              <div className="row">
                {blogPosts.map((post, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                    key={index}
                  >
                    <a className="course-box" href={post.link}>
                      <div className="course-image">
                        <img src={post.image} alt="Blog" />
                      </div>

                      <div className="course-header">
                        <div className="course-title">{post.title}</div>

                        <div className="course-meta">
                          <div className="c-time">
                            <img src="./images/calendar.png" alt="Date" />
                            <span>{post.date}</span>
                          </div>

                          <div className="c-time">
                            <img src="./images/view.png" alt="Views" />
                            <span>{post.views}</span>
                          </div>

                          <div>
                            Article by: <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <a href="#" className="page-btn">
                  ‹
                </a>
                <a href="#" className="page-btn">
                  1
                </a>
                <a href="#" className="page-btn">
                  2
                </a>
                <a href="#" className="page-btn active">
                  3
                </a>
                <a href="#" className="page-btn">
                  4
                </a>
                <a href="#" className="page-btn">
                  5
                </a>
                <a href="#" className="page-btn">
                  ›
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              {/* Search */}
              <div className="search-box">
                <input type="text" placeholder="Search here" />
                <button>🔍</button>
              </div>

              {/* Categories */}
              <div className="categories-box">
                <h4 className="box-title">Categories</h4>
                <ul className="categories-list">
                  {[
                    "Artificial Intelligence (AI)",
                    "AWS",
                    "Career Oriented Courses",
                    "CCSP",
                    "CISA",
                    "CISCO",
                    "CISSP",
                    "Cloud",
                    "Cloud Security",
                    "Cloud Security Alliance",
                  ].map((category, index) => (
                    <li key={index}>
                      <a href="#">
                        <i className="fas fa-angle-right"></i> {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="latest-box">
                <h4 className="box-title">Latest Post</h4>

                {[
                  {
                    date: "April 13, 2024",
                    title: "The Right Learning Path for Beginners",
                  },
                  {
                    date: "April 10, 2024",
                    title: "Top 10 Skills in 2024",
                  },
                ].map((item, index) => (
                  <div className="latest-item" key={index}>
                    <img src="./images/interview.jpg" alt="Post" />
                    <div className="latest-content">
                      <span className="post-date">
                        <i className="fas fa-calendar-alt"></i> {item.date}
                      </span>
                      <p className="post-title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
