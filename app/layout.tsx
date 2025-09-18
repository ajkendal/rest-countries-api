import type { Metadata } from 'next'
import { ThemeProvider } from './components/theme-provider'
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
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
