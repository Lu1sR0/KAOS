import Image from 'next/image';

type Person = {
  name: string;
  story: string;
  image: string;
};

const people: Person[] = [
  {
    name: 'Helena',
    story: 'Helena, formada em Design Estratégico, atua em comunicação e marketing há dois anos. Especialista em estratégias digitais, já desenvolveu 20+ projetos usando storytelling, análise e conteúdo estratégico para fortalecer marcas online. Reconhecida por sua abordagem inovadora, transforma desafios em oportunidades no mercado digital.',
    image: '/helena.JPEG',
  },
  {
    name: 'Kauhan',
    story: 'Kauhan é autor, empresário e fundador da Comunidade KAOS. Autodidata em neurociência e psicologia de vendas, escreveu A Jornada do Propósito para ajudar quem busca mais significado. À frente de sua agência, impulsionou clientes a múltiplos 6 dígitos, atuando em marketing, vendas e intermediação de contratos. Seu foco é abrir caminhos para uma vida com mais liberdade e propósito.',
    image: '/kaun.JPG',
  },
  {
    name: 'João C. Sollatori',
    story: 'João C. Sollatori desafiou convenções desde os 16 anos, quando começou sua jornada em vendas. Liderou a criação de mais de 5 negócios sólidos e foi peça-chave na otimização e escalabilidade de mais de 7 empresas, impondo ordem no caos com estratégias que aliam precisão e impacto. Transformar negócios em causas é sua marca: lucro é consequência, mas a revolução é o objetivo.',
    image: '/joao.jpg',
  }
];

export default function HistorySection() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-6xl font-extrabold text-[#ff0000] text-center mb-20 uppercase tracking-wider drop-shadow-lg">
          Criadores do KAOS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {people.map((person, index) => (
            <div 
              key={index} 
              className="relative p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center transition transform hover:shadow-red-500/50 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                <Image src={person.image} alt={person.name} width={176} height={176} />
              </div>
              <h3 className="text-3xl font-semibold text-[#ff0000] mt-6 uppercase tracking-wide">{person.name}</h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed max-w-xs text-justify">{person.story}</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#ff0000] mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}