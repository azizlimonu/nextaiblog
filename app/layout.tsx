import './globals.css'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Navbar from './(shared)/Navbar'

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Blog AI',
  description: 'Next js Blog Application with ChatGpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        {/* Navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
