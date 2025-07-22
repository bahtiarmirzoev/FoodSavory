"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, UtensilsCrossed, Users, Phone } from "lucide-react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // Анимация баннера
  const bannerSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 100,
  });
  // Анимация заголовка
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 400,
  });
  // Анимация описания
  const descSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 600,
  });
  // Анимация кнопки
  const btnSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.wobbly,
    delay: 800,
  });

  // Для анимации карточек преимуществ при появлении в зоне видимости
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const cardSprings = [0, 1, 2, 3].map((i) =>
    useSpring({
      from: { opacity: 0, transform: "translateY(40px)" },
      to: inView
        ? { opacity: 1, transform: "translateY(0)" }
        : { opacity: 0, transform: "translateY(40px)" },
      config: config.gentle,
      delay: 200 + i * 150,
    })
  );

  return (
    <>
      {/* Баннер с фото-заглушкой и анимацией */}
      <section className="flex flex-col items-center justify-center text-center py-16 gap-6 relative">
        <animated.div style={bannerSpring} className="w-full max-w-3xl h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl mb-6 relative flex items-center justify-center bg-gradient-to-tr from-gray-200 to-gray-400">
          <span className="text-gray-500 text-2xl md:text-3xl font-semibold opacity-60 select-none">
            [Здесь будет фото баннера]
          </span>
        </animated.div>
        <animated.h1 style={titleSpring} className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Food Savory
        </animated.h1>
        <animated.p style={descSpring} className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-2">
          Современный кейтеринг для ярких событий в Баку
        </animated.p>
        <animated.div style={btnSpring}>
          <Button size="lg" className="mt-2 shadow-lg hover:scale-105 transition-transform">
            Связаться с нами
          </Button>
        </animated.div>
      </section>

      {/* Преимущества с анимацией */}
      <section ref={ref} className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-2xl font-bold text-center mb-12">
          Почему выбирают нас?
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12 text-primary mb-2" />,
                title: "Современный подход",
                desc: "Трендовые блюда и стильная подача",
              },
              {
                icon: <UtensilsCrossed className="w-12 h-12 text-primary mb-2" />,
                title: "Авторское меню",
                desc: "Индивидуальные решения под ваш вкус",
              },
              {
                icon: <Users className="w-12 h-12 text-primary mb-2" />,
                title: "Профессиональная команда",
                desc: "Опытные повара и сервис",
              },
              {
                icon: <Phone className="w-12 h-12 text-primary mb-2" />,
                title: "Быстрая связь",
                desc: "Оперативные консультации и поддержка",
              },
            ].map((item, i) => (
              <animated.div
                key={item.title}
                style={cardSprings[i]}
                className="flex flex-col items-center text-center gap-2 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1"
              >
                {item.icon}
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="text-sm text-gray-500">{item.desc}</span>
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}