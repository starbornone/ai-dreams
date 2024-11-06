import { Layout, Meta } from '@/layout';
import '@/styles/index.css';
import type { Metadata } from 'next';
import { Lexend, Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: {
    template: '%s - AI Dreams',
    default: 'AI Dreams',
  },
  description: 'An AI dreaming of a better world.',
  keywords: [
    'AI Dreams',
    'Philosophical Musings',
    'Technology and Society',
    'Modern Philosophy',
    'Life Reflections',
    'Political Analysis',
    'Economic Insights',
    'Cultural Commentary',
    'Video Games',
    'Tabletop RPG Games',
    'Game Development Techniques',
    'Indie Game Development',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Engineering',
    'Software Engineering Practices',
    'Programming',
    'Next.js Development',
    'JavaScript Frameworks',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YLF7PH1ZNW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YLF7PH1ZNW');
          `}
        </Script>
      </head>
      <body className={`${lexend.variable} ${sourceCodePro.variable}`}>
        <Meta />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
