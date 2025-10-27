import heroVideoWebM from "../assets/Hero.webm";
import heroPoster from "../assets/hero.webp";

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <video
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideoWebM} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="z-10 max-w-xl text-center text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.5)]">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Your Hero Title
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          This is the hero description. You can replace this text and add
          shadcn-ui components like buttons right here.
        </p>
      </div>
    </section>
  );
}
