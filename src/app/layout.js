import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "../lib/AuthContext";
import Header from "../components/Header";
import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "Instagram Clone",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Header />
          {/* Header */}
          {/* Feed section */}
          {children}
          {/* Modal */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
