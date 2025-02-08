import Footer from "@/components/Footer";
import { Iphone15ProDemo } from "@/components/iphone15";
import Header from "@/components/menu";
import Sobre from "@/components/sobre";
import TestimonialsSection from "@/components/testemunhos";

export default function Home() {
  return (
    <main>
      <Header />
      <Iphone15ProDemo />
      <div style={{ margin: "50px 0" }} />
      <Sobre />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
