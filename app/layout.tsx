import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ouvrage",
  description: `Une collection de jolis mots.`,
};

// CRON used to revalidate as page regeneration isn't working
// See doc: https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
// export const revalidate = 86400
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
