import { Sun, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <Sun className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-violet-400">
                Oriental Solar
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Transformando a luz do sol em qualidade de vida, conforto e economia real para sua
              família ou empresa.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Fale Conosco</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-slate-300">(21) 97166-4200</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:orientalsolarpb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-slate-300">orientalsolarpb@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-slate-300">Atendimento em todo o RJ</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-primary transition-colors inline-block font-medium"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#vantagens"
                  className="hover:text-primary transition-colors inline-block font-medium"
                >
                  Vantagens e Conforto
                </a>
              </li>
              <li>
                <a
                  href="#simulador"
                  className="hover:text-primary transition-colors inline-block font-medium"
                >
                  Simulador de Economia
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary transition-colors inline-block font-medium"
                >
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Oriental Solar. Todos os direitos reservados.
          </p>
          <p className="text-sm flex items-center gap-2 font-medium">
            Desenvolvido para gerar resultados
            <Sun className="h-4 w-4 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
