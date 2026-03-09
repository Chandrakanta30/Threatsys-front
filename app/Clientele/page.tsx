import Image from "next/image";
import Link from "next/link";
import { clients } from "../data/clients";

export default function Clientele() {
  return (
    <>
      {/* Banner Section */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Our Clientele</h2>

            <ul className="list-style">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="active">Our Clientele</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section our-clientele-section">
        <div className="container">
          <h2 className="subPage-hading text-align-center">
            Brands Who <span style={{ color: "#2267cc" }}>Believe</span> in Us
          </h2>

          <div className="row g-4 mt-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              >
                <div className="client-box">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
