import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const funnel = localFont({
  src: "../public/fonts/Funnel.ttf",
  display: "swap",
  variable: "--font-funnel",
});

const silkscreen = localFont({
  src: "../public/fonts/Silkscreen.ttf",
  display: "swap",
  variable: "--font-silkscreen",
});

const gothic = localFont({
  src: "../public/fonts/Gothic.ttf",
  display: "swap",
  variable: "--font-gothic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NAICE",
  description: "*tounge click* nice",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${funnel.variable} ${silkscreen.variable} ${gothic.variable}`}
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
