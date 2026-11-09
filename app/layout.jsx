import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOSProvider from '../components/AOSProvider'
import "./globals.css";

export const metadata = {
  title: "Md. Saim | Full Stack Developer",
  description:
    "Portfolio of Md. Saim, a full-stack web developer working with React, Next.js, Node.js, Express, Django, and REST APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
