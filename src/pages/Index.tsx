import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import PaymentSlider from "@/components/PaymentSlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <PaymentSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
