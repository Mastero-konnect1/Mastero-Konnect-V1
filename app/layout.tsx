import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navigation from '@/components/layout/Navigation'; // Ensure correct import

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mastero Konnect',
  description: 'Transform Your Journey. Connect with a Mastero.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}