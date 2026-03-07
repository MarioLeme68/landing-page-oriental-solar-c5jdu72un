import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { Simulator } from '@/components/sections/Simulator'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Benefits />
      <Simulator />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Index
