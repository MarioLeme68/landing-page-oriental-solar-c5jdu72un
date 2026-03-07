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
      'Sim! Os painéis solares geram energia a partir da luz do sol, não do calor. Mesmo em dias nublados, há luminosidade suficiente para gerar energia, embora a eficiência seja menor do que em um dia de céu limpo. O sistema é dimensionado considerando essas variações.',
  },
  {
    question: 'Quanto tempo dura o sistema e qual a garantia?',
    answer:
      'Os painéis solares premium que utilizamos possuem vida útil superior a 25 anos, com garantia de performance do fabricante garantindo pelo menos 80% da geração após este período. Os inversores geralmente possuem garantia de 5 a 10 anos, dependendo da marca.',
  },
  {
    question: 'Meu telhado suporta o peso das placas?',
    answer:
      'A estrutura de fixação e os painéis pesam em média 15kg por metro quadrado, o que é suportado tranquilamente pela vasta maioria dos telhados (cerâmica, fibrocimento, metálico). Nossa equipe de engenharia sempre realiza uma avaliação estrutural antes da instalação para garantir total segurança.',
  },
  {
    question: 'Eu ainda vou precisar pagar conta de luz?',
    answer:
      'Você deixará de pagar o consumo de energia, mas a concessionária local (como a Light ou Enel) cobra uma "taxa mínima" ou custo de disponibilidade por você estar conectado à rede, além da taxa de iluminação pública. Sua conta reduzirá drasticamente, geralmente em até 90-95%.',
  },
  {
    question: 'Como funciona a manutenção do sistema?',
    answer:
      'A manutenção é extremamente simples e de baixo custo. Consiste basicamente na limpeza dos módulos solares com água (caso fiquem muito sujos devido à poeira ou poluição) e uma inspeção visual preventiva, geralmente realizada uma vez ao ano.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes</h2>
          <p className="text-lg text-slate-600">
            Respostas claras para você investir com total segurança.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-50 border-none rounded-xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-secondary text-lg py-6 hover:no-underline hover:text-primary transition-colors">
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
