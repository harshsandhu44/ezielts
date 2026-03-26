import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/constants/landing";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Real students. Real results.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fluency, frameworks, and feedback that moved the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col bg-background">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="w-5 h-5 text-primary/40 mb-4 shrink-0" />
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-6">
                  {item.quote}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-sm">{item.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {item.detail}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
