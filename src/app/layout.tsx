import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
// components
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio by Theo",
  description: "this is my portfolio as programmer and little graphic designer, I show you my project and about me in this portfolio. thank you 👍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-slate-200 dark:bg-zinc-950`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
