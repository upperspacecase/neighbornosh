import { Layout } from "@/components/layout";
import { MealCard } from "@/components/meal-card";
import { DateFilter } from "@/components/date-filter";
import rusticLasagna from "@assets/generated_images/rustic_lasagna_on_wooden_table.png";
import sourdoughFocaccia from "@assets/generated_images/fresh_sourdough_focaccia.png";

const MOCK_MEALS = [
  {
    id: "1",
    title: "Nonna's 12-Layer Lasagna",
    cookName: "Maria Rossi",
    cookAvatar: "https://i.pravatar.cc/150?u=maria",
    image: rusticLasagna,
    price: 12,
    totalSpots: 8,
    claimedSpots: 4,
    pickupTime: "Wed, 6:00 PM - 8:00 PM",
    location: "Oak Street (Block 4)",
    description: "Slow-cooked beef ragu, creamy béchamel, fresh basil, and parmigiano reggiano. Made with love and family tradition.",
    tags: ["Italian", "Comfort Food", "Contains Beef"],
    deliveryType: "pickup_only"
  },
  {
    id: "2",
    title: "Thai Green Curry & Jasmine Rice",
    cookName: "Sarah Chen",
    cookAvatar: "https://i.pravatar.cc/150?u=sarah",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 10,
    totalSpots: 6,
    claimedSpots: 5,
    pickupTime: "Thu, 5:30 PM - 7:00 PM",
    location: "Maple Avenue",
    description: "Authentic spicy green curry with chicken, bamboo shoots, and thai eggplant. Served with fragrant jasmine rice.",
    tags: ["Thai", "Spicy", "Gluten Free"],
    deliveryType: "delivery_available"
  },
  {
    id: "3",
    title: "Sourdough Focaccia Loaves",
    cookName: "Tom Baker",
    cookAvatar: "https://i.pravatar.cc/150?u=tom",
    image: sourdoughFocaccia,
    price: 6,
    totalSpots: 10,
    claimedSpots: 0,
    pickupTime: "Fri, 10:00 AM - 12:00 PM",
    location: "High Street",
    description: "Freshly baked sourdough focaccia with rosemary, sea salt, and extra virgin olive oil. Perfect for the weekend.",
    tags: ["Bakery", "Vegan", "Fresh"],
    deliveryType: "pickup_only"
  }
];


export default function Feed() {
  return (
    <Layout>
      <div className="space-y-8">
        <DateFilter />
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">What's Cooking?</h2>
            <p className="text-muted-foreground">Discover fresh home-cooked meals in your neighborhood.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {MOCK_MEALS.map(meal => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
