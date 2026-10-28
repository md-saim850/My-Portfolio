import "./globals.css";

export const metadata = {
  title: "Md. Saim | Full Stack Developer",
  description:
    "Portfolio of Md. Saim, a full-stack web developer working with React, Next.js, Node.js, Express, Django, and REST APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
