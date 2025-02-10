import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import type React from "react"
import { AuroraBackgroundDemo } from "@/components/aurora"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const siteUrl = "https://kaos-br.vercel.app"
const imageUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250122-WA0141-removebg-HZO36ivJjYcc4j4yIYy92IVwqf9w0K.png"

export const metadata: Metadata = {
  title: "Kaos Site",
  description: "Comunidade de aprendizado e networking para empresários e empreendedores do meio físico e digital",
  authors: [{ name: "Kaos Team" }],
  keywords: ["marketing", "empreendedores", "negócios", "networking", "digital", "físico"],
  openGraph: {
    title: "Kaos Site",
    description: "Comunidade de aprendizado e networking para empresários e empreendedores do meio físico e digital",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Logo do Kaos Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaos_site",
    title: "Kaos Site",
    description: "Comunidade de aprendizado e networking para empresários e empreendedores do meio físico e digital",
    images: [imageUrl],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link rel="shortcut icon" href="/kaosico.png" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} min-h-screen`}>
        <div className="fixed inset-0 -z-10">
          <AuroraBackgroundDemo />
        </div>
        {children}
      </body>
    </html>
  )
}
