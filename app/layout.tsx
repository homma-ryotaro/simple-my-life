import siteData from "@/blog.config";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Title from "@/components/title";
import { cn } from "@/lib/utils";
import ProviderTheme from "@/provider/provider-theme";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "700"],
  variable: "--noto-serif-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <ProviderTheme>
        <body
          className={cn(
            "relative min-h-screen flex flex-col justify-between font-notoSerifJp",
            notoSerifJp.variable
          )}
        >
          <div className={"flex-1"}>
            <Header />
            <main
              className={
                "md:mb-12 mb-8 min-w-full prose md:prose-lg dark:prose-invert"
              }
            >
              <Title />
              {children}
            </main>
          </div>
          <Footer />
          <BackToTop />
        </body>
      </ProviderTheme>
    </html>
  );
}
