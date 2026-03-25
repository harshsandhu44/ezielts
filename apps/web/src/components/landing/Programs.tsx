import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { programs } from "@/lib/constants/landing";
import { cn } from "@/lib/utils";

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Programs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the program that matches where you are and where you need to
            be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.name}
              className={cn(
                "flex flex-col",
                program.highlight && "border-primary shadow-sm"
              )}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  {program.highlight && (
                    <Badge className="text-xs shrink-0">Most popular</Badge>
                  )}
                </div>
                <Badge variant="secondary" className="w-fit text-xs">
                  {program.tag}
                </Badge>
                <CardDescription className="mt-2 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {program.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={program.highlight ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href="#assessment">Book Free Assessment</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Not sure which program is right for you? The free assessment will make
          it clear.
        </p>
      </div>
    </section>
  );
}
