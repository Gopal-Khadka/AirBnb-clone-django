import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar/index";

export const metadata: Metadata = {
  title: "AirBnB Django",
  description: "A site by Django and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body>
        <NavBar />
        {children}

        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
