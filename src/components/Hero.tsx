import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Ulepszone tło z czołgiem */}
      <div className="absolute inset-0 z-0">
        {/* Lżejszy gradient zamiast czarnej plamy - lepiej widać czołg */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950 z-10" />
        <Image
          src="/images/hero-bg.png" 
          alt="Front Wardenów"
          fill
          className="object-cover object-center opacity-60 grayscale-30" 
          priority
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-12">
        
        {/* 2. Większe logo z dopasowaną poświatą */}
        <div className="w-56 h-56 md:w-72 md:h-72 mb-4 relative hover:scale-105 transition-transform duration-700">
          {/* Złota poświata z tyłu, która pasuje do liści na logo */}
          <div className="absolute inset-6 bg-amber-500/10 rounded-full blur-3xl z-0" /> 
          <Image
            src="/images/3dywizjalogo.png" 
            alt="Logo 3. Dywizja"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] relative z-10"
          />
        </div>

        {/* 3. Zmieniona typografia - czysta biel, żeby nie gryzła się z godłem */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-[0.2em] drop-shadow-2xl">
          3. Dywizja
        </h1>
        
        {/* Niebieski akcent Wardenów wyciągnięty do eleganckiej linii */}
        <div className="w-24 h-1 bg-blue-600 mb-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
        
        <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
          Błękitna flaga na froncie. Od zaawansowanej logistyki po ciężkie uderzenia pancerne – <strong className="font-bold text-white">budujemy potęgę Wardenów.</strong>
        </p>

        {/* 4. Przyciski z nowymi animacjami najechania */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a
            href="#"
            className="group relative px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10">Dołącz do nas</span>
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 text-white font-bold uppercase tracking-widest transition-all duration-300 border border-zinc-700 hover:border-zinc-500 hover:scale-105"
          >
            Obejrzyj Wideo
          </a>
        </div>
      </div>
    </section>
  );
}