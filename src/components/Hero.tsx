import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center animate-fade-in">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
        Welcome to Your New App
      </h1>
      <p className="mt-4 text-xl text-slate-600 max-w-2xl">
        Start building something amazing with React, Tailwind CSS, and modern web technologies.
      </p>
      <div className="flex gap-4 mt-8">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};