"use client";

import { useSpring, animated, config } from "react-spring";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 200,
  });
  const formSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
    delay: 400,
  });
  const mapSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.gentle,
    delay: 700,
  });

  return (
    <section className="py-12 max-w-4xl mx-auto">
      <animated.h1 style={titleSpring} className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Контакты
      </animated.h1>
      <Separator className="mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Форма */}
        <animated.div style={formSpring}>
          <Card className="p-6">
            <CardContent className="p-0">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Ваше имя" required />
                <Input type="email" placeholder="Email" required />
                <Textarea placeholder="Сообщение" rows={4} required />
                <Button type="submit" className="mt-2">Отправить</Button>
              </form>
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@food-savory.az</div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +994 50 000 00 00</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Баку, Азербайджан</div>
              </div>
            </CardContent>
          </Card>
        </animated.div>
        {/* Карта-заглушка */}
        <animated.div style={mapSpring} className="w-full h-64 bg-gradient-to-tr from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center text-gray-500 text-lg font-semibold opacity-60 select-none shadow-md">
          [Здесь будет карта]
        </animated.div>
      </div>
    </section>
  );
} 