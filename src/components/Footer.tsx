import { Sun, Mail, Phone, MapPin } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Sun className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Oriental <span className="text-primary font-black">Solar</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 max-w-sm">
              Transformando a luz do sol em qualidade de vida, conforto e economia real para sua
              casa ou empresa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (21) 97166-4200
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="h-5 w-5 text-primary" />
                <span>contato@orientalsolar.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Atendimento em todo o Rio de Janeiro</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#vantagens"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#simulador"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Simulador de Economia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Oriental Solar. Todos os direitos reservados.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            Desenvolvido para gerar resultados sustentáveis.
          </p>
        </div>
      </div>
    </footer>
  )
}
