import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const helvetica = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "openCore",
  description: "Open Core Group",
  keywords: ["opencore"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  );
}
