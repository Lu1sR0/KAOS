"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { href: "home", label: "Home", isSection: true },
  { href: "sobre", label: "Sobre", isSection: true },
  { href: "assinaturas", label: "Assinaturas", isSection: true },
  { href: "testemunhos", label: "Testemunhos", isSection: true },
  { href: "/area-membros", label: "Área de Membros", isSection: false },
  { href: "/loja-online", label: "Loja Online", isSection: false },
  { href: "/formulario", label: "Contato", isSection: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed w-full z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
      } ${isVisible ? "top-0" : "-top-20"}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="relative w-[140px] h-[50px] sm:w-[180px] sm:h-[60px]">
            <Image src="/logokaos.svg" alt="Comunidade Kaos" fill priority className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.isSection ? (
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adicionado o offset
                  className="text-white hover:text-red-500 transition-all relative group text-lg font-medium cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </ScrollLink>
              ) : (
                <Link
                  href={item.href}
                  className="text-white hover:text-red-500 transition-all relative group text-lg font-medium cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </motion.button>
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.isSection ? (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-80} // Adicionado o offset
                    className="text-white text-2xl font-semibold hover:text-red-500 transition-all cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white text-2xl font-semibold hover:text-red-500 transition-all cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
