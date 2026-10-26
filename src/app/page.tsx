"use client";
// src/app/page.tsx
import Navbar from '../components/Navbar';
import ProgramCard from '../components/ProgramCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      {/* HOME SECTION */}
      <section 
        id="home" 
        className="relative h-screen flex flex-col items-center justify-center border-b border-neutral-800 overflow-hidden"
      >
        {/* Fondo oscuro. En el futuro, aquí pondremos la foto de tu amigo */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-900 via-neutral-950 to-black -z-10"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase text-white drop-shadow-lg">
            Supera tus <span className="text-neutral-500">límites</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-2xl font-light">
            Entrenamiento presencial y rutinas especializadas. Descubre el método que te llevará al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#programs" 
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors text-center"
            >
              Ver Programas
            </a>
            <a 
              href="#about" 
              className="border border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center"
            >
              Conóceme
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section 
        id="about" 
        className="min-h-screen flex flex-col items-center justify-center border-b border-neutral-800 bg-neutral-900 py-24 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-widest text-center text-white">
          Sobre Mí
        </h2>
        
        {/* Historia del entrenador */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
            "Nací en un pequeño pueblo y empecé a entrenar a los 14 años. Nunca tuve un entrenador ni un gimnasio en condiciones, así que usé cualquier cosa que tuve a mano. Toda mi vida he sido mi propio entrenador y ahora quiero compartir mi experiencia y secretos contigo."
          </p>
        </div>

        {/* Cuadrícula de Estadísticas / Logros */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full px-4 text-center">
          
          <div className="p-8 bg-black/40 border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3">20K+</h3>
            <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest">
              Clientes en todo el mundo
            </p>
          </div>

          <div className="p-8 bg-black/40 border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3">10+</h3>
            <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest">
              Años de carrera
            </p>
          </div>

          <div className="p-8 bg-black/40 border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3">30M</h3>
            <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest">
              Seguidores
            </p>
          </div>

          <div className="p-8 bg-black/40 border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3">100%</h3>
            <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest">
              Garantía de Cambio
            </p>
          </div>

        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section 
        id="programs" 
        className="min-h-screen py-24 px-4 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-widest text-center text-white">
            Programas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              title="Men Workout" 
              duration="1-8 Semanas" 
              price="49€" 
              features={[
                "Programas de entrenamiento para gimnasio y casa[cite: 4]",
                "Guía de nutrición y cálculo de calorías[cite: 4]",
                "Entrenamiento de abdomen y core[cite: 4]",
                "Acceso durante 6 meses[cite: 4]"
              ]} 
            />
            <ProgramCard 
              title="Men Pro" 
              duration="8-16 Semanas" 
              price="59€" 
              features={[
                "Lecciones en vídeo con técnicas básicas[cite: 4]",
                "Plan de comidas con recetas[cite: 4]",
                "Programa avanzado de gimnasio de 8 semanas[cite: 4]",
                "Acceso durante 6 meses[cite: 4]"
              ]} 
            />
             <ProgramCard 
              title="Women Workout" 
              duration="1-8 Semanas" 
              price="49€" 
              features={[
                "Programa de entrenamiento para gimnasio o casa[cite: 4]",
                "Planes de comidas y nutrición[cite: 4]",
                "Guía de suplementos[cite: 4]",
                "Acceso durante 6 meses[cite: 4]"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section 
        id="faq" 
        className="min-h-screen py-24 px-4 border-b border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-widest text-center text-white">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            
            {/* Pregunta 1 */}
            <div className="bg-black/40 border border-neutral-800 p-8 rounded-xl hover:border-neutral-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">¿Me dan un plan de comidas?</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Sí. Los programas incluyen planes de comidas calculados para diferentes objetivos calóricos y guía de nutrición paso a paso[cite: 4].
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="bg-black/40 border border-neutral-800 p-8 rounded-xl hover:border-neutral-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué pasa cuando termina el programa?</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Tendrás acceso a todo el contenido durante 6 meses desde el momento de la compra, tiempo suficiente para completar y repetir la rutina si lo deseas[cite: 4].
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-black/40 border border-neutral-800 p-8 rounded-xl hover:border-neutral-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">¿Es una suscripción recurrente?</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                No. Esto no es una suscripción mensual. Realizas un único pago y obtienes acceso al programa completo por el tiempo estipulado[cite: 4].
              </p>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-black/40 border border-neutral-800 p-8 rounded-xl hover:border-neutral-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué pesos debo usar al entrenar?</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Dentro de las guías encontrarás toda la información necesaria para seleccionar el peso adecuado para tu nivel y evitar lesiones[cite: 4].
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTS SECTION */}
      <section id="contacts" className="py-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-widest text-white">
          ¿Aún tienes dudas?
        </h2>
        <p className="text-xl text-neutral-400 mb-10 max-w-2xl font-light">
          Si necesitas ayuda extra o tienes un problema con tu programa, no dudes en contactarme.
        </p>
        <a 
          href="mailto:correo-amigo@gmail.com" 
          className="border border-white text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Contactar por Email
        </a>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 px-4 text-center border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-neutral-500 text-sm mb-4">
            © {new Date().getFullYear()} Nombre Amigo Fitness. TODOS LOS DERECHOS RESERVADOS[cite: 4].
          </p>
          <div className="flex space-x-6 mb-8 text-xs uppercase tracking-widest font-bold text-neutral-600">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad[cite: 4]</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones[cite: 4]</a>
          </div>
          
          {/* Aquí va tu crédito */}
          <p className="text-neutral-600 text-xs font-mono">
            Designed & Developed by <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">Tu Nombre (Portfolio)</a>[cite: 4]
          </p>
        </div>
      </footer>
    </main>
  );
}
