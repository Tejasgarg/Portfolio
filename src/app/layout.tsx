import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { bodyFont, displayFont } from "@/lib/fonts";
import { MainLayout } from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "TG | Tejas Garg",
  description: "Portfolio of Tejas Garg",
  icons: {
    icon: "/images/Group2.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <ClientBody>
        <MainLayout>{children}</MainLayout>
      </ClientBody>
    </html>
  );
}
