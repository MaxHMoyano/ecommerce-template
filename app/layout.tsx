import { Footer, Navbar } from '@/components';
import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'TronStore',
  description: 'Buy & Sell your PC related components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} h-screen max-w-full bg-slate-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
