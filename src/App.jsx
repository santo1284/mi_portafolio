import { useState } from 'react'
import react from "./assets/react.png"
import './App.css'
import mifoto from './assets/mifoto.jpg'
import kotlin from './assets/kotlin.jpg'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/js.png'
import laravel from './assets/Laravel.svg.png'
import github from './assets/github.png'
import sinde from "./assets/sinde.png"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg py-6 px-10 flex justify-around items-center animate-fade-in">
        <img
          src={mifoto}
          alt="Foto de Santiago"
          className="w-32 h-32 object-cover rounded-full shadow-[5px_5px_15px_0_rgba(233,226,68,0.7)] hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Santiago Calderón Lara</h1>
          <p className="text-gray-500 mt-1 text-lg">Desarrollador Full Stack</p>
        </div>
      </header>

      <main className="flex-grow px-10 py-12 space-y-16">
        <section className="animate-slide-up flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre mí</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
            Soy un desarrollador apasionado por la tecnología, con experiencia tanto
             en frontend como backend. Me especializo en crear soluciones modernas 
             utilizando herramientas como React, Kotlin, y Laravel. Soy una persona 
             autodidacta, colaborativa y en constante evolución. Me gusta trabajar
              en equipo, compartir conocimientos y mantenerme actualizado con las
               últimas tecnologías. En mi tiempo libre disfruto de la música, la
                lectura y participar en comunidades de desarrollo.
          </p>
        </section>

        {/* Tecnologías */}
        <section className="animate-slide-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tecnologías que utilizo</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              { name: 'React', logo: react, url: 'https://react.dev/' },
              { name: 'Kotlin', logo: kotlin, url: 'https://kotlinlang.org/' },
              { name: 'HTML', logo: html, url: 'https://lenguajehtml.com/' },
              { name: 'CSS', logo: css, url: 'https://www.w3schools.com/css/' },
              { name: 'JavaScript', logo: javascript, url: 'https://lenguajejs.com/' },
              { name: 'Laravel', logo: laravel, url: 'https://laravel.com/' },
              { name: 'GitHub', logo: github, url: 'https://github.com/' },
            ].map((tech) => (
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                key={tech.name}
                className="bg-white rounded-2xl shadow-md py-6 px-4 hover:shadow-xl transition duration-300 flex flex-col items-center transform hover:scale-105"
              >
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section className="animate-slide-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Mis Proyectos</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:flex items-center gap-6 hover:shadow-xl transition">
            <img src={sinde} alt="SINDESPARCHES" className="w-64 rounded-xl" />
            <div className="mt-4 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-800">SINDESPARCHES</h3>
              <p className="text-gray-600 mt-2 max-w-xl">
                Aplicación móvil enfocada en permitir a personas, empresas u organizaciones publicar y promocionar actividades sociales, culturales, deportivas y recreativas. Sinde busca facilitar la conexión con el entorno y fomentar la participación comunitaria de forma accesible.
              </p>
              <a
                href="https://github.com/santo1284/SINDE.git"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                target="_blank"
              >
                Ver repositorio en GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 px-10 mt-auto animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <p className="font-semibold text-lg">Santiago Calderón Lara</p>
            <p className="text-sm text-gray-400">Desarrollador Full Stack</p>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Email: <a href="mailto:santiagocalderonlara12@gmail.com" className="hover:underline">santiagocalderonlara12@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/santo1284" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/santo1284</a></p>
            <p>WhatsApp: <a href="https://wa.me/573142988853" target="_blank" rel="noopener noreferrer" className="hover:underline">314 298 8853</a></p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Santiago Calderón Lara. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
