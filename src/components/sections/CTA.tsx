import { MessageCircle, ShieldCheck, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1200/400?q=solar%20panels%20sunset&dpr=2"
          alt="Painéis Solares no Pôr do Sol"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl mb-6">
            <Sun className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Pronto para ter mais conforto pagando menos?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Fale com um de nossos especialistas agora mesmo. Faremos uma análise gratuita da sua
            viabilidade técnica e apresentaremos o projeto ideal para sua casa.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              size="lg"
              asChild
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-16 px-8 text-lg rounded-full shadow-xl shadow-[#25D366]/20 hover:shadow-2xl transition-all hover:scale-105 group w-full sm:w-auto"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                Falar com Especialista no WhatsApp
              </a>
            </Button>

            <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Análise Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Sem Compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
