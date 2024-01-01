import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'travel for  camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        
      <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        
        <Footer />
      
      
      </body>
    </html>
  )
}
