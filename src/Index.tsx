import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// Use the improved 3D carousel instead of the original PaymentSlider.
import ImprovedPaymentSlider from "@/components/ImprovedPaymentSlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <ImprovedPaymentSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
