import Bussines from "@/components/Bussines";
import Footer from "@/components/Footer";
import { Iphone15ProDemo } from "@/components/iphone15";
import { MarqueeDemo } from "@/components/marquee";
import Header from "@/components/menu";
import Sobre from "@/components/sobre";

export default function Home() {
  return (
    <main>
      <Header />
      <Iphone15ProDemo />
      <div style={{ margin: "50px 0" }} />
      <Sobre />
      <Bussines />
      <MarqueeDemo />
      <Footer />
    </main>
  )
}
