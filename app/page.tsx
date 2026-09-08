import Confetti from "./components/Confetti";

const GOOGLE_FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0N1OBh0L_OORPgG_sFZD8OiLGxs1XWtDQg6A0QiGzjRjs3Q/viewform";
const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_VIEW_URL}?embedded=true`;

const MUESTRAS = [
  { src: "/samples/writing.jpg", alt: "Hoja de escritura con letras ABC", rotate: "-rotate-6" },
  { src: "/samples/coloring.jpg", alt: "Dibujo de gallo y gallina para colorear", rotate: "rotate-3" },
  { src: "/samples/maze-simple.jpg", alt: "Laberinto sencillo", rotate: "-rotate-2" },
  { src: "/samples/maze-complex.jpg", alt: "Laberinto más complejo", rotate: "rotate-6" },
  { src: "/samples/matching.jpg", alt: "Juego de emparejar formas", rotate: "-rotate-3" },
  { src: "/samples/counting.jpg", alt: "Juego de contar", rotate: "rotate-2" },
  { src: "/samples/color-by-number.jpg", alt: "Colorea por números", rotate: "rotate-4" },
  { src: "/samples/reward-chart.jpg", alt: "Tabla de recompensas semanal", rotate: "-rotate-4" },
  { src: "/samples/shapes.jpg", alt: "Hoja de trazado de formas geométricas", rotate: "rotate-2" },
  { src: "/samples/sight-words.jpg", alt: "Hoja de palabras de uso frecuente", rotate: "-rotate-5" },
  { src: "/samples/emotions.jpg", alt: "Actividad de identificar emociones", rotate: "rotate-5" },
  { src: "/samples/puzzle.jpg", alt: "Rompecabezas para recortar y armar", rotate: "-rotate-2" },
];

const BENEFICIOS = [
  {
    emoji: "🎨",
    titulo: "Colorear",
    texto: "Dibujos, colorea por números y pinta con puntos para todas las edades.",
  },
  {
    emoji: "✏️",
    titulo: "Hojas de trabajo y aprendizaje",
    texto: "Letras, números, formas, lectura, trazado y palabras de uso frecuente.",
  },
  {
    emoji: "🧩",
    titulo: "Juegos y rompecabezas",
    texto: "Laberintos, emparejar, rompecabezas y juegos de roles.",
  },
  {
    emoji: "🌟",
    titulo: "Organización y hábitos",
    texto: "Tablas de recompensas, responsabilidades y rutinas para toda la familia.",
  },
];

const DISPOSITIVOS = [
  { emoji: "📱", texto: "Celular" },
  { emoji: "📲", texto: "Tablet" },
  { emoji: "💻", texto: "Computadora" },
  { emoji: "🖨️", texto: "Impresora" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-night">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-14 text-center">
        <Confetti />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span className="rounded-full bg-mint px-5 py-2 font-body text-sm font-extrabold text-night">
            Más de 25,000 páginas educativas listas para imprimir
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight text-cream sm:text-6xl">
            Biblioteca <span className="text-gold">Infantil</span>
          </h1>
          <p className="mt-3 font-display text-2xl text-bubblegum">
            La completa, en un solo archivo
          </p>
          <p className="mt-5 max-w-xl font-body text-lg text-cream/90">
            Aprende, juega, crea y diviértete: cuentos, letras, números,
            colorear, laberintos y juegos de lógica para que tu hijo pase
            horas aprendiendo sin pantallas de por medio.
          </p>
          <a
            href="#comprar"
            className="focus-ring mt-8 rounded-full bg-gold px-10 py-4 font-display text-xl font-bold text-night shadow-lg transition hover:brightness-105"
          >
            Quiero mi biblioteca por $49
          </a>
        </div>
      </section>

      {/* NÚMERO GIGANTE */}
      <section className="border-y-4 border-dashed border-grape/60 bg-night2 px-6 py-12 text-center">
        <p className="font-display text-7xl font-extrabold text-gold sm:text-8xl">
          25,000
        </p>
        <p className="mt-1 font-display text-2xl font-bold tracking-wide text-cream">
          páginas de contenido
        </p>
        <p className="mt-4 font-body text-cream/80">
          Más de 12 GB de material educativo listo para descargar e imprimir
          en cualquier momento, desde cualquier dispositivo.
        </p>
      </section>

      {/* MUESTRAS - escritorio regado */}
      <section className="px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          Así se ven algunas hojas de la biblioteca
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {MUESTRAS.map((m) => (
            <div
              key={m.src}
              className={`paper-texture rounded-xl bg-cream p-2 shadow-xl ${m.rotate} transition hover:rotate-0 hover:scale-105`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.src}
                alt={m.alt}
                className="aspect-square w-full rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-night2 px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          ¿Qué encontrarás dentro?
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b) => (
            <div
              key={b.titulo}
              className="rounded-2xl bg-night px-5 py-6 text-center shadow-md"
            >
              <span className="text-4xl">{b.emoji}</span>
              <p className="mt-3 font-display text-lg font-bold text-gold">
                {b.titulo}
              </p>
              <p className="mt-2 font-body text-sm text-cream/80">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PDF EN CUALQUIER DISPOSITIVO */}
      <section className="px-6 py-16 text-center">
        <span className="rounded-full bg-bubblegum px-5 py-2 font-display font-bold text-cream">
          PDF listo para imprimir
        </span>
        <p className="mx-auto mt-4 max-w-lg font-body text-cream/90">
          Descárgalo una sola vez y úsalo en cualquier momento, desde el
          dispositivo que tengas a la mano.
        </p>
        <div className="mx-auto mt-8 flex max-w-md justify-between">
          {DISPOSITIVOS.map((d) => (
            <div key={d.texto} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{d.emoji}</span>
              <span className="font-body text-sm text-cream/70">{d.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIO */}
      <section id="comprar" className="bg-night2 px-6 py-16 text-center">
        <p className="font-display text-xl font-bold text-cream/80">
          Oferta de lanzamiento
        </p>
        <p className="mt-2 font-display text-8xl font-extrabold text-gold">
          $49
        </p>
        <p className="font-display text-xl font-bold text-cream">
          pesos, pago único
        </p>
        <p className="mx-auto mt-4 max-w-md font-body text-cream/80">
          En vez de comprar libros y actividades por separado, aquí tienes
          todo reunido en una sola biblioteca gigante y de altísima calidad.
        </p>
      </section>

      {/* CÓMO COMPRAR */}
      <section className="px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          ¿Cómo la consigo?
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-night2 p-6 text-center">
            <span className="font-display text-3xl font-extrabold text-mint">1</span>
            <p className="mt-2 font-body text-cream/90">
              Transfiere $49 pesos a la cuenta de abajo.
            </p>
          </div>
          <div className="rounded-2xl bg-night2 p-6 text-center">
            <span className="font-display text-3xl font-extrabold text-mint">2</span>
            <p className="mt-2 font-body text-cream/90">
              Sube la foto de tu comprobante en el formulario.
            </p>
          </div>
          <div className="rounded-2xl bg-night2 p-6 text-center">
            <span className="font-display text-3xl font-extrabold text-mint">3</span>
            <p className="mt-2 font-body text-cream/90">
              Recibe tu acceso por WhatsApp o correo en menos de 24 horas.
            </p>
          </div>
        </div>

        {/* DATOS DE TRANSFERENCIA */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-dashed border-gold bg-night2 p-6 text-center">
          <p className="font-display text-lg font-bold text-gold">
            Datos para transferencia — BanCoppel
          </p>
          <p className="mt-2 font-body text-cream/90">
            Beneficiario: <strong>Hello Mundo</strong>
          </p>
          <p className="mt-1 font-body text-cream/90">
            CLABE / Número de cuenta:{" "}
            <strong className="text-bubblegum">4169 1607 0957 6624</strong>
          </p>
        </div>
      </section>

      {/* FORMULARIO (Google Forms embebido) */}
      <section className="bg-night2 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center font-display text-3xl font-bold text-cream">
            Envía tu comprobante aquí
          </h2>
          <p className="mt-2 text-center font-body text-cream/70">
            Llena tus datos y sube la foto de tu transferencia. Te
            contactaremos por WhatsApp o correo en menos de 24 horas.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl bg-cream shadow-xl">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Formulario de comprobante de pago"
              className="h-[900px] w-full"
              loading="lazy"
            >
              Cargando…
            </iframe>
          </div>
          <p className="mt-4 text-center font-body text-sm text-cream/60">
            ¿No se ve bien el formulario?{" "}
            <a
              href={GOOGLE_FORM_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold underline-offset-2 hover:text-gold"
            >
              Ábrelo en una pestaña nueva
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-body text-sm text-cream/50">
        Hello Mundo — Biblioteca Infantil © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
