import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Users, TrendingUp, DollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">My Kitchen</h1>
            <p className="text-muted-foreground">Manage your upcoming meals and orders.</p>
          </div>
          <Button size="lg" className="font-heading font-semibold shadow-md hover:shadow-lg transition-all">
            <Plus className="mr-2 h-5 w-5" /> New Meal
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="card-gradient border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 bg-primary/20 text-primary rounded-full mb-1">
                <Users size={24} />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground">24</div>
              <div className="text-sm text-muted-foreground font-medium">Neighbors Fed</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 bg-secondary/20 text-secondary rounded-full mb-1">
                <DollarSign size={24} />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground">€320</div>
              <div className="text-sm text-muted-foreground font-medium">Earned</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-none">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 bg-accent/20 text-accent rounded-full mb-1">
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground font-medium">Rating</div>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">Active Listings</h2>
          <Card className="border-2 border-dashed border-muted bg-transparent shadow-none">
            <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 bg-muted/20 rounded-full">
                <UtensilsCrossed className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-semibold text-lg">No active meals</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  You don't have any meals scheduled. Planning to cook something delicious soon?
                </p>
              </div>
              <Button variant="outline" className="mt-4">
                Schedule a Meal
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}

import { UtensilsCrossed } from "lucide-react";
