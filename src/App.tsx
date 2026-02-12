import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ChatBot } from './components/ChatBot';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Stats } from './components/sections/Stats';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
