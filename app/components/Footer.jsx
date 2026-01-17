export default function Footer() {
  return (
    <footer className="footer">
      {/* <img src="./images/Footer-image-1.svg" className="fot-bg" alt="" /> */}
      {/* <img src="./images/Footer-image-2.svg" className="fot-bg" alt="" /> */}

      <div className="footer-top">
        <div className="container">
          <div className="row footer-brand">
            <div className="col-xl-6">
              <div className="logo-box">
                <img src="./images/TT-logo-light.svg" alt="logo" />
                <h5>Your 360<sup>o</sup> Cyber Security Partner</h5>
              </div>

              <h4 className="footer-line-txt">Since 2013</h4>
            </div>

            <div className="col-xl-6">
              <p>
                <strong>Corporate Office</strong>: 3rd Floor, F3, Ryan Tower,
                Technology Corridor, near Trident Academy, Chandaka Industrial
                Estate, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024
              </p>

              <div className="social-menu">
                <ul>
                  <li>
                    <a href="https://x.com/threatsys" target="_blank">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/threatsys/"
                      target="_blank"
                    >
                      <img src="./images/instagram.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/threatsys"
                      target="_blank"
                    >
                      <img src="./images/facebook-app-symbol.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@ThreatsysTechnologies"
                      target="_blank"
                    >
                      <img src="./images/youtube.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/threatsys/"
                      target="_blank"
                    >
                      <img src="./images/linkedin.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="col">
              <div className="f-cnt">
                <div className="f-cell">
                  <div className="cell">
                    <img src="./images/phone-call.png" alt="" />
                  </div>
                  <div>
                    <p>+91-9668200222</p>
                    <p>+91-8018482222</p>
                  </div>
                </div>

                <div className="f-cell">
                  <div className="cell">
                    <img src="./images/email.png" alt="" />
                  </div>
                  <div>
                    <p>sales@threatsys.co.in</p>
                    <p>support@threatsys.co.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <h3>Cyber Security Testing</h3>
              <a href="#">IOT Security Testing</a>
              <a href="#">SCADA Security Testing</a>
              <a href="#">Thick Client Security Testing</a>
              <a href="#">Web Application Security Testing</a>
              <a href="#">Mobile Apps Security Testing</a>
              <a href="#">Network Penetration Testing</a>
            </div>

            <div className="col">
              <h3>Industries</h3>
              <a href="#">Banking & Finance</a>
              <a href="#">Government Industry</a>
              <a href="#">IT, ITeS & Retail Industry</a>
              <a href="#">Manufacturing & Telecom</a>
              <a href="#">Healthcare</a>
              <a href="#">Higher Education</a>
            </div>

            <div className="col">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Core Values</a>
              <a href="#">Leadership Team</a>
              <a href="#">Why Choose Us</a>
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
              <a href="#">News Coverage</a>
              <a href="#">Careers</a>
              <a href="#">Locations</a>
              <a href="#">Global Presence</a>
            </div>

            <div className="col">
              <h3>Support</h3>
              <a href="#">CYQER</a>
              <a href="#">Book Your Consultation</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Help & FAQ</a>
              <a href="#">Downloads</a>
              <a href="#">Contact Us</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <div className="btm-footer">
        <div className="container">
          <p>Copyright © 2025 Threatsys Technologies Private Limited</p>
        </div>
      </div>
    </footer>
  );
}
