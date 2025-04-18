
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export interface SkillCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  hourlyRate: number;
  provider: {
    name: string;
    university: string;
  };
}

export function SkillCard({ title, category, description, hourlyRate, provider }: SkillCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{provider.name} • {provider.university}</CardDescription>
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
        <Button variant="default" size="sm">تواصل</Button>
      </CardFooter>
    </Card>
  );
}
