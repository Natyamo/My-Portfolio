import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Anton, Darumadrop_One, Raleway } from "next/font/google";
import "@/styles/globals.css";

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
      <body className={`${anton.variable} ${darumadrop1.variable} ${raleway.variable} font-sans antialiased bg-slate-600 text-white text-2xl`}
      >
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
