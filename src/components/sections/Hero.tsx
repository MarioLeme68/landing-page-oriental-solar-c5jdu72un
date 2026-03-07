import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-secondary font-medium text-sm mb-6 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span>Energia limpa e inteligente</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] mb-6 tracking-tight">
              Conforto e Economia: A <span className="text-primary">Oriental Solar</span> transforma
              a luz do sol em qualidade de vida.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Valorize seu imóvel, zere sua conta de luz e desfrute do conforto que sua família
              merece, com a segurança de uma instalação premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                asChild
                className="text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <a href="#simulador">
                  Faça uma simulação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Instalação Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Suporte Dedicado</span>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-up delay-200 lg:ml-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto border border-white/20">
              <img
                src="https://img.usecurling.com/p/800/600?q=modern%20house%20solar%20panels&dpr=2"
                alt="Casa moderna com painéis solares no telhado"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-medium text-lg">
                  Economia de até 95% na conta de luz
                </p>
                <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-elevation animate-float border border-slate-100 hidden md:flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Retorno do Investimento</p>
                <p className="text-lg font-bold text-secondary">3 a 5 anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
