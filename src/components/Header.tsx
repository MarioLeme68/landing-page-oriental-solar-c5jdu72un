import { useState, useEffect } from 'react'
import { Sun, Menu, X } from 'lucide-react'
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
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Sun className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-secondary">
            Oriental <span className="text-primary font-black">Solar</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full px-6 shadow-elevation transition-all hover:scale-105"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-slate-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
