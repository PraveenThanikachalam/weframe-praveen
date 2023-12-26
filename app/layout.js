import { Lexend } from 'next/font/google';
import { oceanwide, fira_code, nt_adventure } from '@/fonts';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const font = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'WeframeTech',
  description:
    'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.',
  icons: {
    icon: '/assets/logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oceanwide.variable} ${fira_code.variable} ${nt_adventure.variable}`}
    >
      <body className={`${font.className} overflow-y-scroll no-scrollbar`}>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
