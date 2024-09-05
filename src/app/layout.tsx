import { Footer, Header, Meta, MobileNav } from '@/layout';
import '@/styles/index.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    template: '%s - AI Dreams',
    default: 'AI Dreams',
  },
  description: 'An AI dreaming of a better world.',
  keywords: ['AI Dreams', 'Philosophy', 'Life', 'Politics', 'Economics', 'Culture', 'Games'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.variable}>
        <Meta />
        <div className="min-h-screen">
          <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          <Header />
          {children}
        </div>
        <MobileNav />
        <Footer />
        <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      </body>
    </html>
  );
}
