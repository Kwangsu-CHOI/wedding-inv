import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

import dynamic from 'next/dynamic'

const AudioPlayer = dynamic(() => import('../components/AudioPlayer'), { ssr: false })

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Wedding of Kwangsu & Jiwon",
  description: "Wedding of Kwangsu and Jiwon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="antialiased w-full min-h-screen">{children}</body>
      <AudioPlayer />
    </html>
  );
}
