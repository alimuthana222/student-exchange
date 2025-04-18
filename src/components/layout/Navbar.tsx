
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Menu, UsersRound, Clock, Brain } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex">
          <Link className="flex items-center gap-2" to="/">
            <Lightbulb size={24} className="text-maharat-blue" />
            <span className="hidden font-bold sm:inline-block text-xl">مهارات</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium mr-6">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              to="/skills"
            >
              <Brain size={18} />
              <span>المهارات</span>
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              to="/timebank"
            >
              <Clock size={18} />
              <span>بنك الوقت</span>
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              to="/marketplace"
            >
              <UsersRound size={18} />
              <span>السوق</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline">
              <Link to="/login">تسجيل دخول</Link>
            </Button>
            <Button asChild>
              <Link to="/register">تسجيل</Link>
            </Button>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <Lightbulb size={24} className="text-maharat-blue ml-2" />
                  مهارات
                </SheetTitle>
                <SheetDescription>
                  منصة تبادل المهارات والخدمات للطلاب
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 py-2"
                  to="/skills"
                  onClick={closeMenu}
                >
                  <Brain size={18} />
                  <span>المهارات</span>
                </Link>
                <Link
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 py-2"
                  to="/timebank"
                  onClick={closeMenu}
                >
                  <Clock size={18} />
                  <span>بنك الوقت</span>
                </Link>
                <Link
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 py-2"
                  to="/marketplace"
                  onClick={closeMenu}
                >
                  <UsersRound size={18} />
                  <span>السوق</span>
                </Link>
                <div className="pt-4 space-y-2">
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/login" onClick={closeMenu}>تسجيل دخول</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/register" onClick={closeMenu}>تسجيل</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
