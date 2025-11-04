import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Briefcase, User } from "lucide-react";

type UserRole = "recruiter" | "visitor" | null;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<UserRole>(null);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([]);
  const [input, setInput] = useState("");

  const roleResponses = {
    recruiter: {
      greeting: "Great! I'm actively seeking opportunities. I specialize in web development, machine learning, and building innovative solutions. Would you like to know about my recent projects or technical skills?",
      projects: "I've built a Library Management System, Medicare Booking System, an AI Chatbot, and a Resume Builder with ATS checking. Each showcases different aspects of my skills from backend development to AI integration.",
      skills: "I'm proficient in Java, Python, JavaScript, HTML/CSS, MySQL, and have experience with Machine Learning. I also have strong project management and problem-solving abilities.",
      availability: "I'm available for internships, graduate positions, or contract work. I'm eager to contribute to meaningful projects and continue growing as a developer."
    },
    visitor: {
      greeting: "Welcome! I'm passionate about technology and creating solutions that matter. Feel free to explore my projects, skills, and background. What would you like to know more about?",
      projects: "I love working on diverse projects! From healthcare systems to AI chatbots, each project teaches me something new. Check out the Projects section to see them in detail!",
      skills: "I enjoy working across the stack - from frontend design to backend logic and even dabbling in machine learning. I'm always learning and expanding my skill set!",
      education: "I'm currently in my third year of the Diploma in ICT: Applications Development. I also hold an NQF Level 5 in Systems Support and have completed extensive professional development courses."
    }
  };

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    const greeting = selectedRole ? roleResponses[selectedRole].greeting : "";
    setMessages([
      { text: greeting, sender: "bot" }
    ]);
  };

  const handleSend = () => {
    if (!input.trim() || !role) return;

    const userMessage = input.toLowerCase();
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Simple keyword-based responses
    setTimeout(() => {
      let botResponse = "That's interesting! Feel free to check out my portfolio sections for more details, or ask me about my projects, skills, or education.";

      const responses = roleResponses[role];
      
      if (userMessage.includes("project")) {
        botResponse = responses.projects;
      } else if (userMessage.includes("skill") || userMessage.includes("technology")) {
        botResponse = responses.skills;
      } else if (userMessage.includes("education") || userMessage.includes("study")) {
        botResponse = role === "visitor" && "education" in responses ? responses.education : responses.greeting;
      } else if (role === "recruiter" && (userMessage.includes("available") || userMessage.includes("hire"))) {
        botResponse = "availability" in responses ? responses.availability : responses.greeting;
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-glow transition-all duration-300 z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] flex flex-col border-primary/20 shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
            <h3 className="font-display text-xl font-semibold">Chat with Ahluma 🤖</h3>
            <p className="text-sm text-white/90">👋 Hi! I'm Ahluma. What brings you here?</p>
          </div>

          {/* Role Selection or Chat */}
          {!role ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center gap-4">
              <p className="text-center text-muted-foreground mb-4">
                Choose your role to get a personalized conversation:
              </p>
              
              <Button
                onClick={() => handleRoleSelect("recruiter")}
                className="w-full bg-card hover:bg-primary/10 text-foreground border border-primary/20"
                variant="outline"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                💼 Recruiter
                <span className="block text-xs text-muted-foreground mt-1">
                  Looking to hire or learn about opportunities
                </span>
              </Button>

              <Button
                onClick={() => handleRoleSelect("visitor")}
                className="w-full bg-card hover:bg-primary/10 text-foreground border border-primary/20"
                variant="outline"
              >
                <User className="mr-2 h-5 w-5" />
                🌟 Visitor
                <span className="block text-xs text-muted-foreground mt-1">
                  Exploring background and projects
                </span>
              </Button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-primary to-accent text-white"
                          : "bg-card border border-primary/20"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-primary/20 bg-background">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="border-primary/20"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="bg-gradient-to-r from-primary to-accent"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;
