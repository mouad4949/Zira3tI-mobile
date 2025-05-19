import type React from "react"
import { Inter, Amiri } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import BottomNavbar from "@/components/navigation/bottom-navbar"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

export const metadata = {
  title: "ZirA3ti - Agriculture Intelligente",
  description: "Assistant agricole intelligent pour les agriculteurs marocains",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar-MA" className={`${inter.variable} ${amiri.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="container max-w-md mx-auto pb-20">{children}</main>
          <BottomNavbar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
