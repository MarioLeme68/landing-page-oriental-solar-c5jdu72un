import { Award, Shield, HeartHandshake, ChevronRight, Home } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Equipamentos Premium',
    description:
      'Trabalhamos com um fornecedor nacionalmente reconhecido, e usamos as melhores marcas do mercado global, garantindo alta eficiência de geração e durabilidade superior a 25 anos.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Instalação Segura',
    description:
      'Nossa engenharia cuida de cada detalhe estético e técnico. Sem fios aparentes ou telhados danificados. O acabamento é impecável e seguro.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Suporte Humanizado',
    description:
      'Estaremos sempre com você. Acompanhamos o início de seu processo e oferecemos suporte pessoal sempre que você precisar, sem burocracia.',
  },
]

export function Benefits() {
  return (
    <section id="vantagens" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 text-balance mx-auto">
            A qualidade que sua família ou seu negócio merecem
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed text-balance mx-auto">
            Diferentemente do mercado padrão, que foca mais em preço do que na qualidade do
            resultado, nossa entrega visa a criar uma experiência boa para sua vida. Energia solar é
            um investimento de longo prazo, em que você valoriza do seu patrimônio e obtém conforto
            e tranquilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group bg-slate-50/50 hover:bg-white"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm inline-block group-hover:bg-primary/10 transition-colors border border-slate-100">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-balance">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-primary font-medium text-sm mb-8 border border-white/10">
              <Home className="h-4 w-4" />
              <span>Conforto em Primeiro Lugar</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white text-balance">
              Ligue o ar condicionado sem medo da conta de luz.
            </h3>

            <p className="text-slate-300 mb-10 text-lg leading-relaxed text-balance">
              Com um sistema fotovoltaico bem dimensionado, você blinda sua família contra as
              bandeiras tarifárias e aproveita a sua casa do jeito que sempre quis.
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
              {[
                'Valorização imediata do seu imóvel',
                'Proteção contra a inflação energética',
                'Retorno financeiro em 3 a 5 anos',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-left">
                  <div className="bg-primary/20 p-1.5 rounded-full border border-primary/30 shrink-0">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
