import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          YourApp
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
            Contact
          </a>
          <Button variant="outline">Sign In</Button>
        </div>
        <Button className="md:hidden" variant="outline" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </nav>
  );
};