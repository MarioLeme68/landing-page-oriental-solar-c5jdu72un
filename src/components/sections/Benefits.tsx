import { Award, Shield, HeartHandshake, ChevronRight, Home } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Equipamentos Premium',
    description:
      'Trabalhamos apenas com as melhores marcas do mercado global, garantindo alta eficiência de geração e durabilidade superior a 25 anos.',
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
      'Não apenas instalamos. Monitoramos sua geração de energia e oferecemos suporte rápido sempre que você precisar, sem burocracia.',
  },
]

export function Benefits() {
  return (
    <section id="vantagens" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            A qualidade que sua família merece
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Diferente do mercado padrão que foca apenas em preço, nós entregamos uma{' '}
            <strong className="text-slate-900 font-semibold">experiência premium</strong>. Energia
            solar é um investimento de longo prazo para a valorização do seu patrimônio.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="grid lg:grid-cols-2 items-center relative z-10">
            <div className="p-10 md:p-16 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-primary font-medium text-sm mb-8 border border-white/10">
                <Home className="h-4 w-4" />
                <span>Conforto em Primeiro Lugar</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ligue o ar condicionado sem medo da conta de luz.
              </h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Com um sistema fotovoltaico bem dimensionado, você blinda sua família contra as
                bandeiras tarifárias e aproveita a sua casa do jeito que sempre quis.
              </p>
              <ul className="space-y-4">
                {[
                  'Valorização imediata do seu imóvel',
                  'Proteção contra a inflação energética',
                  'Retorno financeiro em 3 a 5 anos',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary/20 p-1.5 rounded-full border border-primary/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[400px] relative hidden lg:block">
              <img
                src="https://img.usecurling.com/p/800/800?q=family%20living%20room%20air%20conditioner"
                alt="Família confortável na sala com ar condicionado"
                className="absolute inset-0 w-full h-full object-cover rounded-l-[2.5rem] border-l border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
