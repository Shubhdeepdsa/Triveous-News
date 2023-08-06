'use client'
import { AppBar, Toolbar, colors } from '@mui/material'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import { useUserAuth } from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const {user} = useUserAuth
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <h1>Yo</h1>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
