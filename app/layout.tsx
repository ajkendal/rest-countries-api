import type { Metadata } from 'next'
import { ThemeProvider } from './components/theme-provider'
import './styles/globals.css'
import Header from './components/Header'

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
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
