import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([
    { text: "Hi! I'm Ahluma 👋 Ask me about my projects, skills, or experience!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("project")) {
      return "I've built several projects including a Library Management System, Medicare Booking System, AI Chatbot, and a Resume Builder with ATS checking. Check out the Projects section for details!";
    } else if (msg.includes("skill") || msg.includes("technology")) {
      return "I'm proficient in Java, Python, JavaScript, HTML/CSS, MySQL, and Machine Learning. I also excel at project management and problem-solving!";
    } else if (msg.includes("education") || msg.includes("study")) {
      return "I'm currently in my third year of the Diploma in ICT: Applications Development, with NQF Level 5 in Systems Support and a Higher Certificate in ICT.";
    } else if (msg.includes("hire") || msg.includes("work") || msg.includes("available")) {
      return "I'm available for internships, graduate positions, or contract work. I'm eager to contribute to meaningful projects!";
    } else if (msg.includes("contact") || msg.includes("reach")) {
      return "You can reach me through the Contact section below, or connect with me on LinkedIn and GitHub!";
    }
    
    return "Feel free to ask about my projects, skills, education, or availability. I'm here to help!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    const userInput = input;
    setInput("");

    setTimeout(() => {
      const botResponse = getResponse(userInput);
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-glow transition-all duration-300 z-50"
        size="icon"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[calc(100vw-2rem)] max-w-sm md:max-w-md h-[70vh] md:h-[500px] flex flex-col border-primary/20 shadow-2xl z-50 animate-scale-in">
          <div className="bg-gradient-to-r from-primary to-accent p-3 md:p-4 text-white rounded-t-lg">
            <h3 className="font-display text-lg md:text-xl font-semibold">Chat with Ahluma</h3>
            <p className="text-xs md:text-sm text-white/90">Ask me anything!</p>
          </div>

          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-muted/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-2.5 md:p-3 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-card border border-primary/20 text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 md:p-4 border-t border-primary/20 bg-background rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="border-primary/20 text-sm"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-primary to-accent flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
