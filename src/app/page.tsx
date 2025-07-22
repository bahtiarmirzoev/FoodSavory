"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, UtensilsCrossed, Users, Phone, PartyPopper, Cake, Wine, Mail, MapPin } from "lucide-react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import Particles from "@tsparticles/react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaCrown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaSpotify, FaFacebook } from "react-icons/fa6";

export default function Home() {
  // Анимация баннера
  const bannerSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 100,
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
      {/* Баннер с анимированным фоном и WOW-анимацией */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 gap-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "#f8f5f2" } },
              fpsLimit: 60,
              particles: {
                color: { value: ["#e6b800", "#7c2a2a", "#fff8e1"] },
                links: { enable: true, color: "#e6b800", distance: 120, opacity: 0.2 },
                move: { enable: true, speed: 1 },
                number: { value: 30 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        </div>
        <animated.div style={bannerSpring} className="w-full max-w-3xl h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl mb-6 relative flex items-center justify-center bg-gradient-to-tr from-primary/80 to-accent/60 border-4 border-accent">
          <span className="text-accent text-4xl md:text-5xl font-bold flex items-center gap-2 select-none drop-shadow-lg">
            <FaCrown className="inline-block text-accent mr-2" />
            Food Savory
          </span>
        </animated.div>
        <Fade direction="up" triggerOnce>
          <h1 className="mb-2">Современный кейтеринг для ярких событий в Баку</h1>
        </Fade>
        <Slide direction="up" triggerOnce>
          <Button size="lg" className="mt-2 shadow-lg hover:scale-105 transition-transform bg-accent text-primary-foreground border-2 border-accent hover:bg-primary hover:text-accent-foreground">
            Связаться с нами
          </Button>
        </Slide>
      </section>

      {/* Преимущества с WOW-анимацией */}
      <section ref={ref} className="py-16 bg-gradient-to-b from-background to-card">
        <Fade cascade damping={0.2} triggerOnce>
          <h2 className="text-2xl font-bold text-center mb-12">Почему выбирают нас?</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Sparkles className="w-12 h-12 text-accent mb-2" />,
                  title: "Современный подход",
                  desc: "Трендовые блюда и стильная подача",
                },
                {
                  icon: <UtensilsCrossed className="w-12 h-12 text-accent mb-2" />,
                  title: "Авторское меню",
                  desc: "Индивидуальные решения под ваш вкус",
                },
                {
                  icon: <Users className="w-12 h-12 text-accent mb-2" />,
                  title: "Профессиональная команда",
                  desc: "Опытные повара и сервис",
                },
                {
                  icon: <Phone className="w-12 h-12 text-accent mb-2" />,
                  title: "Быстрая связь",
                  desc: "Оперативные консультации и поддержка",
                },
              ].map((item, i) => (
                <animated.div
                  key={item.title}
                  style={cardSprings[i]}
                  className="flex flex-col items-center text-center gap-2 bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1 border border-accent/20"
                >
                  {item.icon}
                  <span className="font-semibold text-lg">{item.title}</span>
                  <span className="text-sm text-gray-500">{item.desc}</span>
                </animated.div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      {/* О компании */}
      <section id="about" className="relative py-20 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto scroll-mt-24">
        <Fade direction="left" triggerOnce>
          <div className="flex-1 flex flex-col items-start justify-center gap-6">
            <h2 className="text-3xl font-bold mb-2">О Food Savory</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Food Savory — это современный кейтеринг для ярких событий в Баку. Мы создаём атмосферу праздника и уюта, сочетая гастрономические тренды с индивидуальным подходом. Наши ценности — креативность, качество, забота о гостях и честность.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-primary/80">
              <li>Авторское меню и стильная подача</li>
              <li>Премиальные ингредиенты</li>
              <li>Профессиональная команда</li>
              <li>Быстрая связь и поддержка</li>
            </ul>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="flex-1 flex items-center justify-center">
            {/* Иллюстрация-заглушка */}
            <div className="w-80 h-80 rounded-3xl bg-gradient-to-tr from-primary/80 to-accent/60 flex items-center justify-center shadow-2xl border-4 border-accent/30">
              <span className="text-5xl text-accent-foreground opacity-60 select-none">[SVG]</span>
            </div>
          </div>
        </Fade>
        {/* SVG-волна снизу */}
        <svg className="absolute left-0 -bottom-16 w-full h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#wave)" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" /><defs><linearGradient id="wave" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffaf7" /><stop offset="1" stopColor="#f8f5f2" /></linearGradient></defs></svg>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 max-w-6xl mx-auto scroll-mt-24">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-8">Наши услуги</h2>
          <p className="text-lg text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Мы предлагаем полный спектр кейтеринговых услуг для любых событий: от камерных вечеринок до масштабных корпоративных мероприятий. Индивидуальный подход, авторское меню и безупречный сервис — основа нашей работы.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <UtensilsCrossed className="w-10 h-10 text-accent mb-2" />,
                title: "Фуршеты и банкеты",
                desc: "Организация стильных фуршетов, банкетов и корпоративных мероприятий под ключ.",
              },
              {
                icon: <PartyPopper className="w-10 h-10 text-accent mb-2" />,
                title: "Праздники и дни рождения",
                desc: "Яркое меню и оформление для детских и взрослых праздников, дней рождения, юбилеев.",
              },
              {
                icon: <Cake className="w-10 h-10 text-accent mb-2" />,
                title: "Свадебный кейтеринг",
                desc: "Изысканные блюда и сервис для свадебных торжеств любого масштаба.",
              },
              {
                icon: <Wine className="w-10 h-10 text-accent mb-2" />,
                title: "Кофе-брейки и фуршеты",
                desc: "Премиальные кофе-брейки, деловые встречи, презентации и конференции.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="flex flex-col items-center text-center gap-2 bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1 border border-accent/20"
              >
                {service.icon}
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-sm text-gray-500">{service.desc}</span>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Партнёры (карусель) */}
      <section id="partners" className="relative py-20 flex flex-col items-center justify-center scroll-mt-24">
        <Fade direction="up" triggerOnce>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">Наши партнёры</h2>
            <p className="text-center text-muted-foreground mt-2 max-w-xl mx-auto">
              Нам доверяют ведущие компании и бренды. Мы гордимся сотрудничеством с лучшими:
            </p>
          </div>
        </Fade>
        <div className="w-full max-w-5xl">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            className="!pb-4"
          >
            {[
              { icon: <FaApple className="w-16 h-16 text-primary" />, name: "Apple" },
              { icon: <FaGoogle className="w-16 h-16 text-accent" />, name: "Google" },
              { icon: <FaAmazon className="w-16 h-16 text-primary" />, name: "Amazon" },
              { icon: <FaMicrosoft className="w-16 h-16 text-accent" />, name: "Microsoft" },
              { icon: <FaSpotify className="w-16 h-16 text-primary" />, name: "Spotify" },
              { icon: <FaFacebook className="w-16 h-16 text-accent" />, name: "Facebook" },
            ].map((partner, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center gap-2 bg-white/70 dark:bg-card/70 rounded-2xl shadow-md p-6 border border-accent/20 hover:scale-105 transition-transform">
                  {partner.icon}
                  <span className="text-base font-semibold text-primary/80 mt-2">{partner.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 max-w-6xl mx-auto scroll-mt-24">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-gray-500 text-lg font-semibold opacity-60 select-none shadow-md hover:shadow-xl transition-shadow border border-accent/10"
              >
                [Фото {i + 1}]
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* CTA секция */}
      <section className="relative py-20 flex flex-col items-center justify-center bg-gradient-to-tr from-accent/30 to-primary/10 rounded-3xl shadow-xl mx-2 md:mx-auto max-w-4xl mt-16">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-4">Закажите кейтеринг для вашего события</h2>
          <p className="text-lg text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и индивидуальное предложение от нашей команды. Мы сделаем ваш праздник незабываемым!
          </p>
          <a href="#contact" className="inline-block">
            <Button size="lg" className="px-10 py-4 text-lg font-bold bg-accent text-primary-foreground border-2 border-accent hover:bg-primary hover:text-accent-foreground shadow-lg transition-all duration-300">
              Оставить заявку
            </Button>
          </a>
        </Fade>
        {/* SVG-волна сверху */}
        <svg className="absolute left-0 -top-16 w-full h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#wave2)" d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z" /><defs><linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffaf7" /><stop offset="1" stopColor="#f8f5f2" /></linearGradient></defs></svg>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 max-w-4xl mx-auto scroll-mt-24">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-8">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Форма */}
            <div>
              <div className="bg-white/80 dark:bg-card/80 rounded-2xl shadow-md p-8 border border-accent/20">
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Ваше имя" required className="px-4 py-3 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent outline-none transition" />
                  <input type="email" placeholder="Email" required className="px-4 py-3 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent outline-none transition" />
                  <textarea placeholder="Сообщение" rows={4} required className="px-4 py-3 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent outline-none transition" />
                  <Button type="submit" className="mt-2 bg-accent text-primary-foreground border-2 border-accent hover:bg-primary hover:text-accent-foreground shadow-lg transition-all duration-300">
                    Отправить
                  </Button>
                </form>
                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@food-savory.az</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +994 50 000 00 00</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Баку, Азербайджан</div>
                </div>
              </div>
            </div>
            {/* Карта-заглушка */}
            <div className="w-full h-64 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-gray-500 text-lg font-semibold opacity-60 select-none shadow-md">
              [Здесь будет карта]
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}