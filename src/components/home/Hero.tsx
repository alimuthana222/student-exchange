
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            منصة تبادل المهارات والخدمات للطلاب
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-muted-foreground">
            ساعد زملائك واستفد من مهاراتهم. نظام بنك الوقت يضمن تبادل عادل للخدمات بين الطلاب.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/register" className="flex items-center justify-center gap-2">
                ابدأ الآن
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/skills">استكشف المهارات</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 flow-root">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl bg-white/5 border p-6 sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg font-semibold leading-8">مهارات متنوعة</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
                تبادل المهارات في التصميم والبرمجة والترجمة والتدريس الخصوصي وأكثر
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border p-6 sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Clock className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg font-semibold leading-8">بنك الوقت</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
                بنك الوقت يضمن تبادل عادل للخدمات، ساعة بساعة
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border p-6 sm:p-8 text-center lg:col-span-1 sm:col-span-2 lg:col-start-auto">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg font-semibold leading-8">سوق الاحتياجات</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
                نشر احتياجاتك وعروضك في سوق مخصص للطلاب
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
