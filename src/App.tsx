import { Header } from './components/layout/Header';
import { Contents } from './components/sections/Contents';
import { Features } from './components/sections/Features';
import { Gallery } from './components/sections/Galery';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <main className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <Features/>
      <Contents/>
      <Gallery/>
    </main>
  )
}

export default App