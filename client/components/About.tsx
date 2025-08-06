import {
  Shield,
  FileText,
  Camera,
  Building2,
  Car,
  Users,
  Zap,
  Target,
} from "lucide-react";

const About = () => {
  const useCases = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Traffic Safety",
      description:
        "Monitor intersections and detect violations in real-time. Identify dangerous driving patterns and pedestrian behavior to improve road safety.",
      features: [
        "Violation Detection",
        "Risk Assessment",
        "Safety Analytics",
        "Incident Reporting",
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Event Reporting",
      description:
        "Generate detailed incident reports with timestamps, evidence, and AI-powered analysis for insurance claims and legal documentation.",
      features: [
        "Automated Reports",
        "Evidence Collection",
        "Timeline Analysis",
        "Legal Documentation",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Surveillance",
      description:
        "Enhance security systems with intelligent video analysis. Monitor public spaces and detect unusual activities or safety concerns.",
      features: [
        "24/7 Monitoring",
        "Anomaly Detection",
        "Alert System",
        "Video Analytics",
      ],
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Smart Cities",
      description:
        "Power intelligent urban infrastructure with AI-driven traffic management and public safety monitoring for modern city planning.",
      features: [
        "Urban Planning",
        "Traffic Flow",
        "Public Safety",
        "Data Insights",
      ],
      color: "from-orange-400 to-red-500",
    },
  ];

  const features = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Vehicle Detection",
      description:
        "Advanced AI recognizes all vehicle types with 99%+ accuracy",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pedestrian Tracking",
      description:
        "Real-time pedestrian movement analysis and behavior prediction",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Process videos instantly with sub-second response times",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Violation Detection",
      description:
        "Automatically identify traffic violations and safety infractions",
    },
  ];

  const stats = [
    {
      value: "99.2%",
      label: "Accuracy Rate",
      description: "in traffic event detection",
    },
    {
      value: "<2s",
      label: "Processing Time",
      description: "for 2-minute videos",
    },
    {
      value: "15+",
      label: "Event Types",
      description: "detected and classified",
    },
    {
      value: "24/7",
      label: "Availability",
      description: "continuous monitoring",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-slate-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Why VisionChat AI?
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transform any traffic video into actionable insights with our
              cutting-edge AI technology. From safety monitoring to smart city
              applications, VisionChat AI empowers smarter decisions.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="neomorphic rounded-xl p-6 hover:shadow-neon transition-all-smooth">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Powerful Applications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 group hover:shadow-neon transition-all-smooth"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${useCase.color} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{useCase.icon}</div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">
                    {useCase.title}
                  </h4>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Advanced AI Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="neomorphic-inset rounded-xl p-6 text-center group hover:bg-neon-blue/5 transition-all-smooth"
                >
                  <div className="inline-flex p-3 rounded-full glass-card border border-neon-blue/30 mb-4 group-hover:border-neon-blue group-hover:shadow-neon transition-all-smooth">
                    <div className="text-neon-blue">{feature.icon}</div>
                  </div>

                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Powered by Cutting-Edge Technology
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Computer Vision", tech: "OpenCV + TensorFlow" },
                { name: "AI Processing", tech: "GPT-4 Vision + Gemini" },
                { name: "Cloud Infrastructure", tech: "Firebase + Vertex AI" },
                { name: "Real-time Analysis", tech: "WebRTC + WebGL" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 neomorphic-inset rounded-lg"
                >
                  <div className="font-semibold text-white mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-neon-cyan">{tech.tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Traffic Analysis?
              </h3>
              <p className="text-foreground/80 mb-8">
                Join the future of intelligent video analysis and make roads
                safer with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .querySelector("#upload")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-xl font-semibold transition-all-smooth hover:shadow-neon hover:scale-105"
                >
                  Try Demo Now
                </button>
                <button
                  onClick={() =>
                    document
                      .querySelector("#chat")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 rounded-xl font-semibold glass-card border border-white/20 hover:border-neon-blue/50 transition-all-smooth"
                >
                  View Chat Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
