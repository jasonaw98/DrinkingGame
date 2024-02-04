import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Drinking Games 🍻',
  description: 'Best mini drinking game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/quby.webp"></link>
        <link rel='icon' href='quby.webp'/>
      </head>
      <body className="h-14 ">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
