import { Github, ExternalLink, Heart, Trophy, Users, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const team = [
    "vedant patil",
    "manas patil",
    "MFenil selodiya",
    "Jatin bendale",
  ];

  const technologies = [
    "Gemini AI",
    "OpenAI GPT-4",
    "Firebase",
    "Vertex AI",
    "React",
    "TypeScript",
  ];

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-slate-900/20 to-slate-900/60 border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                VisionChat AI
              </h3>
            </div>
            <p className="text-foreground/80 mb-6 max-w-md leading-relaxed">
              Transforming traffic safety through intelligent video analysis and
              AI-powered insights. Making roads safer, one video at a time.
            </p>

            {/* GitHub Link */}
            <a
              href="https://github.com/your-team/visionchat-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all-smooth hover:from-gray-700 hover:to-gray-800 hover:shadow-lg group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              View on GitHub
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </div>

          {/* Team Section */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-neon-purple" />
              Team
            </h4>
            <ul className="space-y-2">
              {team.map((member, index) => (
                <li
                  key={index}
                  className="text-foreground/70 hover:text-neon-blue transition-colors cursor-pointer"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Powered By</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted/50 border border-border rounded-full text-xs text-foreground/70 hover:border-neon-blue/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon Branding */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">
                  Built for Mantra Hackathon 2024
                </h4>
                <p className="text-foreground/70 text-sm">
                  Creating innovative AI solutions for traffic safety and urban
                  planning
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neon-cyan">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Made with passion</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-foreground/60 text-sm">
            © {currentYear} VisionChat AI. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-foreground/60 hover:text-neon-blue text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-neon-blue text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-neon-blue text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-xs text-foreground/50">
            Built with React, TypeScript, Tailwind CSS, and cutting-edge AI
            technologies
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
    </footer>
  );
};

export default Footer;
