
import { Navbar } from "@/components/layout/Navbar";
import { SkillCard, SkillCardProps } from "@/components/skills/SkillCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Brain, Filter, Search } from "lucide-react";

// Sample data for demonstration
const SKILLS_DATA: SkillCardProps[] = [
  {
    id: "1",
    title: "تعليم خصوصي للرياضيات",
    category: "تدريس",
    description: "مساعدة في حل المسائل الرياضية للمستوى الجامعي. أستطيع مساعدتك في التفاضل والتكامل والجبر الخطي والإحصاء.",
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
  {
    id: "4",
    title: "ترجمة نصوص علمية",
    category: "ترجمة",
    description: "ترجمة النصوص والأبحاث العلمية من الإنجليزية إلى العربية وبالعكس. تخصص في المصطلحات الطبية والهندسية.",
    hourlyRate: 2,
    provider: {
      name: "نورة السالم",
      university: "جامعة الملك عبدالعزيز",
    },
  },
  {
    id: "5",
    title: "تصميم العروض التقديمية",
    category: "تصميم",
    description: "إنشاء عروض تقديمية احترافية لمشاريع التخرج والندوات العلمية باستخدام PowerPoint وCanva.",
    hourlyRate: 1,
    provider: {
      name: "فهد العتيبي",
      university: "جامعة القصيم",
    },
  },
  {
    id: "6",
    title: "تدقيق لغوي للأبحاث",
    category: "تحرير",
    description: "مراجعة وتدقيق لغوي للأبحاث العلمية والمقالات باللغتين العربية والإنجليزية.",
    hourlyRate: 2,
    provider: {
      name: "هدى الزهراني",
      university: "جامعة طيبة",
    },
  },
];

const CATEGORIES = [
  "الكل",
  "تدريس",
  "برمجة",
  "تصميم",
  "ترجمة",
  "تحرير",
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">استكشف المهارات</h1>
            </div>
            <Button>إضافة مهارة جديدة</Button>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ابحث عن مهارة..." className="pl-10" />
            </div>
            
            <div className="flex gap-2">
              <Select defaultValue="الكل">
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="تصنيف" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="الأحدث">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="الترتيب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="الأحدث">الأحدث</SelectItem>
                  <SelectItem value="الأقدم">الأقدم</SelectItem>
                  <SelectItem value="الأقل سعراً">الأقل سعراً</SelectItem>
                  <SelectItem value="الأعلى سعراً">الأعلى سعراً</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SKILLS_DATA.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
