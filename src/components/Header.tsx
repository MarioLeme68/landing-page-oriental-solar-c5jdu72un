import { useState, useEffect } from 'react'
import { Sun, Menu, X, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Dúvidas', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl group-hover:bg-primary/90 transition-colors shadow-sm">
            <Sun className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-violet-700">
            Oriental Solar
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full px-6 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 h-11"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <PhoneCall className="mr-2 h-4 w-4" />
              (21) 97166-4200
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-6 px-4 flex flex-col gap-6 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg font-semibold text-slate-800 hover:text-primary px-4 py-2 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 rounded-xl"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <PhoneCall className="mr-2 h-5 w-5" />
              (21) 97166-4200
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
