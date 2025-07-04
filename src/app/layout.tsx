import type { Metadata } from "next";
import { Anton, Darumadrop_One, Raleway } from "next/font/google";
import "@/styles/globals.css";
import { SectionsProvider } from "@/components/Context/Context";
import { sections } from "@/app/news/TopNews";
import { name } from "@/components/TopHome/TopHome";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio about programing",
};

//google fonts settings
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
});

const darumadrop1 = Darumadrop_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-daruma1",
});

const raleway = Raleway({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-raleway", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${anton.variable} ${darumadrop1.variable} ${raleway.variable}
        font-sans antialiased bg-slate-600 text-white text-base md:text-2xl
        overflow-x-hidden
        `}
      >
        <SectionsProvider sections={sections} name={name}>
          {children}
        </SectionsProvider>
      </body>
    </html>
  );
}
