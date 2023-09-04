import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Drinking Game 🍻',
  description: 'Best action drinking game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/drink.png"></link>
        <link rel='icon' href='https://cdn-icons-png.flaticon.com/128/5606/5606620.png'/>
      </head>
      <body className="h-14 ">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
