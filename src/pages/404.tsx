import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      
      <div className="text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-comunicar-lavender to-comunicar-blue leading-none">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          ¡Ups! Página no encontrada
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-comunicar-lavender hover:bg-comunicar-lavender/90">
            Volver al inicio
          </Button>
        </Link>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-comunicar-yellow rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-comunicar-pink rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-comunicar-blue rounded-full opacity-20 animate-float animation-delay-4000"></div>
    </div>
  );
};

export default NotFound;