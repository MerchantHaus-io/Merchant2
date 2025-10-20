import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Zap, Lock, BarChart3 } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const word1Options = [
  "Control", "Simplicity", "Advantage", "Empowerment", "Opportunity", 
  "Independence", "Flexibility", "Agility", "Innovation", "Mastery"
];

const word2Options = [
  "Amplifies", "Propels", "Ignites", "Accelerates", "Elevates",
  "Supports", "Fuels", "Drives", "Powers", "Transforms"
];

const word3Options = [
  "Future", "Potential", "Scalability", "Business", "Growth",
  "Expansion", "Revenue", "Success", "Vision", "Impact"
];

const getRandomWord = (options: string[], exclude?: string) => {
  const available = exclude ? options.filter(w => w !== exclude) : options;
  return available[Math.floor(Math.random() * available.length)];
};

export const Hero = () => {
  const [word1, setWord1] = useState(word1Options[0]);
  const [word2, setWord2] = useState(word2Options[0]);
  const [word3, setWord3] = useState(word3Options[0]);
  
  // Complementary colors for each word position (no orange tones)
  const colorOptions = [
    'hsl(var(--hero-crimson))',
    'hsl(var(--hero-teal))',
    'hsl(var(--hero-cyan))',
    'hsl(var(--hero-purple))',
    'hsl(var(--hero-magenta))'
  ];
  
  const [color1, setColor1] = useState(colorOptions[0]);
  const [color2, setColor2] = useState(colorOptions[1]);
  const [color3, setColor3] = useState(colorOptions[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change word1 and color1 first
      setWord1(prev => getRandomWord(word1Options, prev));
      setColor1(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
      
      // Change word2 and color2 with slight delay
      setTimeout(() => {
        setWord2(prev => getRandomWord(word2Options, prev));
        setColor2(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
      }, 150);
      
      // Change word3 and color3 with additional delay
      setTimeout(() => {
        setWord3(prev => getRandomWord(word3Options, prev));
        setColor3(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
      }, 300);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "min(100vh, 820px)" }}
    >
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 animate-hero-image"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(12, 16, 24, 0.82) 0%, rgba(12, 16, 24, 0.72) 42%, rgba(12, 16, 24, 0.35) 60%, rgba(12, 16, 24, 0.1) 100%), url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0b11]/40 to-[#dc143c]/20" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 right-[35%] bg-gradient-to-r from-background/90 via-background/75 to-transparent backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-14 items-center">
          <div className="text-left space-y-7 bg-background/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-black/10 border border-white/10">
            <h1 className="font-ubuntu font-bold leading-[1.1] text-foreground" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}>
              <span className="whitespace-nowrap">
                Payment{" "}
                <span className="inline-block transition-all duration-500" style={{ color: color1 }}>
                  {word1}
                </span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                That{" "}
                <span className="inline-block transition-all duration-500" style={{ color: color2 }}>
                  {word2}
                </span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                Your{" "}
                <span className="inline-block transition-all duration-500" style={{ color: color3 }}>
                  {word3}
                </span>
              </span>
            </h1>

            <div className="flex items-center gap-6 text-foreground" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold">Speed.</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Security.</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <span className="font-semibold">Scale.</span>
              </div>
            </div>

            <p className="text-foreground/90 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.75vw, 1.25rem)' }}>
              Create your business profile in minutes and start accepting cards, ACH, and secure pay links — online, in-store, or on the go. Reduce costs, onboard quickly, and safeguard every transaction with advanced fraud protection and chargeback defense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full font-semibold bg-gradient-to-r from-[#DC143C] via-[#e54b71] to-[#f97b9d] hover:opacity-90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{ fontSize: 'clamp(1rem, 1.75vw, 1.25rem)', padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)' }}
                asChild
              >
                <a href="/pages/services.html">Explore payment services</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold border-white/40 text-white hover:bg-white/20 backdrop-blur"
                style={{ fontSize: 'clamp(1rem, 1.75vw, 1.25rem)', padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)' }}
                asChild
              >
                <a href="/pages/about.html">Meet the team</a>
              </Button>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[560px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/30">
            <div className="hero-image-frame">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              <div className="absolute inset-0 bg-cover bg-center animate-hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroImageEnter {
          from {
            opacity: 0;
            transform: translate3d(60px, 0, 0) scale(1.05);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .animate-hero-image {
          animation: heroImageEnter 1.5s ease-out forwards;
        }

        .hero-image-frame {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 2.5rem;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};
