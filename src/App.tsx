import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Contents } from "./components/sections/Contents";
import { CTA } from "./components/sections/CTA";
import { Features } from "./components/sections/Features";
import { Gallery } from "./components/sections/Galery";
import { Hero } from "./components/sections/Hero";
import { Partners } from "./components/sections/Partners";
import { Testimonials } from "./components/sections/Testimonials";
import { FadeIn } from "./components/ui/FadeIn";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Features />
      </FadeIn>
      <FadeIn>
        <Contents />
      </FadeIn>
      <FadeIn>
        <Gallery />
      </FadeIn>
      <FadeIn>
        <Partners />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
      <Footer />
    </main>
  );
}

export default App;
