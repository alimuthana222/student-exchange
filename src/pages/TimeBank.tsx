
import { Navbar } from "@/components/layout/Navbar";
import { TimeBankCard } from "@/components/timebank/TimeBankCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, Clock } from "lucide-react";

export default function TimeBank() {
  // Sample data for transactions
  const transactions = [
    { id: 1, title: "تدريس خصوصي للرياضيات", with: "أحمد محمد", type: "earned", hours: 2, date: "2025-04-12" },
    { id: 2, title: "مساعدة في تصميم العرض التقديمي", with: "سارة علي", type: "spent", hours: 1, date: "2025-04-10" },
    { id: 3, title: "إصلاح مشكلة في مشروع برمجي", with: "خالد العمري", type: "earned", hours: 3, date: "2025-04-08" },
    { id: 4, title: "ترجمة ملخص بحث", with: "نورة السالم", type: "spent", hours: 2, date: "2025-04-05" },
    { id: 5, title: "مراجعة مقال علمي", with: "فهد العتيبي", type: "earned", hours: 1, date: "2025-04-01" },
  ];

  // User stats
  const userStats = {
    hoursEarned: 6,
    hoursSpent: 3,
    pendingHours: 1,
  };

  // Top helpers and seekers
  const topStudents = [
    { name: "منى الحربي", university: "جامعة الملك سعود", hours: 12 },
    { name: "خالد العمري", university: "جامعة الملك فهد", hours: 10 },
    { name: "سارة علي", university: "جامعة الأميرة نورة", hours: 9 },
    { name: "أحمد محمد", university: "جامعة الملك سعود", hours: 8 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">بنك الوقت</h1>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <TimeBankCard {...userStats} />
              
              <div className="mt-8">
                <Tabs defaultValue="all">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">سجل المعاملات</h2>
                    <TabsList>
                      <TabsTrigger value="all">الكل</TabsTrigger>
                      <TabsTrigger value="earned">اكتسبت</TabsTrigger>
                      <TabsTrigger value="spent">أنفقت</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="all" className="mt-0">
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y">
                          {transactions.map(transaction => (
                            <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'}`}>
                                  {transaction.type === 'earned' ? (
                                    <ArrowUp className="h-4 w-4 text-green-600" />
                                  ) : (
                                    <ArrowDown className="h-4 w-4 text-red-600" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium">{transaction.title}</div>
                                  <div className="text-sm text-muted-foreground">مع: {transaction.with}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`font-medium ${transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                                  {transaction.type === 'earned' ? '+' : '-'}{transaction.hours} ساعة
                                </div>
                                <div className="text-sm text-muted-foreground">{transaction.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="earned" className="mt-0">
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y">
                          {transactions.filter(t => t.type === 'earned').map(transaction => (
                            <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-green-100">
                                  <ArrowUp className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                  <div className="font-medium">{transaction.title}</div>
                                  <div className="text-sm text-muted-foreground">مع: {transaction.with}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium text-green-600">
                                  +{transaction.hours} ساعة
                                </div>
                                <div className="text-sm text-muted-foreground">{transaction.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="spent" className="mt-0">
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y">
                          {transactions.filter(t => t.type === 'spent').map(transaction => (
                            <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-red-100">
                                  <ArrowDown className="h-4 w-4 text-red-600" />
                                </div>
                                <div>
                                  <div className="font-medium">{transaction.title}</div>
                                  <div className="text-sm text-muted-foreground">مع: {transaction.with}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium text-red-600">
                                  -{transaction.hours} ساعة
                                </div>
                                <div className="text-sm text-muted-foreground">{transaction.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>الأكثر نشاطاً</CardTitle>
                  <CardDescription>الطلاب الأكثر نشاطاً في بنك الوقت</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea>
                    <div className="space-y-4">
                      {topStudents.map((student, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center rounded-full h-8 w-8 bg-primary/10 text-primary font-medium">
                              {i + 1}
                            </div>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-xs text-muted-foreground">{student.university}</div>
                            </div>
                          </div>
                          <div className="font-medium">{student.hours} ساعة</div>
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">عرض المزيد</Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 grid gap-4">
                <Button className="w-full">تبادل مهاراتك</Button>
                <Button variant="outline" className="w-full">استكشف المهارات</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
