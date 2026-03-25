import { problems } from "@/lib/constants/landing";

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Sound familiar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Most IELTS students hit the same walls. The problem is rarely effort
            — it&apos;s approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl border border-border bg-background"
              >
                <div className="shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm font-medium text-muted-foreground">
          If any of these hit home — you&apos;re in the right place.
        </p>
      </div>
    </section>
  );
}
