// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo o Nombre del Entrenador */}
          <div className="shrink-0 font-bold text-2xl tracking-widest uppercase">
            CARMELO MAÍZ ARROYO
          </div>
          
          {/* Menú de navegación (oculto en móviles por ahora, visible en pantallas medianas o más) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="hover:text-gray-400 px-3 py-2 text-sm font-medium transition-colors">
                HOME
              </Link>
              <Link href="#about" className="hover:text-gray-400 px-3 py-2 text-sm font-medium transition-colors">
                ABOUT
              </Link>
              <Link href="#programs" className="hover:text-gray-400 px-3 py-2 text-sm font-medium transition-colors">
                PROGRAMS
              </Link>
              <Link href="#faq" className="hover:text-gray-400 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link href="#contacts" className="hover:text-gray-400 px-3 py-2 text-sm font-medium transition-colors">
                CONTACTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}