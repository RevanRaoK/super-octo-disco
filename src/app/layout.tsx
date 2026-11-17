import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from 'next/font/google';
import 'katex/dist/katex.min.css';
import './globals.css';
import { ScrollProgressTracker } from '@/components/ScrollProgressTracker';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'IRS — Information Retrieval Systems Interactive Course Guide',
  description:
    'Complete Educative/AlgoMonster-style Information Retrieval Systems course guide across Units I–V with inline SVGs, Word-typeset KaTeX formulas, and step-by-step algorithm walkthroughs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ScrollProgressTracker />
        {children}
      </body>
    </html>
  );
}
