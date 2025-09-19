import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mastero Konnect',
  description: 'Transform Your Journey. Connect with a Mastero.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Missing Publishable Key. Please add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env.local file.')
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider publishableKey={publishableKey}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}