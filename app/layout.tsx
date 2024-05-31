import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/provider/modal-provider";
import prismadb from "@/lib/prismadb";
import { ToasterProvider } from "@/provider/toast-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s |${siteConfig.name}`,
  },
  description: "Admin dashboard",
  icons: [
    {
      url: "/image/JemmohKicks_Trimmed.png",
      href: "/image/JemmohKicks_Trimmed.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
