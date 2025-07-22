import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-10 pb-6 border-t bg-white/80 backdrop-blur mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold">Food Savory</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Позвонить">
            <Phone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Почта">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
        <Button variant="outline" size="sm" className="hidden md:inline-flex">Связаться</Button>
      </div>
      <Separator className="my-4" />
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Food Savory. Все права защищены.
      </div>
    </footer>
  );
} 