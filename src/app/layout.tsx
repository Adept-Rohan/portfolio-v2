import type { Metadata } from "next";
import { Inter, Quicksand } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/Header";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: "Rohan Khatiwada",
  description: "Portfolio of Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quicksand.variable}`}
      >
        <div className="w-screen flex justify-center">
          <div className="w-[90%] max-w-[1200px]">
            <Header />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
