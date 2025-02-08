"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/assinaturas", label: "Assinaturas" },
  { href: "/area-membros", label: "Área de Membros" },
  { href: "/loja-online", label: "Loja Online" },
  { href: "/contato", label: "Contato" },
]

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
]

export default function Footer() {
  return (
    <footer className=" text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="relative w-[180px] h-[60px]">
            <Image
              src="/logokaos.svg"
              alt="Comunidade Kaos"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 mt-4">Transformando carreiras no mundo digital.</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-600">Links Úteis</h3>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, color: "#ff0000" }}
                className="text-gray-300 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-600">Menu</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <motion.li key={item.href} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={item.href} className="text-gray-300 hover:text-red-600 transition-colors">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-600">Contato</h3>
          <div className="text-gray-300 space-y-2">
            <p className="hover:text-red-600 transition-colors cursor-pointer">Endereço: Rua da Inovação, 123</p>
            <p className="hover:text-red-600 transition-colors cursor-pointer">Florianópolis, SC</p>
            <p className="hover:text-red-600 transition-colors cursor-pointer">Email: contato@kaos.com</p>
            <p className="hover:text-red-600 transition-colors cursor-pointer">Telefone: (48) 9999-9999</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800"
      >
        <p className="text-center text-gray-500">© {new Date().getFullYear()} Kaos. Todos os direitos reservados.</p>
      </motion.div>
    </footer>
  )
}

