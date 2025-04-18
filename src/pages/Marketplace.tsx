
import { Navbar } from "@/components/layout/Navbar";
import { ListingCard, ListingCardProps } from "@/components/marketplace/ListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownToLine, ArrowUpFromLine, Filter, Search, Users } from "lucide-react";

// Sample data for marketplace listings
const MARKETPLACE_DATA: ListingCardProps[] = [
  {
    id: "1",
    title: "مساعدة في مشروع برمجي",
    type: "need",
    category: "برمجة",
    description: "أحتاج مساعدة في تطوير تطبيق موبايل باستخدام React Native لمشروع التخرج. المشروع عبارة عن تطبيق إدارة مهام.",
    hourlyRate: 3,
    postedBy: {
      name: "أحمد محمد",
      university: "جامعة الملك سعود",
    },
  },
  {
    id: "2",
    title: "تصميم شعار للنادي العلمي",
    type: "need",
    category: "تصميم",
    description: "مطلوب تصميم شعار للنادي العلمي بكلية الحاسب. يجب أن يعكس الشعار التخصصات التقنية والابتكار.",
    hourlyRate: 2,
    postedBy: {
      name: "منى الحربي",
      university: "جامعة الأميرة نورة",
    },
  },
  {
    id: "3",
    title: "تدريس الإحصاء التطبيقي",
    type: "offer",
    category: "تدريس",
    description: "أقدم دروس في الإحصاء التطبيقي وتحليل البيانات باستخدام R وSPSS للطلاب في التخصصات العلمية.",
    hourlyRate: 2,
    postedBy: {
      name: "خالد العمري",
      university: "جامعة الملك فهد",
    },
  },
  {
    id: "4",
    title: "ترجمة بحث علمي",
    type: "offer",
    category: "ترجمة",
    description: "أقدم خدمة ترجمة الأبحاث العلمية من الإنجليزية إلى العربية وبالعكس. خبرة في المصطلحات الطبية والهندسية.",
    hourlyRate: 3,
    postedBy: {
      name: "نورة السالم",
      university: "جامعة الملك عبدالعزيز",
    },
  },
  {
    id: "5",
    title: "تصميم عروض تقديمية",
    type: "offer",
    category: "تصميم",
    description: "أقدم خدمة تصميم العروض التقديمية الاحترافية للمشاريع والأبحاث باستخدام PowerPoint وCanva.",
    hourlyRate: 1,
    postedBy: {
      name: "فهد العتيبي",
      university: "جامعة القصيم",
    },
  },
  {
    id: "6",
    title: "مساعدة في كتابة بحث تخرج",
    type: "need",
    category: "تحرير",
    description: "أحتاج مساعدة في تنسيق وتحرير بحث التخرج في تخصص إدارة الأعمال. البحث عن ريادة الأعمال في المملكة.",
    hourlyRate: 4,
    postedBy: {
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

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">سوق المهارات</h1>
            </div>
            <div className="flex gap-2">
              <Button>
                <ArrowUpFromLine className="h-4 w-4 mr-1" />
                نشر عرض
              </Button>
              <Button variant="outline">
                <ArrowDownToLine className="h-4 w-4 mr-1" />
                نشر طلب
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ابحث في السوق..." className="pl-10" />
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
          
          {/* Tabs and Marketplace Grid */}
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="offers">العروض</TabsTrigger>
              <TabsTrigger value="needs">الطلبات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MARKETPLACE_DATA.map((listing) => (
                  <ListingCard key={listing.id} {...listing} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="offers" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MARKETPLACE_DATA.filter(listing => listing.type === 'offer').map((listing) => (
                  <ListingCard key={listing.id} {...listing} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="needs" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MARKETPLACE_DATA.filter(listing => listing.type === 'need').map((listing) => (
                  <ListingCard key={listing.id} {...listing} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
