import { Menu } from "lucide-react";

export function Header() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 py-5  backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-purple">EC</span>
        </a>        
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className="relative text-sm font-medium text-purple-500 border-b-2 border-brand-purple"
          >
            Home
          </a>          
          {[
            { href: "/about", label: "About" },
            { href: "/academics", label: "Academics" },
            { href: "/projects", label: "Projects" },
            { href: "/resume", label: "Resume" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white transition-colors duration-300
              hover:text-purple-500
              after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5
              after:bg-purple-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button aria-label="Menu" className="p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="fixed inset-y-0 right-0 w-[280px] bg-secondary/95 backdrop-blur-lg shadow-xl lg:hidden">
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <div className="flex-1 flex flex-col space-y-4">
            <a href="/" className="text-lg font-medium py-2 border-b border-muted/20 text-brand-purple">Home</a>
            <a href="/about" className="text-lg font-medium py-2 border-b border-muted/20 text-foreground">About</a>
            <a href="/academics" className="text-lg font-medium py-2 border-b border-muted/20 text-foreground">Academics</a>
            <a href="/projects" className="text-lg font-medium py-2 border-b border-muted/20 text-foreground">Projects</a>
            <a href="/resume" className="text-lg font-medium py-2 border-b border-muted/20 text-foreground">Resume</a>
            <a href="/contact" className="text-lg font-medium py-2 border-b border-muted/20 text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}