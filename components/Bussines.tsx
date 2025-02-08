"use client";

import React from "react";
import { Sparkles } from "./ui/sparkles";
import { PricingCards } from "./Cards-princing";

function Bussines() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden text-white">
        <section id="assinaturas" className="relative min-h-[90vh] mt-4 w-full overflow-hidden rounded-2xl flex flex-col items-center">
          <article className="grid gap-4 text-center relative z-10 pt-10">
            <h1 className="2xl:text-6xl xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#ff0000] to-red-950 bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Venha ser parte do <br /> KAOS
            </h1>
          </article>
          <PricingCards />
          <div className="absolute bottom-0 z-[2] h-[400px] w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ff0000,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#ff0000"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Bussines;
