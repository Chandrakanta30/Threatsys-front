import "./globals.css";
import "../public/css/plugins.css";

// Local CSS files
import "../public/css/style.css";
import "../public/css/animate.min.css";
import "../public/css/fancybox.css";

// Components
import BootstrapProvider from "./BootstrapProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Types
import type { ReactNode } from "react";
import type { Metadata } from "next";

// Google Fonts
import { Inter, Lato, Montserrat, Exo_2 } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Your Website",
  description: "Your description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Swiper */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        {/* Owl Carousel */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />

        {/* Select2 */}
        <link
          href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
          rel="stylesheet"
        />

        {/* Splitting */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting/dist/splitting.css"
        />
      </head>

      <body
        className={`${inter.variable} ${lato.variable} ${montserrat.variable} ${exo2.variable}`}
      >
        <BootstrapProvider />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
