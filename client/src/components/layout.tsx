import { Link, useLocation } from "wouter";
import { UtensilsCrossed, ChefHat, ShoppingBag } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <nav className="border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-gradient-to-br from-primary to-accent text-white p-2 rounded-lg group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <UtensilsCrossed size={20} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Made Extra
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            <Link href="/">
              <a
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  location === "/"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                Feed
              </a>
            </Link>
            <Link href="/dashboard">
              <a
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  location === "/dashboard"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                My Kitchen
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 pb-20 pt-4">
        {children}
      </main>
    </div>
  );
}
