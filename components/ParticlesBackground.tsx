"use client";

import { useEffect, useMemo } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: "transparent" } },
      fpsLimit: 90,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: 0.35 },
          },
        },
      },
      particles: {
        color: {
          value: ["#00f0ff", "#a78bfa", "#ff6bcb", "#7dd3fc"],
        },
        links: {
          color: "#a78bfa",
          distance: 160,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 90,
        },
        opacity: {
          random: { enable: true, minimumValue: 0.1 },
          value: { min: 0.1, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: { type: "circle" },
        size: {
          random: { enable: true, minimumValue: 0.8 },
          value: { min: 0.8, max: 3.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}
