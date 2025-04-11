import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router";

interface MobileNavProps {
  items: { label: string; href: string }[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                setOpen(false);
                navigate(item.href);
              }}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/auth/login");
              }}
            >
              <Button variant="outline" className="w-full">
                Войти
              </Button>
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/auth/register");
              }}
            >
              <Button className="w-full">Регистрация</Button>
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
