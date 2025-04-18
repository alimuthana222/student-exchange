
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpFromLine, ArrowDownToLine } from "lucide-react";

export interface ListingCardProps {
  id: string;
  title: string;
  type: "offer" | "need";
  category: string;
  description: string;
  hourlyRate: number;
  postedBy: {
    name: string;
    university: string;
  };
}

export function ListingCard({ title, type, category, description, hourlyRate, postedBy }: ListingCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className={`h-1 w-full ${type === "offer" ? "bg-maharat-blue" : "bg-maharat-orange"}`} />
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              {type === "offer" ? (
                <Badge variant="default" className="bg-maharat-blue">
                  <ArrowUpFromLine className="h-3 w-3 mr-1" /> عرض
                </Badge>
              ) : (
                <Badge variant="default" className="bg-maharat-orange">
                  <ArrowDownToLine className="h-3 w-3 mr-1" /> طلب
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm mt-1">{postedBy.name} • {postedBy.university}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="flex items-center text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{hourlyRate} ساعة</span>
        </div>
        <Button variant={type === "offer" ? "default" : "outline"} size="sm">
          {type === "offer" ? "استفد من العرض" : "ساعد"}
        </Button>
      </CardFooter>
    </Card>
  );
}
