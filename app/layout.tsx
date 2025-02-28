import type { Metadata } from "next";
import "./globals.css";
import RightSidebar from "@/components/RightSidebar";



export const metadata: Metadata = {
  title: "Travel for Life",
  description: "Book your desired travel place",
  icons: {
    icon: "/favicon.ico", 
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
        className=" bg-home md:bg-contain z-[100000px] bg-top bg-no-repeat "
      >
        
        {children}
        <RightSidebar />
      </body>
    </html>
  );
}
