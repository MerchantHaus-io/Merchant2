import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";import IntegrationsMarquee from "@/components/logo-banner";
import ImprovedPaymentSlider from "@/components/Servicesshowcase";
import PaymentsSliderCarousel from "@/components/PaymentSliderCarousel";

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
