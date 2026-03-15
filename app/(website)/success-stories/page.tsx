"use client";
import { useEffect, useState } from "react";

const SuccessStories = () => {
  const [videos, setVideos] = useState([]);

  const loadVideos = async () => {
    const res = await fetch("/api/videos");
    const data = await res.json();
    setVideos(data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <>
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Success Stories</h2>
            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./about-us.html">About Us</a>
              </li>
              <li className="active">Success Stories</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section vdo-section">
        <div className="container">
          <div className="bentoWrapper">
            {videos.map((video, index) => (
              <div
                className={`bento ${index === 0 ? "lg-bentoImg" : ""}`}
                key={"B" + video.id}
              >
                <img src={video.image} alt="video" />

                <a
                  className="video-play-button"
                  href="#"
                  data-fancybox
                  data-src={video.video_url}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
