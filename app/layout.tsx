import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ouvrage",
  description: `Un mot quotidien provenant d'une collection de mots mise à jour à travers les différentes rencontres de la vie`,
};

export const revalidate = 86400;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
