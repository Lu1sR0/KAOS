"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
        name: "Venda feita",
        description: "Grupo Kaos",
        time: "15m ",
        icon: "💰",
        color: "#00C9A7",
    },
    {
        name: "Nova conexão criada",
        description: "Grupo Kaos",
        time: "10m ",
        icon: "🔗",
        color: "#FFB800",
    },
    {
        name: "Uma pessoa te indicou",
        description: "Grupo Kaos",
        time: "5m ",
        icon: "👍",
        color: "#FF3D71",
    },
    {
        name: "Novo evento",
        description: "Grupo Kaos",
        time: "2m ",
        icon: "🗓️",
        color: "#1E86FF",
    },
    {
        name: "Mensagem recebida",
        description: "Grupo Kaos",
        time: "1m ",
        icon: "📩",
        color: "#FF5733",
    },
    {
        name: "Novo comentário",
        description: "Grupo Kaos",
        time: "2h ",
        icon: "💬",
        color: "#6C757D",
    },
    {
        name: "Reunião agendada",
        description: "Grupo Kaos",
        time: "3h ",
        icon: "📅",
        color: "#007BFF",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-6 ",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
