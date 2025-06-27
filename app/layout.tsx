import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Patate le Chat",
  description: "Site pratique pour garder Patate",
  icons: {
    icon: "/logo-patate.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={fredoka.variable}>
        {children}
      </body>
    </html>
  );
}
