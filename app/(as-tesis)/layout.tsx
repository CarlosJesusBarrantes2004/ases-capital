import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/astesis/Header";
import Footer from "@/components/astesis/Footer";

export const metadata: Metadata = {
  title: "As-Tesis",
  description: "Demo página As-Tesis",
};

function AsTesisLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex flex-col flex-1 space-y-10">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

export default AsTesisLayout;
