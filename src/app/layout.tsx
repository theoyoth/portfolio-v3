import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
// components
import { Provider } from "./provider";
import Footer from "@/components/footer";
import Header from "@/components/header";

const roboto = Roboto_Mono({ 
  subsets: ["latin"], 
  weight:['300','400','500','600'],
  variable: "--font-roboto",
});

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
      <body className={cn("bg-slate-200 dark:bg-zinc-950 font-roboto", roboto.variable)}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
