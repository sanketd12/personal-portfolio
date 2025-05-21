import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanket's Portfolio",
  description: "Sanket's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/myicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white`}>
        <div className="pt-[60px] min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
