import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import IntegrationsMarquee from "@/components/IntegrationsMarquee";
import ImprovedPaymentSlider from "@/components/ImprovedPaymentSlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col gap-24 pb-24">
        <Hero />
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-16">
            <IntegrationsMarquee />
          </div>
        </section>
        <ImprovedPaymentSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
