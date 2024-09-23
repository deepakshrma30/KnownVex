import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CounterStoreProvider } from "@/provider/counterProvider";
import AuthModal from "@/components/authModal";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KnownVex",
  description: "Course Selling Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-[100dvh] grid grid-rows-[auto_1fr_auto] bg-gradient-to-r  from-blue-50 to-pink-50  font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        > */}
        <CounterStoreProvider>
          <AppBar />

          {children}
          <AuthModal />
          <Footer />
        </CounterStoreProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
