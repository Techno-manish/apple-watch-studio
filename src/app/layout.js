// Add this at the top of your component file to mark it as a client component
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* Add other head elements if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
