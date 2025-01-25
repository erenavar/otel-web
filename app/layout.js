import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Hotel",
    default: "Welcome to Hotel",
  },
  description:
    "Luxurious Cabin Hotes in Italy,it was built in heart of nature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 h-full flex flex-col min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="text-center py-4">
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
