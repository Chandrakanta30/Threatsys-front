import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapProvider from "./providers/BootstrapProviders";

export const metadata = {
  title: "Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <BootstrapProvider />

        <Header />
        {children}
        <Footer />
      </body>
     </html>
  );
}
