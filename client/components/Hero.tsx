import { Play, ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToUpload = () => {
    const element = document.querySelector("#upload");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/50 to-purple-900/20">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-blue/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-blue/30 mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">
              Powered by Advanced AI Vision
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent animate-glow-pulse">
              See Beyond
            </span>
            <span className="block bg-gradient-to-r from-neon-purple via-neon-cyan to-white bg-clip-text text-transparent">
              the Frame
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-neon-blue/80 font-medium">
              with VisionChat AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload videos. Ask questions. Get intelligent insights.
            <br />
            <span className="text-neon-cyan">
              Transform any video into an interactive conversation with AI.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToUpload}
              className="group bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all-smooth hover:shadow-neon hover:scale-105 flex items-center gap-2"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Try It Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 rounded-xl font-semibold text-lg glass-card border border-white/20 hover:border-neon-blue/50 transition-all-smooth flex items-center gap-2"
            >
              Learn More
              <Zap className="h-5 w-5 text-neon-purple group-hover:text-neon-blue transition-colors" />
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🎬",
                title: "Video Analysis",
                description:
                  "AI-powered scene understanding and event detection",
              },
              {
                icon: "💬",
                title: "Smart Chat",
                description:
                  "Ask questions and get instant, contextual answers",
              },
              {
                icon: "📊",
                title: "Visual Insights",
                description: "Timeline summaries with violation detection",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all-smooth group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
