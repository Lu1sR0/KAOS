import Link from "next/link"
import Image from "next/image"

export default function LojaOnline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Image
        src="/kaoslogo.png"
        alt="Comunidade Kaos"
        width={300}
        height={100}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Em Breve</h1>
      <p className="text-xl mb-8">Nossa Loja Online está chegando. Aguarde novidades!</p>
      <Link href="/" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Voltar para a Home
      </Link>
    </div>
  )
}

