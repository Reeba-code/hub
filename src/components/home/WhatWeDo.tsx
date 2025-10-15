import { Lightbulb, Code, Users, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Incubation Programs",
    description: "Supporting startups and entrepreneurs with resources, mentorship, and funding opportunities.",
    titleColor: "text-yellow-400",
    buttonText: "Apply",
  },
  {
    icon: Code,
    title: "Hackathons",
    description: "Hosting innovative coding challenges and tech competitions to foster creative problem-solving.",
    titleColor: "text-green-400",
    buttonText: "Register",
  },
  {
    icon: Globe,
    title: "Digital Platforms",
    description: "Providing cutting-edge digital infrastructure and tools for innovation and collaboration.",
    titleColor: "text-blue-400",
    buttonText: "Visit Platform",
  },
  {
    icon: Users,
    title: "Community Portal",
    description: "Connecting innovators, entrepreneurs, and tech enthusiasts in a vibrant ecosystem.",
    titleColor: "text-pink-400",
    buttonText: "Try it",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering innovation through comprehensive programs and state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black text-white border border-gray-700 hover:border-primary/30 transition-all group animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`text-xl font-bold ${feature.titleColor}`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1">
                <CardDescription className="text-gray-300 mb-4">
                  {feature.description}
                </CardDescription>
                <button
                  className={`mt-auto px-4 py-1 border rounded text-sm font-semibold w-max transition ${feature.titleColor} border-current hover:bg-current hover:text-white`}
                >
                  {feature.buttonText}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
