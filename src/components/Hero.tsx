import { Wrench, Settings, Cog } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16 grid-pattern">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-[60%]">
            <p className="animate-fade-up text-[12px] font-medium uppercase tracking-[0.2em] text-primary">
              Wrocław, Polska — Est. 2009
            </p>

            <h1 className="animate-fade-up animate-fade-up-delay-1 mt-6 font-syne text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[88px]">
              NEXAR
              <br />
              <span className="text-primary">GARAGE</span>
            </h1>

            <p className="animate-fade-up animate-fade-up-delay-2 mt-6 text-lg text-muted-foreground">
              Twój samochód w dobrych rękach
            </p>

            <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="hover-glow inline-flex items-center rounded-sm bg-primary px-7 py-3.5 text-[14px] font-medium text-primary-foreground transition-all duration-300 active:scale-[0.97]"
              >
                Umów wizytę →
              </a>
              <a
                href="#uslugi"
                className="hover-glow inline-flex items-center rounded-sm border border-foreground px-7 py-3.5 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-[0.97]"
              >
                Nasze usługi
              </a>
            </div>

            <div className="animate-fade-up animate-fade-up-delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
              <span>✓ Gwarancja 12 miesięcy</span>
              <span>✓ Bezpłatna diagnostyka</span>
              <span>✓ Oryginalne części</span>
            </div>
          </div>

          {/* Right */}
          <div className="animate-fade-up animate-fade-up-delay-3 hidden w-full lg:block lg:w-[40%]">
            <div className="accent-glow-border flex aspect-square items-center justify-center rounded-sm bg-card">
              <div className="relative flex items-center justify-center">
                <Cog className="absolute -left-8 -top-8 text-primary/20" size={48} strokeWidth={1} />
                <Wrench className="text-primary" size={80} strokeWidth={1.2} />
                <Settings className="absolute -bottom-6 -right-6 text-primary/30" size={40} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
