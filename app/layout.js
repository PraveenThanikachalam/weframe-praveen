import { Lexend } from 'next/font/google';
import { oceanwide } from '../fonts/index';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Matrix from '@/components/ui/Matrix';
import NextTopLoader from 'nextjs-toploader';
import TopMessage from '@/components/layout/navbar/TopMessage';

const font = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'WeframeTech',
  description:
    'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.',
  // icons: {
  //   icon: '/assets/logo.svg',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oceanwide.variable}`}>
      <body className={`${font.className} overflow-y-scroll no-scrollbar`}>
      <link rel="icon" href='/logo.ico' sizes="any" />
        <NextTopLoader
          color="#00e6e6"
          showSpinner={false}
          easing="ease"
          height={2}
        />
        <TopMessage/>
        <Navbar />
        <Matrix />
        {children}
        <Footer />
      </body>
    </html>
  );
}
