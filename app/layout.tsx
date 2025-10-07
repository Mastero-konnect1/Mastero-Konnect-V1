import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {/* <ClerkProvider publishableKey={publishableKey}> */}
          {children}
        {/* </ClerkProvider> */}
      </body>
    </html>
  )
}