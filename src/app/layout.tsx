import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import Topbar from "@/components/Topbar/Topbar";
import Trusted from "@/components/trustedClient/Trusted";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIAC",
  description: "Dynamic Institute of Automation & Controls",
  icons:{
    icon: '/diacred.png'
  },
openGraph: {
    title: "DIAC- Industrial Automation Experts",
    description: "Your trusted partner for automation and training solutions.",
    url: "https://diac.co.in",
    siteName: "DIAC",
    images: [
      {
        url: "https://diac.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DIAC",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Topbar />
        <Navbar />
        <Trusted />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
