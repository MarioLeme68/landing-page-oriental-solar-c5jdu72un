import { useState } from 'react'
import { Calculator, TrendingUp, Sun, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getWhatsAppLink } from '@/lib/constants'

export function Simulator() {
  const [billValue, setBillValue] = useState<string>('')
  const [result, setResult] = useState<{
    monthly: number
    annual: number
    twentyYears: number
  } | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const value = parseFloat(billValue)

    if (isNaN(value) || value <= 0) return

    // Simplistic standard calculation: save ~90% of the bill
    const monthlySavings = value * 0.9
    const annualSavings = monthlySavings * 12
    const twentyYearsSavings = annualSavings * 20

    setResult({
      monthly: monthlySavings,
      annual: annualSavings,
      twentyYears: twentyYearsSavings,
    })
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
  }

  const resultMessage = result
    ? `Olá! Fiz uma simulação no site da Oriental Solar. Minha conta de luz é de R$ ${billValue} e vi que posso economizar até ${formatCurrency(result.annual)} por ano. Gostaria de um orçamento.`
    : undefined

  return (
    <section id="simulador" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-3xl rounded-full z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Simulador de Economia
          </h2>
          <p className="text-lg text-slate-600">
            Descubra quanto você pode economizar gerando sua própria energia. Insira o valor médio
            da sua conta de luz abaixo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-elevation border-none">
            <CardContent className="p-8">
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bill" className="text-base font-semibold text-secondary">
                    Qual o valor médio mensal da sua conta de luz?
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                      R$
                    </span>
                    <Input
                      id="bill"
                      type="number"
                      placeholder="Ex: 500"
                      className="pl-12 h-14 text-lg bg-slate-50 border-slate-200 focus-visible:ring-primary focus-visible:border-primary transition-all"
                      value={billValue}
                      onChange={(e) => setBillValue(e.target.value)}
                      required
                      min="100"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Valor mínimo recomendado para sistema solar: R$ 100,00
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                >
                  Calcular Economia
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="h-full">
            {!result ? (
              <div className="h-full border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-8 text-center text-slate-400 bg-white/50">
                <Sun className="h-12 w-12 mb-4 opacity-50" />
                <p className="text-lg font-medium">
                  Preencha o valor ao lado para ver sua projeção de economia.
                </p>
              </div>
            ) : (
              <div className="bg-secondary text-white rounded-xl p-8 shadow-elevation h-full flex flex-col justify-between animate-fade-in-up">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Sua economia estimada</h3>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-secondary-foreground/70 text-sm font-medium mb-1">
                        Economia Mensal (aprox.)
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        {formatCurrency(result.monthly)}
                      </p>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div>
                      <p className="text-secondary-foreground/70 text-sm font-medium mb-1">
                        Economia em 1 Ano
                      </p>
                      <p className="text-2xl font-bold">{formatCurrency(result.annual)}</p>
                    </div>
                    <div>
                      <p className="text-secondary-foreground/70 text-sm font-medium mb-1">
                        Economia em 20 Anos
                      </p>
                      <p className="text-2xl font-bold text-green-400">
                        {formatCurrency(result.twentyYears)}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 text-base rounded-xl group"
                >
                  <a
                    href={getWhatsAppLink(resultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar orçamento exato
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
