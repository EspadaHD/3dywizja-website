import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  const galleryImages = Array.from(
    { length: 14 },
    (_, i) => `/images/historiaholdfast/${i + 1}.png`,
  );
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-200 pt-32 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Przycisk powrotu */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 font-bold tracking-widest uppercase mb-12 transition-colors"
        >
          <span className="mr-2">←</span> Wróć na stronę główną
        </Link>

        {/* Główny Nagłówek */}
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4">
            Historia naszego pułku w{" "}
            <span className="text-blue-600">Holdfast: Nations at War</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-3xl">
            Archiwum 3. Dywizji z czasów gry Holdfast: Nations At War. Zobacz,
            jak wyglądały nasze dawne struktury, mundury i organizacja.
          </p>
        </header>

        {/* Sekcja 1: Krótka historia pułku */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-blue-600 pl-4">
              Placeholder
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo massa id ante fringilla, ut accumsan felis mollis. In et
              mattis lectus. Maecenas mattis ante placerat tincidunt placerat.
              Curabitur suscipit magna sed massa euismod, vitae tempor enim
              convallis. Cras at lorem in nisl pulvinar ullamcorper id at ipsum.
              Vivamus orci mi, fringilla nec auctor condimentum, convallis vitae
              mauris. Morbi eros sapien, ornare quis ultrices eget, semper at
              lectus. Ut vehicula, ipsum a sollicitudin venenatis, dui arcu
              tempor ex, nec euismod dui mi et sem. Curabitur auctor posuere
              placerat. Suspendisse ultricies mauris arcu, et finibus mi
              condimentum quis.{" "}
              <strong className="text-zinc-200">
                Curabitur enim nunc, commodo at nibh vel, ullamcorper viverra
                turpis.
              </strong>
            </p>
          </div>
          <div className="relative aspect-square w-full max-w-sm mx-auto bg-zinc-900/50 rounded-lg p-4">
            <Image
              src="/images/historiaholdfast/flaga12pp.jpg"
              alt="Flaga 12 pułku piechoty"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Sekcja 2: Stopnie */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wider text-center">
            Drabinka <span className="text-blue-600">Rang</span>
          </h2>
          <div className="relative h-125 md:h-175 w-full max-w-4xl mx-auto bg-zinc-900 rounded-lg p-4">
            <Image
              src="/images/historiaholdfast/rangi.png"
              alt="Struktura Rang Liniowych, Podoficerskich i Oficerskich"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-zinc-400 mt-6 font-light max-w-2xl mx-auto">
            Posiadaliśmy szczegółowy system awansów. Droga każdego rekruta
            prowadziła przez szczeble liniowe, z możliwością wstąpienia do Kadry
            Oficerskiej i pójścia ścieżką podoficerską, a następnie oficerską.
          </p>
        </section>

        {/* Sekcja 3: Organizacja */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            Organizacja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pułki */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center">
              <div className="relative h-64 w-full mb-6">
                <Image
                  src="/images/historiaholdfast/kompanieglowne.png"
                  alt="Główne Kompanie"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">
                Główne kompanie 3. Dywizji
              </h3>
              <p className="text-zinc-400 text-center text-sm leading-relaxed">
                6. Pułk Ułanów Księstwa Warszawskiego, 3. Batalion Artylerii
                Pieszej oraz 12. Kompania Piechoty Lekkiej.
              </p>
            </div>

            {/* Quasi Kompanie */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center">
              <div className="relative h-64 w-full mb-6">
                <Image
                  src="/images/historiaholdfast/quasikompanie.png"
                  alt="Quasi Kompanie"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">
                Quasi kompanie
              </h3>
              <p className="text-zinc-400 text-center text-sm leading-relaxed">
                Kompania Grenadierska (Kompania "melee"), Kompania Marynarska,
                Kompania Reprezentacyjna.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja 4: Galeria screenów */}
        <section className="mb-12">
          <div className="mb-12 border-b border-zinc-800 pb-4">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
              Galeria Pułkowa
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={src}
                  alt={`Zrzut ekranu z gry Holdfast ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
