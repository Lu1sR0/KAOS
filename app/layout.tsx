import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import type React from "react"
import { AuroraBackgroundDemo } from "@/components/aurora"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Kaos Site",
  description: "Comunidade de aprendizado e networking",
  authors: [{ name: "Kaos Team" }],
  keywords: ["marketing", "empreendedores", "negócios", "networking", "digital", "físico"],
  openGraph: {
    title: "Kaos Site",
    description: "Comunidade de aprendizado e networking para empresários e empreendedores do meio físico e digital",
    url: "https://kaos-site.com",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250122-WA0141-removebg-HZO36ivJjYcc4j4yIYy92IVwqf9w0K.png",
        width: 800,
        height: 600,
        alt: "Kaos Site Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaos_site",
    title: "Kaos Site",
    description: "Comunidade de aprendizado e networking para empresários e empreendedores do meio físico e digital",
    images: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250122-WA0141-removebg-HZO36ivJjYcc4j4yIYy92IVwqf9w0K.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <link rel="shortcut icon" href="/icons8-favicon-32.png" type="image/x-icon" />
      <div className="fixed inset-0 -z-10">
        <AuroraBackgroundDemo />
      </div>
      <body className={`${poppins.className} min-h-screen`}>{children}</body>
    </html>
  )
}
