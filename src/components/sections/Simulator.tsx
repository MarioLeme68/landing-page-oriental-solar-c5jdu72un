import { useState } from 'react'
import { Calculator, TrendingUp, Sun, ArrowRight, Zap, PanelTop, Maximize } from 'lucide-react'
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
    systemSize: number
    panels: number
    area: number
  } | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const value = parseFloat(billValue)

    if (isNaN(value) || value <= 0) return

    // Savings calculations
    const monthlySavings = value * 0.9
    const annualSavings = monthlySavings * 12
    const twentyYearsSavings = annualSavings * 20

    // Plant requirements estimation
    // Assumption: Average tariff is R$ 1.00 per kWh for RJ
    const monthlyConsumptionKwh = value / 1.0
    // Assumption: 1 kWp generates approx 120 kWh/month in RJ
    const systemSizeKwp = monthlyConsumptionKwh / 120
    // Assumption: 550W panels
    const panels = Math.ceil((systemSizeKwp * 1000) / 550)
    // Assumption: 2.5m² per panel + spacing
    const area = panels * 2.5

    setResult({
      monthly: monthlySavings,
      annual: annualSavings,
      twentyYears: twentyYearsSavings,
      systemSize: Number(systemSizeKwp.toFixed(2)),
      panels,
      area: Number(area.toFixed(1)),
    })
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)
  }

  const resultMessage = result
    ? `Olá! Fiz uma simulação no site da Oriental Solar. Minha conta de luz é de R$ ${billValue} e vi que preciso de um sistema de aprox. ${result.systemSize}kWp (${result.panels} placas). Gostaria de um orçamento para minha residência.`
    : undefined

  return (
    <section id="simulador" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Simulador de Energia Solar
          </h2>
          <p className="text-lg text-slate-600">
            Descubra o tamanho do sistema ideal para o seu consumo e projete sua economia
            financeira.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
          <Card className="lg:col-span-5 shadow-xl border-0 overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10 h-full flex flex-col justify-center">
              <form onSubmit={handleCalculate} className="space-y-8">
                <div className="space-y-4">
                  <Label htmlFor="bill" className="text-xl font-bold text-slate-900 block">
                    Valor médio da conta de luz
                  </Label>
                  <p className="text-slate-500 text-sm mb-4">
                    Insira o valor aproximado que você paga mensalmente para a concessionária.
                  </p>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">
                      R$
                    </span>
                    <Input
                      id="bill"
                      type="number"
                      placeholder="Ex: 500"
                      className="pl-14 h-16 text-2xl font-bold bg-white border-2 border-slate-200 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-xl shadow-sm"
                      value={billValue}
                      onChange={(e) => setBillValue(e.target.value)}
                      required
                      min="100"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all bg-slate-900 text-white hover:bg-slate-800"
                >
                  Calcular Sistema e Economia
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-7 h-full">
            {!result ? (
              <div className="h-full border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-12 text-center text-slate-400 bg-white/40 backdrop-blur-sm min-h-[400px]">
                <Sun className="h-16 w-16 mb-6 text-slate-300" />
                <p className="text-xl font-semibold text-slate-500 mb-2">Aguardando valor</p>
                <p className="text-base max-w-sm">
                  Preencha o valor da sua conta ao lado para visualizar a estimativa técnica do seu
                  sistema.
                </p>
              </div>
            ) : (
              <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-2xl h-full flex flex-col animate-fade-in-up border border-slate-800 min-h-[400px]">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Projeção de Viabilidade</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50">
                      <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">
                        Economia Mensal
                      </p>
                      <p className="text-3xl font-extrabold text-primary">
                        {formatCurrency(result.monthly)}
                      </p>
                    </div>
                    <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50">
                      <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">
                        Economia em 1 Ano
                      </p>
                      <p className="text-3xl font-extrabold text-white">
                        {formatCurrency(result.annual)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 mb-8">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-5">
                      Dimensionamento Estimado
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Potência</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                          {result.systemSize}{' '}
                          <span className="text-sm font-normal text-slate-400">kWp</span>
                        </span>
                      </div>

                      <div className="hidden sm:block w-px h-full bg-slate-700 mx-auto" />

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-400">
                          <PanelTop className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Módulos</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                          ~ {result.panels}{' '}
                          <span className="text-sm font-normal text-slate-400">un.</span>
                        </span>
                      </div>

                      <div className="hidden sm:block w-px h-full bg-slate-700 mx-auto" />

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Maximize className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Área Mínima</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                          {result.area}{' '}
                          <span className="text-sm font-normal text-slate-400">m²</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-16 text-lg rounded-xl group shadow-lg shadow-[#25D366]/20 mt-auto"
                >
                  <a
                    href={getWhatsAppLink(resultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Receber Orçamento Exato
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-center text-xs text-slate-500 mt-5">
                  * Resultados baseados em médias de consumo e irradiação solar. A análise técnica
                  definirá o projeto final.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
