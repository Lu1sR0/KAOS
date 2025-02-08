import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "Esse grupo de networking de marketing digital é incrível. Aprendi muito!",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Ana",
    username: "@ana",
    body: "As dicas e estratégias compartilhadas aqui são valiosas. Recomendo a todos.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Nunca vi um grupo tão engajado e disposto a ajudar. Fantástico!",
    img: "https://avatar.vercel.sh/pedro",
  },
  {
    name: "Mariana",
    username: "@mariana",
    body: "Estou impressionada com a qualidade das discussões e insights. Muito bom!",
    img: "https://avatar.vercel.sh/mariana",
  },
  {
    name: "João",
    username: "@joao",
    body: "O networking aqui é de altíssimo nível. Fiz ótimos contatos.",
    img: "https://avatar.vercel.sh/joao",
  },
  {
    name: "Fernanda",
    username: "@fernanda",
    body: "As estratégias de marketing digital que aprendi aqui são incríveis. Adorei!",
    img: "https://avatar.vercel.sh/fernanda",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "O grupo é muito acolhedor e sempre disposto a ajudar. Excelente experiência!",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Beatriz",
    username: "@beatriz",
    body: "As discussões são sempre muito produtivas e enriquecedoras. Recomendo!",
    img: "https://avatar.vercel.sh/beatriz",
  },
  {
    name: "Ricardo",
    username: "@ricardo",
    body: "Aprendi muitas estratégias novas que já estou aplicando no meu trabalho.",
    img: "https://avatar.vercel.sh/ricardo",
  },
  {
    name: "Sofia",
    username: "@sofia",
    body: "O grupo é fantástico! Fiz muitos contatos valiosos e aprendi muito.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Gabriel",
    username: "@gabriel",
    body: "As trocas de experiências são muito ricas e ajudam muito no dia a dia.",
    img: "https://avatar.vercel.sh/gabriel",
  },
  {
    name: "Laura",
    username: "@laura",
    body: "O grupo é muito engajado e sempre traz novidades e insights valiosos.",
    img: "https://avatar.vercel.sh/laura",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />{" "}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div
      id="testemunhos"
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Título centralizado */}
      <h2 className="mb-6 text-4xl  font-semibold text-gray-900 dark:text-white">
        Testemunhos
      </h2>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
