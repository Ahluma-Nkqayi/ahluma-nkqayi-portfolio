import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([
    { text: "Hi there 👋 I'm Ahluma! I can tell you about my skills, projects, experience, or education. What would you like to know?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    // Project-specific questions
    if (msg.includes("library") && msg.includes("management")) {
      return "The Library Management System is a Java-based project I developed that allows users to log in, manage their profiles, and track borrowed books. It includes both user and admin roles with a secure login interface and comprehensive book tracking features.";
    } else if (msg.includes("restaurant") && msg.includes("management")) {
      return "The Restaurant Management System is a full-stack application I built using Java for the backend and web technologies for the frontend. It handles table reservations, menu management, and order tracking for restaurant operations.";
    } else if (msg.includes("bursary") && msg.includes("management")) {
      return "The Bursary Management System is a project that streamlines the application and tracking process for bursary applications. It includes features for applicants to submit their information and for administrators to review and manage applications efficiently.";
    } else if (msg.includes("machine learning") || (msg.includes("ml") && msg.includes("project"))) {
      return "I've worked on several Machine Learning projects including predictive models and data analysis tasks. These projects involved using Python libraries like scikit-learn and pandas to build models that extract meaningful insights from data.";
    } else if (msg.includes("chatbot") || msg.includes("ai chatbot")) {
      return "I developed an AI-powered chatbot that can engage in natural conversations and provide helpful responses. It uses natural language processing to understand user queries and provide contextual answers.";
    } else if (msg.includes("resume") && msg.includes("builder")) {
      return "The Resume Builder is a project that helps users create professional resumes with built-in ATS (Applicant Tracking System) checking. It ensures resumes are optimized for automated screening systems used by many companies.";
    }
    
    // Skills questions
    else if (msg.includes("programming language") || msg.includes("languages do you")) {
      return "I work with HTML, CSS, JavaScript, Java, Python, and MySQL. I'm also familiar with Machine Learning and continuously expanding my technical toolkit!";
    } else if (msg.includes("html") || msg.includes("css")) {
      return "I have advanced proficiency in HTML and CSS, which I've applied across multiple web projects including the Restaurant Management System and various portfolio pieces.";
    } else if (msg.includes("javascript")) {
      return "I have intermediate JavaScript skills, which I've used to build interactive web applications and chatbots. I'm constantly improving my JavaScript expertise through hands-on projects.";
    } else if (msg.includes("java")) {
      return "I have intermediate Java proficiency and used it extensively in the Restaurant Management System, Library Management System, and other backend projects.";
    } else if (msg.includes("python")) {
      return "I have intermediate Python skills, primarily using it for machine learning projects, automation, and data analysis tasks.";
    } else if (msg.includes("mysql") || msg.includes("database")) {
      return "I have intermediate MySQL skills with experience in database design for various systems including library, restaurant, and bursary management applications.";
    } else if (msg.includes("machine learning") || msg.includes("ml")) {
      return "I'm at a beginner level in Machine Learning, having worked on predictive models and data analysis projects. I'm actively learning and applying ML concepts to real-world problems.";
    }
    
    // Education questions
    else if (msg.includes("education") || msg.includes("study") || msg.includes("student")) {
      return "I'm currently in my third year of the Diploma in ICT: Applications Development. I also hold an NQF Level 5 in Systems Support and a Higher Certificate in ICT, which have given me a strong foundation in software development.";
    }
    
    // Experience and roles
    else if (msg.includes("experience") || msg.includes("role") || msg.includes("position")) {
      return "I've held several roles including Software Manager, Scribe, and Quality Assurance Engineer. These positions have helped me develop strong project management, documentation, and testing skills alongside my technical abilities.";
    } else if (msg.includes("software manager")) {
      return "As a Software Manager, I've led development teams, coordinated project timelines, and ensured deliverables meet quality standards. This role enhanced my leadership and organizational skills.";
    } else if (msg.includes("quality assurance") || msg.includes("qa") || msg.includes("testing")) {
      return "My Quality Assurance experience involves creating test plans, identifying bugs, and ensuring software meets functional requirements. I believe thorough testing is crucial for delivering reliable applications.";
    }
    
    // Internship and availability
    else if (msg.includes("internship") || msg.includes("looking for") || msg.includes("available")) {
      return "Yes! I'm currently seeking an internship to apply my skills in a real-world software development environment. I'm eager to contribute to meaningful projects and continue learning from experienced professionals.";
    } else if (msg.includes("hire") || msg.includes("work") || msg.includes("opportunity")) {
      return "I'm available for internships, graduate positions, or contract work. I'm passionate about building impactful solutions and would love to discuss how I can contribute to your team!";
    }
    
    // Contact information
    else if (msg.includes("contact") || msg.includes("reach") || msg.includes("email")) {
      return "You can reach me through the Contact section below, or connect with me on LinkedIn and GitHub! I'm always happy to discuss opportunities or answer questions about my work.";
    }
    
    // General project question
    else if (msg.includes("project")) {
      return "I've built several projects including a Library Management System, Restaurant Management System, Bursary Management System, Machine Learning projects, an AI Chatbot, and a Resume Builder with ATS checking. Which one would you like to know more about?";
    }
    
    // General skills question
    else if (msg.includes("skill") || msg.includes("technology")) {
      return "I'm proficient in HTML (Advanced), CSS (Advanced), JavaScript (Intermediate), Java (Intermediate), Python (Intermediate), MySQL (Intermediate), and Machine Learning (Beginner). I also have strong soft skills in project management, problem-solving, and teamwork!";
    }
    
    // Default response for unclear questions
    return "I might not have that information, but I can tell you more about my projects, skills, or experience instead! Try asking about my Library Management System, programming languages, education, or internship availability.";
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
