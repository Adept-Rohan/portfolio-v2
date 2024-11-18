import type { Metadata } from "next";
import "../globals.css";



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

        <div className="w-screen flex justify-center">
            <div className="w-[90%] max-w-[1200px]">

                {children}
            </div>
        </div>

    );
}
