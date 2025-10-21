import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import ImprovedPaymentSlider from "@/components/ImprovedPaymentSlider";
import IntegrationsMarquee from "@/components/IntegrationsMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <IntegrationsMarquee />
        <ImprovedPaymentSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
