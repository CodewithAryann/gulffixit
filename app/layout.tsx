// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Footer from "../components/footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main className="pt-19">{children}</main>
         <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}