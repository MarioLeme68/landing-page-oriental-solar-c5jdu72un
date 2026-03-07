import { Award, Wrench, HeartHandshake, Zap, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Equipamentos Premium',
    description:
      'Trabalhamos apenas com as melhores marcas do mercado global, garantindo alta eficiência de geração e durabilidade superior a 25 anos.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Instalação Impecável',
    description:
      'Nossa engenharia cuida de cada detalhe estético e técnico. Nada de fios aparentes ou telhados danificados. O acabamento é perfeito.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Suporte Contínuo',
    description:
      'Não apenas instalamos. Monitoramos sua geração de energia e oferecemos suporte rápido sempre que você precisar, sem burocracia.',
  },
]

export function Benefits() {
  return (
    <section id="vantagens" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Por que escolher a Oriental Solar?
          </h2>
          <p className="text-lg text-slate-600">
            Diferente do mercado padrão que foca apenas em preço, nós entregamos uma{' '}
            <strong className="text-secondary font-semibold">experiência premium</strong>. Energia
            solar é um investimento a longo prazo, e a qualidade faz toda a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-subtle hover:shadow-elevation transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-primary/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-16 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary font-medium text-sm mb-6">
                <Zap className="h-4 w-4" />
                <span>O Fim das Surpresas na Conta</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ligue o ar condicionado sem medo da conta de luz.
              </h3>
              <p className="text-secondary-foreground/80 mb-8 text-lg">
                Com um sistema fotovoltaico bem dimensionado, você protege sua família dos aumentos
                tarifários constantes e aproveita o conforto da sua casa sem culpa.
              </p>
              <ul className="space-y-3">
                {[
                  'Valorização imediata do imóvel',
                  'Imunidade à inflação energética',
                  'Energia limpa e sustentável',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[300px] relative hidden md:block">
              <img
                src="https://img.usecurling.com/p/600/600?q=family%20living%20room%20air%20conditioner"
                alt="Família confortável na sala"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
