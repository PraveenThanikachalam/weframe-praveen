import { Lexend } from 'next/font/google';
import { oceanwide, nt_adventure } from '@/fonts';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Matrix from '@/components/ui/Matrix';

const font = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'WeFrameTech',
  description: 'Generated by create next app',
  icons: {
    icon: '/assets/logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oceanwide.variable} ${nt_adventure.variable}`}
    >
      <body className={`${font.className} overflow-y-scroll no-scrollbar`}>
        <Navbar />
        <Matrix />
        {children}
        <Footer />
      </body>
    </html>
  );
}
