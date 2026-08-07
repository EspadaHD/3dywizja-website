import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-200 pt-32 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Przycisk powrotu */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-500 hover:text-blue-400 font-bold tracking-widest uppercase mb-12 transition-colors"
        >
          <span className="mr-2">←</span> Wróć na Front
        </Link>

        {/* Główny Nagłówek */}
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4">
            Historia w <span className="text-blue-600">Holdfast</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-3xl">
            Archiwum 3. Dywizji z czasów gry Holdfast: Nations At War. Zobacz, jak wyglądały nasze dawne struktury, mundury i organizacja.
          </p>
        </header>

        {/* Sekcja 1: Godło i Tawerna (Poprawiona) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-blue-600 pl-4">
              Czasy Pułku i Archiwa Forum
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Przez długie lata stanowiliśmy potężny i zorganizowany pułk na polach bitew. Pod naszym klasycznym godłem z orłem, budowaliśmy elitarną społeczność wokół dyscypliny i taktyki. Nasze zbiórki, awanse, strukturę i całą pułkową twórczość dokumentowaliśmy na znanym forum <strong className="text-zinc-200">Tawerna Four Ways</strong>, z którego pochodzą zebrane tu materiały.
            </p>
          </div>
          <div className="relative h-80 w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <Image src="/images/image_0f069c.jpg" alt="Dawne Godło 3. Dywizji" fill className="object-contain drop-shadow-2xl" />
          </div>
        </section>

        {/* Sekcja 2: Struktura Rang */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wider text-center">
            Drabinka <span className="text-blue-600">Rang</span>
          </h2>
          <div className="relative h-[500px] md:h-[700px] w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <Image src="/images/image_0f0681.jpg" alt="Struktura Rang Liniowych, Podoficerskich i Oficerskich" fill className="object-contain" />
          </div>
          <p className="text-center text-zinc-400 mt-6 font-light max-w-2xl mx-auto">
            Posiadaliśmy rygorystyczny i szczegółowy system awansów. Droga każdego rekruta prowadziła przez szczeble liniowe, z możliwością aplikacji do sztabu i pójścia ścieżką podoficerską, a następnie oficerską.
          </p>
        </section>

        {/* Sekcja 3: Formacje Wojskowe */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            Organizacja Armii
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pułki */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center">
              <div className="relative h-64 w-full mb-6">
                <Image src="/images/image_0f039c.jpg" alt="Emblematy Pułków" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Trzon Sił Zbrojnych</h3>
              <p className="text-zinc-400 text-center text-sm leading-relaxed">
                6. Pułk Ułanów Księstwa Warszawskiego, 3. Batalion Artylerii Pieszej oraz 12. Kompania Piechoty Lekkiej.
              </p>
            </div>

            {/* Oddziały Elitarne */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center">
              <div className="relative h-64 w-full mb-6">
                <Image src="/images/image_0f0397.jpg" alt="Oddziały Elitarne" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Oddziały Specjalne</h3>
              <p className="text-zinc-400 text-center text-sm leading-relaxed">
                Elitarna Kompania Grenadierska do przełamywania najcięższych linii wroga oraz wyspecjalizowana Kompania Marynarska.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja 4: Galeria Modeli (Mundury, Sztandar) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wider border-b border-zinc-800 pb-4">
            Galeria Pułkowa
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-72 bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden group">
              <Image src="/images/image_0f0667.jpg" alt="Mundur oficerski" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-72 bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden group">
              <Image src="/images/image_0f03bd.jpg" alt="Musztra piechoty" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-72 bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden group">
              <Image src="/images/image_0f03b7.jpg" alt="Zwiad i Kawaleria" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-72 bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden group">
              <Image src="/images/image_0f0663.jpg" alt="Sztandar 12. Piechoty" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}