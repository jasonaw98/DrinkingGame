import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Drinking Games 🍻",
  description: "Best mini drinking game",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/quby.webp"></link>
        <link rel="icon" href="quby.webp" />
      </head>
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
