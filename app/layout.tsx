import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REST Country API | Amanda J Kendal-Brown',
  description: 'A Next.js project to explore REST Countries API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
