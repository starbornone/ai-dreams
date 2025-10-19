import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Lexend, Source_Code_Pro } from 'next/font/google';

import { Layout, Meta } from '@/layout';

import '@/styles/index.css';

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
  description:
    "A software engineer's exploration of philosophy, society, and personal growth. AI Dreams aims to bridge the gap between deep ideas and practical reflections, covering topics like perception, ethics, community, and systemic critiques.",
  keywords: [
    'Accessible Philosophy',
    'Class Analysis',
    'Consciousness and Society',
    'Consciousness',
    'Critical Thinking',
    'Critique of Capitalism',
    'Cultural Commentary',
    'Dark Patterns Critique',
    'Economic Analysis',
    'Ethics of Technology',
    'Ethics',
    'Future of Capitalism',
    'Human Condition',
    'Modern Philosophy',
    'Nature of Experience',
    'Perception and Reality',
    'Personal Growth',
    'Philosophical Materialism',
    'Philosophy of Technology',
    'Political Philosophy',
    'Radical Change',
    'Radical Reinvention',
    'Reflections on Society',
    'Social Philosophy',
    'Systemic Critique',
    'Systemic Injustice',
    'Technology and Society',
    'Wealth Divide',
    'Wealth Inequality',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${sourceCodePro.variable}`}>
        <Analytics />
        <Meta />
        <SpeedInsights />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
