import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/ases/Header";
import Footer from "@/components/ases/Footer";

export const metadata: Metadata = {
  title: "Grupo Ases",
  description: "Demo página Grupo Ases",
};

export default function AsesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
