
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Hourglass, TimerOff, Clock, ArrowRightLeft } from "lucide-react";

export interface TimeBankCardProps {
  hoursEarned: number;
  hoursSpent: number;
  pendingHours: number;
}

export function TimeBankCard({ hoursEarned, hoursSpent, pendingHours }: TimeBankCardProps) {
  const availableHours = hoursEarned - hoursSpent;
  const progressPercentage = Math.min((availableHours / (hoursEarned || 1)) * 100, 100);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl flex items-center">
            <Hourglass className="mr-2 h-5 w-5 text-maharat-blue" />
            بنك الوقت الخاص بك
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowRightLeft className="h-4 w-4" />
            <span>سجل المعاملات</span>
          </Button>
        </div>
        <CardDescription>تبادل الوقت والمهارات مع زملائك الطلاب</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">رصيدك الحالي</span>
              <span className="text-sm font-medium">{availableHours} ساعة</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-primary/10">
              <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-medium">{hoursEarned}</div>
              <div className="text-xs text-muted-foreground">ساعات مكتسبة</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/10">
              <TimerOff className="h-5 w-5 mx-auto mb-1 text-secondary" />
              <div className="text-lg font-medium">{hoursSpent}</div>
              <div className="text-xs text-muted-foreground">ساعات مستخدمة</div>
            </div>
            <div className="p-3 rounded-lg bg-accent/10">
              <ArrowRightLeft className="h-5 w-5 mx-auto mb-1 text-accent" />
              <div className="text-lg font-medium">{pendingHours}</div>
              <div className="text-xs text-muted-foreground">ساعات معلقة</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center border-t pt-4">
        <Button className="flex-1">اكتساب ساعات</Button>
        <Button variant="outline" className="flex-1">استخدام ساعات</Button>
      </CardFooter>
    </Card>
  );
}
