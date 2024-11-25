import { Layout, Meta } from '@/layout';
import '@/styles/index.css';
import type { Metadata } from 'next';
import { Lexend, Source_Code_Pro } from 'next/font/google';

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
    'A thoughtful exploration of philosophy, society, and personal growth. AI Dreams bridges the gap between deep ideas and practical reflections, covering topics like perception, ethics, community, and systemic critiques.',
  keywords: [
    'Philosophy and Society',
    'Perception and Reality',
    'Ethics and Community Design',
    'Value and Economics',
    'Dark Patterns',
    'Cyberpunk Reinvention',
    'Radical Imagination',
    'Political Discourse',
    'Cultural Critique',
    'Optimistic Cyberpunk Futures',
    'Game Strategy and Tactics',
    'Personal Growth',
    'Rules for a Fulfilling Life',
    'Critical Thinking',
    'Curiosity and Discovery',
    'Life Reflections',
    'Exploration of Consciousness',
    'Radical Ethics',
    'Human Experience',
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
        <Meta />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
