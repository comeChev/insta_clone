import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {/* Header */}
        <Header />
        {/* Feed section */}
        {children}
        {/* Modal */}
      </body>
    </html>
  );
}
