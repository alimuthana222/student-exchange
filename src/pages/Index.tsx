import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, GraduationCap, Languages, LayoutDashboard, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { SkillCard } from "@/components/skills/SkillCard";
import { ListingCard } from "@/components/marketplace/ListingCard";
import { TimeBankCard } from "@/components/timebank/TimeBankCard";

const Index = () => {
  // Featured skills
  const featuredSkills = [
    {
      id: "1",
      title: "تعليم خصوصي للرياضيات",
      category: "تدريس",
      description: "مساعدة في حل المسائل الرياضية للمستوى الجامعي. متخصص في التفاضل والتكامل.",
      hourlyRate: 2,
      provider: {
        name: "أحمد محمد",
        university: "جامعة الملك سعود",
      },
    },
    {
      id: "2",
      title: "تصميم شعارات وهويات بصرية",
      category: "تصميم",
      description: "خبرة 3 سنوات في تصميم الشعارات والهويات البصرية للمشاريع الطلابية والشركات الناشئة.",
      hourlyRate: 3,
      provider: {
        name: "سارة عبدالله",
        university: "جامعة الأميرة نورة",
      },
    },
    {
      id: "3",
      title: "برمجة تطبيقات الويب",
      category: "برمجة",
      description: "تطوير واجهات المستخدم باستخدام React و TypeScript. مساعدة في مشاريع التخرج البرمجية.",
      hourlyRate: 3,
      provider: {
        name: "خالد العمري",
        university: "جامعة الملك فهد",
      },
    },
  ];
  
  // Featured marketplace listings
  const featuredListings = [
    {
      id: "1",
      title: "مساعدة في مشروع برمجي",
      type: "need" as const,
      category: "برمجة",
      description: "أحتاج مساعدة في تطوير تطبيق موبايل باستخدام React Native لمشروع التخرج.",
      hourlyRate: 3,
      postedBy: {
        name: "أحمد محمد",
        university: "جامعة الملك سعود",
      },
    },
    {
      id: "2",
      title: "تدريس الإحصاء التطبيقي",
      type: "offer" as const,
      category: "تدريس",
      description: "أقدم دروس في الإحصاء التطبيقي وتحليل البيانات باستخدام R وSPSS للطلاب في التخصصات العلمية.",
      hourlyRate: 2,
      postedBy: {
        name: "خالد العمري",
        university: "جامعة الملك فهد",
      },
    },
  ];

  // Skill categories
  const skillCategories = [
    {
      icon: <Code className="h-10 w-10 text-maharat-blue" />,
      name: "برمجة",
      description: "تطوير الواجهات، تطبيقات الموبايل، قواعد البيانات، وتطوير المواقع",
    },
    {
      icon: <PenTool className="h-10 w-10 text-maharat-orange" />,
      name: "تصميم",
      description: "تصميم الشعارات، الهويات البصرية، الإعلانات، والمواقع الإلكترونية",
    },
    {
      icon: <Languages className="h-10 w-10 text-maharat-purple" />,
      name: "ترجمة",
      description: "ترجمة النصوص، الأبحاث العلمية، المقالات، والمحتوى التسويقي",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-maharat-teal" />,
      name: "تدريس",
      description: "دروس خصوصية في مختلف المواد الدراسية والتخصصات الجامعية",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Time Bank Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">نظام بنك الوقت</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  بنك الوقت هو نظام تبادل الخدمات بين الطلاب بشكل عادل. يمكنك كسب ساعات من خلال تقديم مهاراتك للآخرين، واستخدام هذه الساعات للاستفادة من مهارات زملائك.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>ساعة بساعة: قدّم ساعة من وقتك، واحصل على ساعة من وقت زميلك</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>تبادل المهارات بعدالة تامة بين جميع التخصصات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>تراكم الساعات في رصيدك لاستخدامها متى احتجت إليها</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link to="/timebank">
                    استكشف بنك الوقت
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <TimeBankCard hoursEarned={6} hoursSpent={3} pendingHours={1} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Skill Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">استكشف فئات المهارات</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تصفح مجموعة متنوعة من المهارات التي يقدمها زملاؤك الطلاب في مختلف المجالات
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="mb-2">{category.icon}</div>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full">
                      <Link to={`/skills`} className="flex justify-center">
                        تصفح المهارات
                        <ArrowRight className="mr-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Skills */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">مهارات مميزة</h2>
              <Button variant="outline" asChild>
                <Link to="/skills">عرض جميع المهارات</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredSkills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Marketplace Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">أحدث طلبات وعروض السوق</h2>
              <Button variant="outline" asChild>
                <Link to="/marketplace">زيارة السوق</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">انضم لمجتمع تبادل المهارات</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              سجل الآن وابدأ في تبادل المهارات مع زملائك الطلاب. قدّم مهاراتك واستفد من مهارات الآخرين في نظام عادل وفعال.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">إنشاء حساب</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground" asChild>
                <Link to="/skills">استكشف المهارات</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2025 منصة مهارات - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
