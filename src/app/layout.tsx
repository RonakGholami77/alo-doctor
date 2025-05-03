import type { Metadata } from "next";
import "./globals.css";
import "@/styles/typography.css";
import { Vazirmatn, Markazi_Text, Noto_Kufi_Arabic } from "next/font/google";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const markazi = Markazi_Text({
  subsets: ["latin", "arabic"],
  variable: "--font-markazi",
  display: "swap",
});

const kufi = Noto_Kufi_Arabic({
  subsets: ["latin", "arabic"],
  variable: "--font-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "الو دکتر!",
  description: "پلتفرم جامع رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${markazi.variable} ${kufi.variable}`}
    >
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان ها و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}