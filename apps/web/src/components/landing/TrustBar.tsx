import { trustSignals } from "@/lib/constants/landing";

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-muted/40 py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0">
          {trustSignals.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={
                  "flex items-center justify-center gap-2 py-1 " +
                  (index < trustSignals.length - 1
                    ? "md:border-r md:border-border"
                    : "")
                }
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
