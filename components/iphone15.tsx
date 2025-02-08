"use client"; // Se estiver em Next.js (use isso no topo do arquivo)


import { motion } from "framer-motion";
import { AnimatedListDemo } from "./animatedlist";
import Iphone15Pro from "./magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div id="home" className="relative flex flex-col md:flex-row items-center justify-center gap-16 p-12 text-white top-20">
      {/* Texto ao lado do iPhone */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg text-center md:text-left space-y-6"
      >
        <h2 className="text-5xl font-extrabold leading-tight text-red-600">
          Melhor grupo e comunidade de marketing do Brasil
        </h2>
        <p className="text-lg text-gray-300">
          Junte-se a nós e acompanhe as últimas tendências e estratégias de
          marketing.
        </p>
        <a
          href="https://chat.whatsapp.com/JiE0u8NVhwe6AVsyXFbE5i"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex h-14 px-14 animate-shimmer items-center justify-center rounded-lg border border-red-800 bg-[linear-gradient(110deg,#330000,45%,#8b0000,55%,#330000)] bg-[length:200%_100%] font-semibold text-xl text-red-300 transition-all hover:scale-105 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
          >
            KAOS
          </motion.button>
        </a>
      </motion.div>

      {/* iPhone reposicionado e estilizado */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-[460px] md:w-[380px] drop-shadow-[0_10px_20px_rgba(255,0,0,0.4)]"
      >
        <Iphone15Pro className="size-full">
          <div className="flex items-center justify-center h-full">
            <AnimatedListDemo className="text-black h-[790px] overflow-hidden" />
          </div>
        </Iphone15Pro>
      </motion.div>
    </div>
  );
}
