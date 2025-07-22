"use client";

import { useSpring, animated, config } from "react-spring";
import { Separator } from "@/components/ui/separator";

const galleryItems = Array.from({ length: 8 });

export default function GalleryPage() {
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
    <section className="py-12 max-w-5xl mx-auto">
      <animated.h1 style={titleSpring} className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Галерея
      </animated.h1>
      <Separator className="mb-10" />
      <animated.div style={gridSpring} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryItems.map((_, i) => (
          <animated.div
            key={i}
            style={useSpring({
              from: { opacity: 0, transform: "scale(0.95)" },
              to: { opacity: 1, transform: "scale(1)" },
              config: config.gentle,
              delay: 500 + i * 100,
            })}
            className="aspect-[4/3] bg-gradient-to-tr from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center text-gray-500 text-lg font-semibold opacity-60 select-none shadow-md hover:shadow-xl transition-shadow"
          >
            [Фото {i + 1}]
          </animated.div>
        ))}
      </animated.div>
    </section>
  );
} 