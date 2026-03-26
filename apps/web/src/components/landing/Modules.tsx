import { Check } from "lucide-react";
import { modules } from "@/lib/constants/landing";

export default function Modules() {
  return (
    <section id="modules" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            All four IELTS modules, covered
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            EZIELTS prepares you for every part of the exam — not just one.
            Expert coaching for Speaking, Listening, Writing, and Reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="p-6 rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {module.description}
                </p>
                <ul className="space-y-1.5">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
