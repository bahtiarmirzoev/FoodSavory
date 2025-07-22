"use client";
import { useSpring, animated, config } from "react-spring";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const missionSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 200,
  });
  const valuesSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 500,
  });
  const photoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.gentle,
    delay: 800,
  });

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <animated.h1 style={missionSpring} className="text-3xl md:text-4xl font-bold mb-6 text-center">
        О нас
      </animated.h1>
      <animated.div style={missionSpring} className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Миссия</h2>
        <p className="text-gray-700">
          Мы создаём атмосферу праздника и уюта на каждом событии, сочетая современные гастрономические тренды с индивидуальным подходом к каждому клиенту.
        </p>
      </animated.div>
      <Separator className="mb-8" />
      <animated.div style={valuesSpring} className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Наши ценности</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Креативность и инновации</li>
          <li>Высокое качество ингредиентов</li>
          <li>Профессионализм и забота о гостях</li>
          <li>Честность и открытость</li>
        </ul>
      </animated.div>
      <Separator className="mb-8" />
      <animated.div style={photoSpring} className="w-full h-56 md:h-80 bg-gradient-to-tr from-gray-200 to-gray-400 rounded-3xl flex items-center justify-center text-gray-500 text-2xl font-semibold opacity-60 select-none">
        [Здесь будет фото команды]
      </animated.div>
    </section>
  );
} 