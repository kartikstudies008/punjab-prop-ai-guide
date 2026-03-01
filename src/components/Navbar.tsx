import { Building2 } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Building2 className="w-6 h-6 text-gold" />
        <span className="font-display font-bold text-foreground text-lg">Punjab Property AI</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#predict" className="text-muted-foreground hover:text-foreground transition-colors">Predict</a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
