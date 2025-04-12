import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserNav, MobileNav } from "./components";
import { Leaf } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "Проекты", href: "/projects" },
    { label: "О платформе", href: "/about" },
  ];

  return (
    <header className="border-lt-border dark:border-dk-border bg-lt-bg dark:bg-dk-bg sticky top-0 z-50 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">GreenFinance</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-lt-primary dark:hover:text-dk-primary",
                  pathname === item.href
                    ? "text-lt-foreground dark:text-dk-foreground"
                    : "text-lt-muted-foreground dark:text-dk-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => navigate("/auth/login")}>
              <Button variant="ghost">Войти</Button>
            </button>
            <button onClick={() => navigate("/auth/register")}>
              <Button>Регистрация</Button>
            </button>
          </div>

          <UserNav />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
