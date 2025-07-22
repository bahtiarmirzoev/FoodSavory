"use client";

import { useSpring, animated, config } from "react-spring";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    name: "Алиса К.",
    text: "Всё было очень вкусно и красиво! Команда Food Savory — настоящие профессионалы, праздник удался на 100%.",
  },
  {
    name: "Илья М.",
    text: "Отличный сервис, быстрое реагирование и индивидуальный подход. Рекомендую!",
  },
  {
    name: "Сабина Р.",
    text: "Гости были в восторге от подачи и вкуса блюд. Спасибо за атмосферу и заботу!",
  },
  {
    name: "Эмин А.",
    text: "Организация на высшем уровне, всё чётко и без задержек. Будем обращаться ещё!",
  },
];

export default function ReviewsPage() {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 200,
  });
  const gridSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.gentle,
    delay: 400,
  });

  return (
    <section className="py-12 max-w-4xl mx-auto">
      <animated.h1 style={titleSpring} className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Отзывы
      </animated.h1>
      <Separator className="mb-10" />
      <animated.div style={gridSpring} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reviews.map((review, i) => (
          <animated.div
            key={i}
            style={useSpring({
              from: { opacity: 0, transform: "scale(0.95)" },
              to: { opacity: 1, transform: "scale(1)" },
              config: config.gentle,
              delay: 500 + i * 150,
            })}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 flex items-center justify-center text-gray-500 text-xl font-bold mb-2 select-none">
              {review.name[0]}
            </div>
            <div className="font-semibold">{review.name}</div>
            <div className="text-gray-600 text-sm">{review.text}</div>
          </animated.div>
        ))}
      </animated.div>
    </section>
  );
} 