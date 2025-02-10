import Image from 'next/image';

type Person = {
  name: string;
  story: string;
  image: string;
};

const people: Person[] = [
  {
    name: 'Helena',
    story: 'Helena é formada em Design Estratégico e atua na área de comunicação e marketing. Com dois anos de experiência em estratégias digitais, dedica-se a criar soluções que impulsionam marcas no ambiente online. Ao longo de sua trajetória, já desenvolveu mais de 20 estratégias personalizadas, utilizando storytelling, análises, planejamento e conteúdo estratégico para construir conexões autênticas com o público. Reconhecida por sua abordagem inovadora, Helena compartilha conhecimentos práticos que transformam desafios em oportunidades no mercado digital.',
    image: '/helena.JPEG',
  },
  {
    name: 'Kauhan',
    story: 'Kauhan é autor, empresário e fundador da Comunidade KAOS. Apaixonado por entender o comportamento humano e aplicar esse conhecimento para transformar vidas e negócios. Autodidata em neurociência e psicologia voltada a vendas, acredita que o sucesso só tem valor real quando está alinhado ao propósito. Escreveu "A Jornada do Propósito" para ajudar quem sente que falta algo, mesmo em meio às conquistas. É um guia para silenciar o caos externo e ouvir o que realmente importa, unindo reflexão e ferramentas práticas para criar uma vida com mais clareza e significado. À frente da sua agência de marketing, ajudou clientes a faturarem múltiplos 6 dígitos em dois anos, além de atuar com intermediação de contratos, treinamento de vendas e como Closer Digital. Seu objetivo é sempre o mesmo: abrir caminhos para que pessoas e empresas vivam com mais liberdade e propósito.',
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
      <section className="relative py-24 text-white  overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-6xl font-extrabold text-[#ff0000] text-center mb-20 uppercase tracking-wider drop-shadow-lg">
           Criadores do KAOS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {people.map((person, index) => (
              <div 
                key={index} 
                className="relative  p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center transition transform hover:shadow-red-500/50 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                  <Image src={person.image} alt={person.name} width={176} height={176} />
                </div>
                <h3 className="text-3xl font-semibold text-[#ff0000] mt-6 uppercase tracking-wide">{person.name}</h3>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed max-w-xs">{person.story}</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#ff0000] mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }