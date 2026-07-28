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
      'A vida útil dos painéis solares é superior a 25 anos. Trabalhamos com marcas globais e fornecedor nacionalmente reconhecido, repassando as garantias oficiais de fábrica (geralmente de 10 a 12 anos contra defeitos de fabricação para os painéis, e de 5 a 20 anos para os inversores), garantindo total segurança no seu investimento.',
  },
  {
    question: 'Meu telhado suporta o peso das placas?',
    answer:
      'A estrutura de fixação e os painéis pesam em média 15kg por metro quadrado. É um peso suportado tranquilamente pela vasta maioria dos telhados (cerâmica, fibrocimento, metálico). De qualquer forma, nossa equipe de engenharia realiza uma avaliação estrutural prévia para garantir 100% de segurança.',
  },
  {
    question: 'Como funciona a manutenção do sistema?',
    answer:
      'A manutenção é extremamente simples, de baixíssimo custo e sem dor de cabeça. Consiste basicamente na limpeza dos módulos solares com água para retirar poeira ou poluição, e uma inspeção visual preventiva que recomendamos realizar uma vez ao ano.',
  },
  {
    question: 'Eu ainda vou precisar pagar conta de luz?',
    answer:
      'Sim, haverá uma redução drástica, mas a conta não é zerada. Você deixará de pagar a maior parte do seu consumo, contudo continuará pagando a taxa mínima (custo de disponibilidade da rede) para a concessionária (Light/Enel), a taxa de iluminação pública e eventuais encargos e impostos previstos na legislação vigente sobre a energia injetada. Mesmo assim, a sua economia mensal pode chegar a até 95%, transformando uma conta alta em um valor simbólico.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 text-balance">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600 text-balance mx-auto">
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
              <AccordionTrigger className="text-left font-bold text-blue-950 text-lg py-6 hover:no-underline hover:text-primary transition-colors text-balance">
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
