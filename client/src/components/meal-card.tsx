import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Check, X } from "lucide-react";
import { ClaimModal } from "./claim-modal";

interface MealCardProps {
  id: string;
  title: string;
  cookName: string;
  cookAvatar: string;
  image: string;
  price: number;
  totalSpots: number;
  claimedSpots: number;
  pickupTime: string;
  location: string;
  description: string;
  tags: string[];
  deliveryType?: "pickup_only" | "delivery_available";
}

export function MealCard({ 
  title, 
  cookName, 
  cookAvatar, 
  image, 
  price, 
  totalSpots, 
  claimedSpots: initialClaimed,
  pickupTime,
  location,
  description,
  tags,
  deliveryType = "pickup_only"
}: MealCardProps) {
  const [claimed, setClaimed] = useState(initialClaimed);
  const percentage = (claimed / totalSpots) * 100;
  const spotsLeft = totalSpots - claimed;

  const handleClaim = (count: number) => {
    setClaimed(prev => Math.min(prev + count, totalSpots));
  };
  
  const isDeliveryAvailable = deliveryType === "delivery_available";

  return (
    <Card className="overflow-hidden border-none card-gradient hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-3 py-1 shadow-lg shadow-primary/20 backdrop-blur-sm border-0">
            €{price}
          </Badge>
        </div>
        {spotsLeft === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold text-lg transform -rotate-6 border-2 border-white">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      <CardHeader className="pb-2 pt-5 px-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-heading font-bold text-2xl leading-tight mb-1 text-foreground">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Avatar className="h-5 w-5 border border-border">
                <AvatarImage src={cookAvatar} />
                <AvatarFallback>{cookName[0]}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground/80">by {cookName}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-4 space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 border-0">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-white/5">
          
          {/* Availability Section */}
          <div className="grid grid-cols-2 gap-4 pb-3 border-b border-white/5">
            <div className={`flex items-center gap-2 ${true ? 'text-foreground font-medium' : 'opacity-50'}`}>
              <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check size={12} className="text-green-500" />
              </div>
              <span>Pickup</span>
            </div>
            <div className={`flex items-center gap-2 ${isDeliveryAvailable ? 'text-foreground font-medium' : 'opacity-50'}`}>
              {isDeliveryAvailable ? (
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-green-500" />
                </div>
              ) : (
                <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                   <X size={12} className="text-muted-foreground" />
                </div>
              )}
              <span>Delivery</span>
            </div>
          </div>

          {/* Time & Location */}
          <div className="space-y-2 pt-1">
            <div className="flex items-start gap-2.5">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">Time Window</span>
                <span className="font-medium text-foreground">{pickupTime}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">Location</span>
                <span className="font-medium text-foreground">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-foreground">{claimed} claimed</span>
            <span className="text-primary">{spotsLeft} left</span>
          </div>
          <Progress value={percentage} className="h-2.5 bg-muted" />
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        {spotsLeft > 0 ? (
          <ClaimModal 
            mealTitle={title}
            price={price}
            available={spotsLeft}
            onClaim={handleClaim}
          />
        ) : (
          <Button disabled className="w-full py-6 font-heading font-semibold text-base opacity-50">
            Join Waitlist
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}


