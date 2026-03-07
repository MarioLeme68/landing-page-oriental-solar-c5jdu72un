import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'A energia solar funciona em dias nublados ou chovendo?',
    answer:
      'Sim! Os painéis solares geram energia a partir da luz do sol (irradiação), não do calor. Mesmo em dias nublados, há luminosidade suficiente para gerar energia, embora a eficiência seja menor do que em um dia de céu limpo. Nosso sistema é dimensionado anualmente já considerando essas variações climáticas.',
  },
  {
    question: 'Quanto tempo dura o sistema e qual a garantia?',
    answer:
      'Os painéis solares premium que utilizamos possuem vida útil superior a 25 anos. O fabricante garante pelo menos 80% da eficiência original de geração após este período. Os inversores, o "cérebro" do sistema, geralmente possuem garantia de 5 a 10 anos.',
  },
  {
    question: 'Meu telhado suporta o peso das placas?',
    answer:
      'A estrutura de fixação e os painéis pesam em média 15kg por metro quadrado. É um peso suportado tranquilamente pela vasta maioria dos telhados (cerâmica, fibrocimento, metálico). De qualquer forma, nossa equipe de engenharia realiza uma avaliação estrutural prévia para garantir 100% de segurança.',
  },
  {
    question: 'Eu ainda vou precisar pagar conta de luz?',
    answer:
      'Você deixará de pagar o consumo de energia injetado, mas a concessionária local (Light/Enel) cobra uma taxa mínima (custo de disponibilidade) por você estar conectado à rede deles, além da taxa de iluminação pública. Sua conta reduzirá drasticamente, muitas vezes chegando a 95% de economia.',
  },
  {
    question: 'Como funciona a manutenção do sistema?',
    answer:
      'A manutenção é extremamente simples, de baixíssimo custo e sem dor de cabeça. Consiste basicamente na limpeza dos módulos solares com água para retirar poeira ou poluição, e uma inspeção visual preventiva que recomendamos realizar uma vez ao ano.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Respostas claras e transparentes para você investir no conforto da sua casa com total
            segurança.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 shadow-sm rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-slate-800 text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
