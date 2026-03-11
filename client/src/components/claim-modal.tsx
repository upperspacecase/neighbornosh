import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ClaimModalProps {
  mealTitle: string;
  price: number;
  available: number;
  onClaim: (count: number) => void;
}

export function ClaimModal({ mealTitle, price, available, onClaim }: ClaimModalProps) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleClaim = () => {
    onClaim(count);
    setOpen(false);
    toast({
      title: "Spot claimed!",
      description: `You've reserved ${count} portion${count > 1 ? 's' : ''} of ${mealTitle}.`,
      duration: 3000,
    });
    setCount(1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full font-heading font-semibold text-base py-6 shadow-sm hover:shadow-md transition-all" size="lg">
          Claim a Spot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md font-sans">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-primary">Reserve Portions</DialogTitle>
          <DialogDescription>
            How many portions of <strong>{mealTitle}</strong> would you like?
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-6">
          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2"
              onClick={() => setCount(Math.max(1, count - 1))}
              disabled={count <= 1}
            >
              <Minus size={20} />
            </Button>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground w-16">
                {count}
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
                Portions
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2"
              onClick={() => setCount(Math.min(available, count + 1))}
              disabled={count >= available}
            >
              <Plus size={20} />
            </Button>
          </div>

          <div className="bg-secondary/50 p-4 rounded-xl flex justify-between items-center">
            <span className="text-secondary-foreground font-medium">Total to pay at pickup</span>
            <span className="text-2xl font-heading font-bold text-primary">€{price * count}</span>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleClaim} className="w-full py-6 text-lg font-heading">
            Confirm Reservation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
