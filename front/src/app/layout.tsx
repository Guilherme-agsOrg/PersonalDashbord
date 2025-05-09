import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "Personal Dashboard",
  description: "Personal Dashboard app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
    <body
      className={`
        ${fontRoboto.variable}
        antialiased`}
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </body>
  </html>
  );
}
