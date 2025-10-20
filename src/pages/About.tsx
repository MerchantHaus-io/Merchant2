import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutDashboard, ShieldCheck, Headset, Rocket, BadgeCheck } from "lucide-react";

const differentiators = [
  {
    title: "Omnichannel Made Simple",
    description: "One dashboard for every payment channel so your team can monitor, reconcile, and optimize without juggling disconnected tools.",
    icon: LayoutDashboard,
  },
  {
    title: "Security Without Friction",
    description: "Bank-grade protection, tokenization, and advanced fraud controls that keep checkout experiences fast and trusted.",
    icon: ShieldCheck,
  },
  {
    title: "Human Support, Not a Call Queue",
    description: "Dedicated specialists who know your business and respond with solutions—not scripted escalations.",
    icon: Headset,
  },
  {
    title: "Built for Scalability",
    description: "Expand from a single location to a global footprint with infrastructure that scales as quickly as you do.",
    icon: Rocket,
  },
  {
    title: "Powered by NMI",
    description: "Enterprise-grade rails trusted by thousands of payment providers, brought to you in a unified Merchant Haus experience.",
    icon: BadgeCheck,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, hsla(var(--gradient-crimson), 0.2), transparent 45%), radial-gradient(circle at 80% 30%, hsla(var(--gradient-burgundy), 0.15), transparent 45%)",
              }}
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Built for businesses that never stop moving
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-ubuntu font-bold leading-tight">
              About Merchant Haus
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Merchant Haus helps businesses accept, manage, and grow payments through a unified platform that makes every transaction feel effortless.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-ubuntu font-semibold">A Modern Approach to Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe technology should make payments invisible—reliable, secure, and beautifully simple to use. Through our partnership with NMI, we connect businesses of every size to the same infrastructure trusted by leading payment providers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re building an online storefront, scaling a franchise, or running payments in person, Merchant Haus unifies the experience so you can move faster and stay focused on your customers.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-xl">
              <h3 className="text-xl font-semibold font-ubuntu mb-4">Our Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re not a processor—we&apos;re a payments partner. Our success is defined by the momentum we unlock for your business. Every product we launch—from tap-to-pay to recurring billing—is purpose-built to help you move faster, keep customers close, and stay in control of your growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/40">
          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-ubuntu font-semibold">What Sets Us Apart</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Merchant Haus combines proven infrastructure with thoughtful design and responsive support so your payments just work—and your brand stays front and center.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {differentiators.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-3xl border border-border bg-background/80 p-6 shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 space-y-6 text-center">
            <h2 className="text-3xl font-ubuntu font-semibold">Our Promise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Merchant Haus was built on a simple idea: businesses deserve technology that feels made for them, not forced on them. We partner closely with every customer to bring together secure infrastructure, intuitive experiences, and hands-on service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When payments fade into the background, you get to keep your attention where it matters most—growing your business and delivering the moments your customers remember.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
