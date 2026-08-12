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
          Błękitna flaga na froncie. Od zaawansowanej logistyki po ciężkie
          uderzenia pancerne –{" "}
          <strong className="font-bold text-white">
            budujemy potęgę Wardenów.
          </strong>
        </p>

        {/* 4. Przyciski z nowymi animacjami najechania */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a
            href="https://discord.gg/uWAtn5mpuv"
            className="group relative px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

            {/* Dodaliśmy flex, items-center i gap-3 aby ładnie ułożyć ikonę i tekst w jednej linii */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Dołącz do nas
            </span>
          </a>
          <a
            href="#"
            className="hidden px-8 py-4 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 text-white font-bold uppercase tracking-widest transition-all duration-300 border border-zinc-700 hover:border-zinc-500 hover:scale-105"
          >
            Obejrzyj Wideo
          </a>
        </div>
      </div>
    </section>
  );
}
