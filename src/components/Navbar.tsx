import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Lewa strona: Logo i Nazwa */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12">
            <Image 
              src="/images/3dywizjalogo.png" 
              alt="Logo 3. Dywizja" 
              fill 
              className="object-contain group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="text-white font-black text-xl tracking-widest uppercase hidden sm:block">
            3. <span className="text-blue-600">Dywizja</span>
          </span>
        </Link>

        {/* Prawa strona: Linki */}
        <nav className="flex items-center gap-6 md:gap-10">
          <Link 
            href="/" 
            className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-colors"
          >
            Baza
          </Link>
          <Link 
            href="/historia" 
            className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            Archiwum <span className="hidden md:inline text-xs bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-700">Holdfast</span>
          </Link>
          
          {/* Przycisk Discord (na razie jako atrapa, potem wkleisz swój link) */}
          <a 
            href="#" 
            className="hidden md:inline-flex px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-widest transition-all border border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            Discord
          </a>
        </nav>

      </div>
    </header>
  );
}