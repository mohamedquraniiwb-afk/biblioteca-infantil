import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Biblioteca Infantil — 25,000 páginas por $49",
  description:
    "Más de 25,000 páginas educativas: colorear, laberintos, letras, números y juegos. Todo en un solo archivo PDF listo para imprimir, por $49 pesos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${baloo.variable} ${nunito.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
