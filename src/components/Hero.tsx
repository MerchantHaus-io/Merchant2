import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Zap, Lock, BarChart3 } from "lucide-react";
import heroImage from "../assets/hero.webp";
import heroVideo from "../assets/Hero.webm";

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
      className="hero relative isolate overflow-hidden"
      // keep your existing min height via CSS below
    >
      {/* Full-bleed background video */}
      <video
        src={heroVideo}
        poster={heroImage}
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />

      {/* Transparent fades/overlays for contrast */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal vignette (left-side emphasis for readability) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.76) 12%, rgba(255,255,255,0.56) 24%, rgba(255,255,255,0.34) 38%, rgba(255,255,255,0.16) 52%, rgba(255,255,255,0.08) 66%, rgba(255,255,255,0.02) 78%, rgba(255,255,255,0) 90%)",
          }}
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30" />
        {/* Brand tint pass (very light) */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#1a0b11]/24 to-[#dc143c]/10" />
      </div>

      {/* Content on top of image */}
      <div className="relative z-10 w-full">
        <div
          className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:px-8"
          style={{ minHeight: "min(100vh, 820px)" }}
        >
          {/* Left: Rotating Headline + Body + CTAs — no glass card */}
          <div className="text-left space-y-7">
            <h1
              className="font-ubuntu font-bold leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
            >
              <span className="whitespace-nowrap">
                Payment{" "}
                <span
                  className="relative inline-block transition-all duration-500"
                  style={{ color: color1 }}
                >
                  {word1}
                </span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                That{" "}
                <span
                  className="relative inline-block transition-all duration-500"
                  style={{ color: color2 }}
                >
                  {word2}
                </span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                Your{" "}
                <span
                  className="relative inline-block transition-all duration-500"
                  style={{ color: color3 }}
                >
                  {word3}
                </span>
              </span>
            </h1>

            <div
              className="flex items-center gap-6 text-white/95"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold">Speed.</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-secondary" />
                <span className="font-semibold">Security.</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                <span className="font-semibold">Scale.</span>
              </div>
            </div>

            <p
              className="max-w-xl leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "clamp(1rem, 1.75vw, 1.25rem)" }}
            >
              Create your business profile in minutes and start accepting cards,
              ACH, and secure pay links — online, in-store, or on the go. Reduce
              costs, onboard quickly, and safeguard every transaction with
              advanced fraud protection and chargeback defense.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full font-semibold bg-gradient-to-r from-[#DC143C] via-[#e54b71] to-[#f97b9d] shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.25rem)",
                  padding: "clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)",
                }}
                asChild
              >
                <a href="/pages/services.html">Explore payment services</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold border-white/40 text-white backdrop-blur hover:bg-white/20"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.25rem)",
                  padding: "clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)",
                }}
                asChild
              >
                <a href="/pages/about.html">Meet the team</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Full section size */
        section.hero {
          min-height: min(100vh, 820px);
        }

        /* Background image animation: soft ken-burns + fade in */
        .hero-bg {
          animation: heroFadeIn 1.2s ease-out forwards, heroKenBurns 26s ease-in-out infinite alternate;
          filter: saturate(1.05) contrast(1.05);
          transform: translateZ(0);
        }

        @keyframes heroFadeIn {
          0% { opacity: 0; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes heroKenBurns {
          0% { transform: scale(1) translate3d(0, 0, 0); }
          100% { transform: scale(1.06) translate3d(1.5%, 1.2%, 0); }
        }

        /* Remove old frame/pseudo layers if they linger */
        section.hero::after { content: none !important; }
      `}</style>
    </section>
  );
};
