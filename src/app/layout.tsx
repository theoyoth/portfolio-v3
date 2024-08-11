import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
// components
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight:['300','400','500','600'] });

export const metadata: Metadata = {
  title: "TheoSB",
  description: "this is my portfolio as programmer and little graphic designer, I show you my project and about me in this portfolio. thank you 👍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-slate-200 dark:bg-zinc-950`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
