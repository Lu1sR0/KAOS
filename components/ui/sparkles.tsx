'use client';

import { useEffect, useId, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  direction?: "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "inside" | "outside"; // Adicionando os tipos válidos para direction
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  mousemove?: boolean;
  hover?: boolean;
  background?: string;
  options?: Record<string, unknown>;
}

export function Sparkles({
  className,
  size = 1.2,
  minSize = null,
  density = 800,
  speed = 1.5,
  minSpeed = null,
  opacity = 2,
  direction = 'top', // Defina um valor padrão válido para direction
  opacitySpeed = 3,
  minOpacity = null,
  color = '#ffffff',
  mousemove = false,
  hover = false,
  background = 'transparent',
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false);
  const id = useId();

  const defaultOptions = (
    background: string,
    hover: boolean,
    mousemove: boolean,
    color: string,
    opacity: number,
    opacitySpeed: number,
    speed: number,
    minSpeed: number | null,
    size: number,
    minSize: number | null,
    density: number,
    direction: "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "inside" | "outside", // Tipando direction corretamente
    minOpacity: number | null
  ) => ({
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 300,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: hover,
          mode: 'grab',
          parallax: {
            enable: mousemove,
            force: 60,
            smooth: 10,
          },
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction, // Direção agora deve ser um valor válido
        speed: {
          min: minSpeed || speed / 130,
          max: speed,
        },
        straight: true,
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: 'bounce' as 'bounce' | 'absorb' | 'destroy',
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 1.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const mergedOptions = { ...defaultOptions(background, hover, mousemove, color, opacity, opacitySpeed, speed, minSpeed, size, minSize, density, direction, minOpacity), ...options };

  return (
    isReady && <Particles id={id} options={mergedOptions} className={className} />
  );
}
