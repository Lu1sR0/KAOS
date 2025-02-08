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
        "Essa solução melhorou significativamente a produtividade da nossa equipe. A interface intuitiva torna tarefas complexas simples.",
      name: "Kauhan",
      designation: "Autor, Empresário e Fundador da Comunidade KAOS",
      src: "/kaun.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
