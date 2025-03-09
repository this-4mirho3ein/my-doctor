import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";
import '@/styles/typography.css'

const vazirmatn:NextFont = Vazirmatn({
  subsets:['latin','arabic'],
  display:'swap'
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent/>
        {children}
        <p className="tagline">نوبت دهی پزشکی ، سامانه نوبت دهی اینترنتی بیمارستان پزشکان</p>
        <FooterComponent/>
      </body>
    </html>
  );
}
