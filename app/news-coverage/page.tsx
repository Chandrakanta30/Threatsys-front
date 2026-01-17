export default function Index() {
  return (
    <>
      <section className="section team-section">
        <div className="container">
          <h2
            className="wow text-align-center sub-page-mr"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Threatsys Technologies
            <span className="gradient-text"> in the News</span>
          </h2>
          <p className="text-align-center mb-40">
            ChatGPT said: Stay updated with the latest media coverage,
            announcements, and stories highlighting Threatsys Technologies’
            impact and innovations in the global cybersecurity industry.
          </p>

          <div className="page-level-search">
            <form
              role="search"
              method="get"
              id="search_form"
              className="search-form"
            >
              <input
                type="text"
                className="form-control form-height search-input alpha_numeric"
                placeholder="Search Title"
                value=""
                name="search_content"
                id="search_content"
                title="Search for:"
              />
              <button
                type="submit"
                className="search-submit"
                aria-label="Search"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="news-box">
                <div className="newscoverage-img tilt-box">
                  <img src="./images/news.jpg" alt="" />
                </div>

                <div className="magazine-content">
                  <p>
                    Media: <span>Business Standard</span>
                  </p>
                  <h6 className="line-clamp-2">
                    10 Indian influential personalities thriving in their field
                    in 2023
                  </h6>

                  <a href="#" className="text-btn">
                    <span>Read the Article</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#286fd9"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="news-box">
                <div className="newscoverage-img tilt-box">
                  <img src="./images/news.jpg" alt="" />
                </div>

                <div className="magazine-content">
                  <p>
                    Media: <span>Digital Journal</span>
                  </p>
                  <h6 className="line-clamp-2">
                    Threatsys’s Revenue has grown by 50%, Says CEO Deepak Kumar
                    Nath
                  </h6>
                  <a href="#" className="text-btn">
                    <span>Read the Article</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#286fd9"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="news-box">
                <div className="newscoverage-img tilt-box">
                  <img src="./images/news.jpg" alt="" />
                </div>

                <div className="magazine-content">
                  <p>
                    Media: <span>Mid Day News</span>
                  </p>
                  <h6 className="line-clamp-2">
                    The Inspiring Story of Cyber Security Auditor and
                    Entrepreneur
                  </h6>
                  <a href="#" className="text-btn">
                    <span>Read the Article</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#286fd9"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="news-box">
                <div className="newscoverage-img tilt-box">
                  <img src="./images/news.jpg" alt="" />
                </div>

                <div className="magazine-content">
                  <p>
                    Media: <span>Business Standard</span>
                  </p>
                  <h6 className="line-clamp-2">
                    10 Indian influential personalities thriving in their field
                    in 2023
                  </h6>
                  <a href="#" className="text-btn">
                    <span>Read the Article</span>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#286fd9"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
