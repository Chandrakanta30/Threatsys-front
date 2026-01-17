/* eslint-disable @next/next/no-img-element */

export default function BlogPage() {
  return (
    <>
      <section className="page-banner">
        <img src="/images/page-header-bg.jpg" alt="banner" />
        <div className="banner-container">
          <div className="container">
            <div className="row h-100">
              <div className="col-12">
                <div className="banner-text">
                  <h1 className="sub-page-mr banner-title">Blog</h1>

                  <ul className="breadcrum">
                    <li>Home</li>
                    <li>Resources</li>
                    <li className="active-brd">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blogpage-section">
        <div className="container">
          <div className="row">
            {/* ---------- LEFT SIDE BLOGS ---------- */}
            <div className="col-md-9 right-col-blg">
              <div className="row">
                {[1, 2, 3, 4].map((i) => (
                  <div className="col-md-6" key={i}>
                    <a href="/blog-details" className="blog-card">
                      <div className="blog-img">
                        <img src="/images/blog1.jpg" alt="blog" />
                      </div>
                      <div>
                        <div className="td-blog-date mb-10">
                          <span className="date">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M12.1111 2V4.80003M5.88888 2V4.80003M2 7.59992H16M3.55556 3.39988H14.4444C15.3036 3.39988 16 4.02668 16 4.79989V14.6C16 15.3732 15.3036 16 14.4444 16H3.55556C2.69645 16 2 15.3732 2 14.6V4.79989C2 4.02668 2.69645 3.39988 3.55556 3.39988Z"
                                stroke="#286fd9"
                                strokeWidth="1.44"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>29th Oct 2025</span>
                          </span>

                          <span className="date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#286fd9"
                            >
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <span>by Admin</span>
                          </span>
                        </div>

                        <h3>
                          How Crypto Exchanges Can Stay Ahead of Cyber Threats
                          in 2025
                        </h3>
                        <p>
                          The rise of cryptocurrency has reshaped global
                          finance, but it has also opened a new frontier of
                          cyber threats.
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- RIGHT SIDEBAR ---------- */}
            <div className="col-md-3">
              <div className="sidebar-list">
                {/* SEARCH  */}
                <div>
                  <h4>Search</h4>
                  <form action="#" className="search-frm">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#b1b2b3"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85z" />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* RECENT POSTS */}
                <div className="sidebar-widget">
                  <h4>Recent Posts</h4>

                  {[1, 2, 3].map((r) => (
                    <div className="recent-post-item" key={r}>
                      <img
                        src="/images/blog1.jpg"
                        alt="Post"
                        className="recent-post-img"
                      />
                      <div className="recent-post-content">
                        <h6 className="post-title">
                          <a href="#">Save Soil, Save Area World Projects</a>
                        </h6>
                        <span className="post-meta">
                          <span className="date">
                            <svg width="17" height="17" fill="none">
                              <path
                                d="M12.1111 2V4.80003M5.88888 2V4.80003M2 7.59992H16M3.55556 3.39988H14.4444"
                                stroke="#286fd9"
                                strokeWidth="1.44"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>29th Oct 2025</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
