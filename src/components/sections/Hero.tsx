import { ArrowRight, ShieldCheck, Zap, Sun, TrendingDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl opacity-0 animate-fade-in-up flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-blue-950 font-semibold text-sm mb-6 border border-yellow-200 shadow-sm">
              <Sun className="h-4 w-4" />
              <span>Conforto + Economia = Qualidade de Vida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-[1.2] lg:leading-[1.1] mb-6 tracking-tight text-center lg:text-left w-full">
              <span className="block lg:hidden">
                Transforme a<br />
                luz do Sol em
                <br />
                <span className="text-primary">conforto real</span>
                <br />
                para você
              </span>
              <span className="hidden lg:block">
                Transforme a luz do Sol
                <br />
                em <span className="text-primary">conforto real</span> para você
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-balance text-center lg:text-left">
              Ligue o ar condicionado sem medo da conta no fim do mês. A Oriental Solar entrega uma
              solução individualizada para você reduzir muito a sua conta de luz, economizando mês a
              mês, e valorizar seu imóvel com total segurança.
            </p>

            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                asChild
                className="text-base h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-primary text-primary-foreground w-full sm:w-auto"
              >
                <a href="#simulador">
                  Fazer simulação gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="text-base h-14 px-8 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Instalação Premium</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>Alta Eficiência</span>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-up delay-200 flex flex-col items-center lg:items-end w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-lg border-4 border-white bg-slate-100">
              <img
                src="https://img.usecurling.com/p/800/600?q=brazilian%20house%20solar%20garden&dpr=2&seed=123"
                alt="Residência brasileira com telhado de cerâmica e painéis solares em dia ensolarado"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-center lg:text-left">
                <p className="text-white font-medium text-lg lg:text-xl leading-snug text-balance">
                  Pare de pagar aluguel de energia e comece a gerar seu próprio conforto.
                </p>
                <div className="w-12 h-1.5 bg-primary mt-4 rounded-full mx-auto lg:mx-0" />
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 w-full max-w-sm">
              <div className="bg-green-100 p-3 rounded-xl shrink-0">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Economia Imediata</p>
                <p className="text-xl font-bold text-slate-900">Até 95% a menos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
