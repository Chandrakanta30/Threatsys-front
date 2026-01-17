"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesMenuData } from "./servicesMenuData";

export default function ServicesMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <li
      className="menu-item services-item has-menu"
      data-menu="services-menu"
    >
      <button className="menu-link">Services</button>

      <div className="dropdown-container mega-menu" id="services-menu">
        <ul className="accordion-menu">
          {servicesMenuData.map((section, index) => (
            <li className={`acc-item ${activeIndex === index ? "active" : ""}`} key={section.title}>
              <button
                className={`acc-btn ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <Image
                  src={section.icon}
                  alt={section.title}
                  width={24}
                  height={24}
                />
                {section.title}
                <span className="arrow-icon">
                  {activeIndex === index ? "▴" : "▾"}
                </span>
              </button>

              {activeIndex === index && (
                <ul className={`acc-content ${activeIndex === index ? "open" : ""}`}>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
