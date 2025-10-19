import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Zap, Lock, BarChart3 } from "lucide-react";
import { AnalyticsGraphic } from "./AnalyticsGraphic";

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
    <section id="hero" className="relative py-20 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" 
             style={{ 
               background: 'radial-gradient(circle at 15% 25%, hsla(var(--gradient-crimson), 0.15), transparent 40%), radial-gradient(circle at 85% 75%, hsla(var(--gradient-burgundy), 0.12), transparent 40%)',
               animation: 'bloom 25s ease-in-out infinite alternate'
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-ubuntu font-bold leading-tight text-foreground">
              Payment{" "}
              <span 
                className="inline-block transition-all duration-500"
                style={{ color: color1 }}
              >
                {word1}
              </span>
              <br />
              That{" "}
              <span 
                className="inline-block transition-all duration-500"
                style={{ color: color2 }}
              >
                {word2}
              </span>
              <br />
              Your{" "}
              <span 
                className="inline-block transition-all duration-500"
                style={{ color: color3 }}
              >
                {word3}
              </span>
            </h1>
            
            <div className="flex items-center gap-6 text-base sm:text-lg text-foreground">
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

            <p className="text-base sm:text-lg text-foreground max-w-xl leading-relaxed">
              Create your business profile in minutes and start accepting cards, ACH, and secure pay links — online, in-store, or on the go. Reduce costs, onboard quickly, and safeguard every transaction with advanced fraud protection and chargeback defense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Start accepting payments today
              </Button>
            </div>
          </div>

          {/* Right side - Analytics graphic */}
          <div className="hidden lg:block h-[500px]">
            <AnalyticsGraphic />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bloom {
          0% { 
            background-position: 0% 0%, 0% 0%; 
          }
          100% { 
            background-position: 50% -50%, -50% 50%; 
          }
        }
      `}</style>
    </section>
  );
};
