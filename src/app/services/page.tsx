"use client";

import { useSpring, animated, config } from "react-spring";
import { Separator } from "@/components/ui/separator";
import { UtensilsCrossed, PartyPopper, Cake, Wine } from "lucide-react";

const services = [
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary mb-2" />,
    title: "Фуршеты и банкеты",
    desc: "Организация стильных фуршетов, банкетов и корпоративных мероприятий под ключ.",
  },
  {
    icon: <PartyPopper className="w-8 h-8 text-primary mb-2" />,
    title: "Праздники и дни рождения",
    desc: "Яркое меню и оформление для детских и взрослых праздников, дней рождения, юбилеев.",
  },
  {
    icon: <Cake className="w-8 h-8 text-primary mb-2" />,
    title: "Свадебный кейтеринг",
    desc: "Изысканные блюда и сервис для свадебных торжеств любого масштаба.",
  },
  {
    icon: <Wine className="w-8 h-8 text-primary mb-2" />,
    title: "Кофе-брейки и фуршеты",
    desc: "Премиальные кофе-брейки, деловые встречи, презентации и конференции.",
  },
];

export default function ServicesPage() {
  const descSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 200,
  });
  const cardSprings = services.map((_, i) =>
    useSpring({
      from: { opacity: 0, transform: "translateY(40px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      config: config.gentle,
      delay: 400 + i * 200,
    })
  );

  return (
    <section className="py-12 max-w-4xl mx-auto">
      <animated.h1 style={descSpring} className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Наши услуги
      </animated.h1>
      <animated.p style={descSpring} className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Мы предлагаем полный спектр кейтеринговых услуг для любых событий: от камерных вечеринок до масштабных корпоративных мероприятий. Индивидуальный подход, авторское меню и безупречный сервис — основа нашей работы.
      </animated.p>
      <Separator className="mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <animated.div
            key={service.title}
            style={cardSprings[i]}
            className="flex flex-col items-center text-center gap-2 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1"
          >
            {service.icon}
            <span className="font-semibold text-lg">{service.title}</span>
            <span className="text-sm text-gray-500">{service.desc}</span>
          </animated.div>
        ))}
      </div>
    </section>
  );
} 