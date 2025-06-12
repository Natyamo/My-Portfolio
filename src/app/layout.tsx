import type { Metadata } from "next";
import { Anton, Darumadrop_One } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio about programing skill",
};

//google fonts settings
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const darumadrop1 = Darumadrop_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-daruma1",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${anton.variable} ${darumadrop1.variable} font-sans antialiased text-white bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
