import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A atenção ao detalhe e as características inovadoras transformaram completamente nosso fluxo de trabalho. Isso é exatamente o que estávamos procurando.",
      name: "Helena",
      designation: "Especialista em Design Estratégico e Comunicação Digital",
      src: "/helena.jpeg",
    },
    {
      quote:
        "A implementação foi impecável e os resultados superaram nossas expectativas. A flexibilidade da plataforma é notável.",
      name: "João",
      designation: "Empresário e Consultor Estratégico",
      src: "/joao.jpg",
    },
    {
      quote:
        "Sou apaixonado por entender o comportamento humano e aplicar esse conhecimento para transformar vidas e negócios. Autodidata em neurociência e psicologia voltada a vendas, acredito que o sucesso só tem valor real quando está alinhado ao propósito. Escrevi A Jornada do Propósito para ajudar quem sente que falta algo, mesmo em meio às conquistas. É um guia para silenciar o caos externo e ouvir o que realmente importa, unindo reflexão e ferramentas práticas para criar uma vida com mais clareza e significado. À frente da minha agência de marketing, tive a honra junto com meus parceiros de ajudar clientes a faturarem múltiplos 6 dígitos em dois anos, além de atuar com intermediação de contratos, treinamento de vendas e como Closer Digital. Meu objetivo é sempre o mesmo: abrir caminhos para que pessoas e empresas vivam com mais liberdade e propósito.",
      name: "Kauhan",
      designation: "Autor, Empresário e Fundador da Comunidade KAOS",
      src: "/kaun.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
