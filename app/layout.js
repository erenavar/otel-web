import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import '@/app/_styles/globals.css'

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-blue-900 text-gray-50 h-full flex flex-col min-h-screen">
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
