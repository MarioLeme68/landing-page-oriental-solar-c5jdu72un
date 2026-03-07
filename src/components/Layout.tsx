import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background selection:bg-primary/30 selection:text-secondary">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
