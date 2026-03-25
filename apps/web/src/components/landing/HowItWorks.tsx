import Link from "next/link";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/constants/landing";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three steps from where you are now to where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step) => (
            <div key={step.number} className="p-6 rounded-xl border border-border bg-background">
              <span className="text-4xl font-bold text-primary/20 leading-none block mb-4">
                {step.number}
              </span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="#assessment">Book Free Assessment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
