import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I've analyzed your traffic video. I can see a pedestrian crossing incident with a motorcycle. Feel free to ask me anything about what happened!",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What happened at 0:03?",
    "Was there a traffic violation?",
    "How could this incident be prevented?",
    "What was the motorcycle driver's reaction time?",
    "Were there any traffic signals visible?",
    "What safety measures were followed?",
  ];

  const aiResponses: { [key: string]: string } = {
    "what happened at 0:03":
      "At 0:03, a pedestrian suddenly entered the roadway directly in front of an oncoming motorcycle. The pedestrian appears to have not checked for traffic before crossing, creating a dangerous situation.",
    "was there a traffic violation":
      "Yes, there was a traffic violation. The pedestrian failed to yield the right-of-way to vehicle traffic and crossed without ensuring it was safe to do so. This constitutes jaywalking and endangering both themselves and the motorcycle driver.",
    "how could this incident be prevented":
      "This incident could be prevented through: 1) Better pedestrian education about road safety, 2) Installing pedestrian crossing signals, 3) Adding speed bumps to slow traffic, 4) Improving street lighting, and 5) Creating designated crosswalks with clear markings.",
    "what was the motorcycle driver's reaction time":
      "The motorcycle driver showed excellent reaction time of approximately 0.8-1.0 seconds. They immediately applied emergency braking upon seeing the pedestrian, demonstrating good defensive driving skills and awareness.",
    "were there any traffic signals visible":
      "Yes, I can see traffic signals in the background showing green for vehicle traffic. The intersection appears to be properly regulated, which makes the pedestrian's crossing behavior even more concerning as they ignored traffic control devices.",
    "what safety measures were followed":
      "The motorcycle driver followed proper safety measures by maintaining awareness, applying immediate emergency braking, and successfully avoiding collision. However, the pedestrian failed to follow basic safety measures by not checking traffic before crossing.",
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(content.toLowerCase());
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (input: string): string => {
    for (const [key, response] of Object.entries(aiResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }

    return "That's an interesting question about the traffic incident. Based on my analysis of the video, I can see the interaction between the pedestrian and motorcycle clearly. Could you be more specific about what aspect you'd like me to focus on?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <section
      id="chat"
      className="py-20 bg-gradient-to-b from-background to-slate-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Chat Assistant
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Ask detailed questions about your video analysis. Our AI maintains
              context and provides intelligent insights about traffic patterns
              and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl overflow-hidden h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        VisionChat AI Assistant
                      </h3>
                      <p className="text-xs text-foreground/70">
                        Analyzing: Traffic Incident Video
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center gap-2 text-xs text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Online
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "ai" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}

                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                            : "neomorphic-inset"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          {message.content}
                        </p>
                        <p className="text-xs opacity-70 mt-1">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>

                      {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-foreground" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="neomorphic-inset p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about the video analysis..."
                      className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-neon-blue to-neon-purple text-white p-2 rounded-lg transition-all-smooth hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isTyping ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Questions & Context */}
            <div className="space-y-6">
              {/* Suggested Questions */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-neon-cyan" />
                  Suggested Questions
                </h3>

                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="w-full text-left p-3 neomorphic-inset rounded-lg text-sm text-foreground/80 hover:text-neon-blue transition-colors"
                      disabled={isTyping}
                    >
                      "{question}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Context */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-neon-purple" />
                  Active Context
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="p-3 neomorphic-inset rounded-lg">
                    <div className="font-medium text-white mb-1">
                      Video Duration
                    </div>
                    <div className="text-foreground/70">18 seconds</div>
                  </div>

                  <div className="p-3 neomorphic-inset rounded-lg">
                    <div className="font-medium text-white mb-1">
                      Key Events
                    </div>
                    <div className="text-foreground/70">5 events detected</div>
                  </div>

                  <div className="p-3 neomorphic-inset rounded-lg">
                    <div className="font-medium text-white mb-1">
                      Violations Found
                    </div>
                    <div className="text-foreground/70">
                      2 traffic violations
                    </div>
                  </div>

                  <div className="p-3 neomorphic-inset rounded-lg">
                    <div className="font-medium text-white mb-1">
                      Analysis Status
                    </div>
                    <div className="text-green-400">Complete ✓</div>
                  </div>
                </div>
              </div>

              {/* Chat Tips */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Chat Tips
                </h3>

                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• Ask about specific timestamps</li>
                  <li>• Request detailed explanations</li>
                  <li>• Inquire about safety measures</li>
                  <li>• Get prevention suggestions</li>
                  <li>• Analyze driver behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistant;
