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
            3. Dywizja
          </span>
        </Link>

        {/* Prawa strona: Nawigacja i Discord */}
        <nav className="flex items-center gap-6 md:gap-10">

          {/* Rozwijane Menu: Archiwum */}
          <div className="relative group py-6">
            {" "}
            {/* py-6 pozwala na płynne zjechanie myszką do menu */}
            <button className="text-sm font-bold text-zinc-300 group-hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
              Archiwum
              {/* Mała strzałka w dół */}
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Lista rozwijalna */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-zinc-900 border border-zinc-800 rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50">
              <Link
                href="/historia#os-czasu"
                className="px-6 py-4 text-sm font-bold text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors border-b border-zinc-800"
              >
                Oś Czasu (Wkrótce)
              </Link>
              <Link
                href="/historia"
                className="px-6 py-4 text-sm font-bold text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors border-b border-zinc-800"
              >
                Historia Holdfast: NaW
              </Link>
              <Link
                href="/historia#hala-chwaly"
                className="px-6 py-4 text-sm font-bold text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Hala Chwały (Wkrótce)
              </Link>
            </div>
          </div>

          {/* Przycisk Discord */}
          <a
            href="https://discord.gg/uWAtn5mpuv"
            className="text-zinc-400 hover:text-[#5865F2] hover:scale-110 transition-all duration-300"
            title="Dołącz na naszego Discorda"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
