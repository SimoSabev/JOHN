import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Джон Атанасов - Бащата на компютъра",
  description: "Проект, посветен на Джон Атанасов и неговия принос към компютърните технологии",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
