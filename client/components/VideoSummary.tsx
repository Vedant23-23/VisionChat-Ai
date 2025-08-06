import {
  Clock,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  MapPin,
  Sun,
  Wind,
} from "lucide-react";

const VideoSummary = () => {
  const events = [
    {
      id: 1,
      timestamp: "0:03",
      type: "pedestrian_crossing",
      title: "Pedestrian Detected Crossing Road",
      description:
        "Person suddenly enters roadway in front of oncoming motorcycle",
      status: "violation",
      confidence: 95,
      details: "Pedestrian failed to check for traffic before crossing",
    },
    {
      id: 2,
      timestamp: "0:05",
      type: "vehicle_motion",
      title: "Motorcycle Emergency Braking",
      description:
        "Motorcycle performs sudden emergency stop to avoid collision",
      status: "safe",
      confidence: 98,
      details: "Driver shows excellent reaction time and defensive driving",
    },
    {
      id: 3,
      timestamp: "0:07",
      type: "near_miss",
      title: "Near Miss Incident",
      description: "Close call between pedestrian and motorcycle avoided",
      status: "violation",
      confidence: 92,
      details: "Distance between parties was less than 2 meters",
    },
    {
      id: 4,
      timestamp: "0:12",
      type: "traffic_light",
      title: "Traffic Light Status Check",
      description: "Intersection traffic light shows green for vehicle traffic",
      status: "safe",
      confidence: 100,
      details: "Traffic signals functioning normally",
    },
    {
      id: 5,
      timestamp: "0:15",
      type: "pedestrian_exit",
      title: "Pedestrian Exits Roadway",
      description: "Person safely reaches opposite sidewalk",
      status: "safe",
      confidence: 89,
      details: "Incident concluded without collision",
    },
  ];

  const environment = {
    timeOfDay: "Afternoon",
    weather: "Clear, Dry Conditions",
    location: "Urban Intersection",
    visibility: "Excellent",
    trafficDensity: "Moderate",
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "violation":
        return <AlertTriangle className="h-5 w-5 text-red-400" />;
      case "safe":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      default:
        return <HelpCircle className="h-5 w-5 text-yellow-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "violation":
        return `${baseClasses} bg-red-500/20 text-red-400 border border-red-500/30`;
      case "safe":
        return `${baseClasses} bg-green-500/20 text-green-400 border border-green-500/30`;
      default:
        return `${baseClasses} bg-yellow-500/20 text-yellow-400 border border-yellow-500/30`;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                AI-Generated Summary
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our AI has analyzed your video and identified key events,
              potential violations, and safety patterns with precise timestamps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Events */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-neon-blue" />
                  Event Timeline
                </h3>

                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={event.id} className="relative">
                      {/* Timeline Line */}
                      {index < events.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-neon-blue/50 to-transparent" />
                      )}

                      <div className="flex gap-4">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card border border-neon-blue/30 flex items-center justify-center">
                          {getStatusIcon(event.status)}
                        </div>

                        {/* Event Content */}
                        <div className="flex-1 neomorphic-inset rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-neon-blue font-mono font-semibold">
                                {event.timestamp}
                              </span>
                              <span className={getStatusBadge(event.status)}>
                                {event.status.charAt(0).toUpperCase() +
                                  event.status.slice(1)}
                              </span>
                            </div>
                            <span className="text-xs text-foreground/60">
                              {event.confidence}% confidence
                            </span>
                          </div>

                          <h4 className="font-semibold text-white mb-1">
                            {event.title}
                          </h4>
                          <p className="text-foreground/70 text-sm mb-2">
                            {event.description}
                          </p>
                          <p className="text-foreground/60 text-xs">
                            {event.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Environment & Summary Cards */}
            <div className="space-y-6">
              {/* Environment Card */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-neon-purple" />
                  Environment Analysis
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm">
                      Time of Day
                    </span>
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-yellow-400" />
                      <span className="text-white text-sm">
                        {environment.timeOfDay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm">Weather</span>
                    <div className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">
                        {environment.weather}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm">
                      Location Type
                    </span>
                    <span className="text-white text-sm">
                      {environment.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm">
                      Visibility
                    </span>
                    <span className="text-white text-sm">
                      {environment.visibility}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm">
                      Traffic Density
                    </span>
                    <span className="text-white text-sm">
                      {environment.trafficDensity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Incident Summary
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 neomorphic-inset rounded-lg">
                    <div className="text-2xl font-bold text-red-400 mb-1">
                      2
                    </div>
                    <div className="text-xs text-foreground/70">Violations</div>
                  </div>

                  <div className="text-center p-3 neomorphic-inset rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      3
                    </div>
                    <div className="text-xs text-foreground/70">
                      Safe Events
                    </div>
                  </div>

                  <div className="text-center p-3 neomorphic-inset rounded-lg">
                    <div className="text-2xl font-bold text-neon-blue mb-1">
                      95%
                    </div>
                    <div className="text-xs text-foreground/70">
                      Avg Confidence
                    </div>
                  </div>

                  <div className="text-center p-3 neomorphic-inset rounded-lg">
                    <div className="text-2xl font-bold text-neon-purple mb-1">
                      18s
                    </div>
                    <div className="text-xs text-foreground/70">Duration</div>
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Risk Assessment
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">
                      Overall Risk Level
                    </span>
                    <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-xs">
                      Moderate
                    </span>
                  </div>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full w-3/5"></div>
                  </div>

                  <p className="text-xs text-foreground/60">
                    Pedestrian behavior indicates need for improved crossing
                    safety measures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSummary;
