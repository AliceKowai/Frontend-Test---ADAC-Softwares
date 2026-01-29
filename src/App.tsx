import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Contents } from './components/sections/Contents';
import { CTA } from './components/sections/CTA';
import { Features } from './components/sections/Features';
import { Gallery } from './components/sections/Galery';
import { Hero } from './components/sections/Hero';
import { Partners } from './components/sections/Partners';
import { Testimonials } from './components/sections/Testimonials';

function App() {
  return (
    <main className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <Features/>
      <Contents/>
      <Gallery/>
      <Partners/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default App