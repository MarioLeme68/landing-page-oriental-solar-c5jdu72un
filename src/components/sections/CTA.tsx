import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary z-0">
        <img
          src="https://img.usecurling.com/p/1200/400?q=solar%20panels%20sunset&dpr=2"
          alt="Painéis Solares no Pôr do Sol"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para economizar com conforto?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-10 leading-relaxed">
            Fale com um de nossos especialistas agora mesmo. Faremos uma análise gratuita do seu
            consumo e apresentaremos o projeto ideal para sua casa.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-16 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-bounce" />
              Chamar no WhatsApp
            </a>
          </Button>
          <p className="text-secondary-foreground/60 text-sm mt-6">
            Atendimento rápido e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}
