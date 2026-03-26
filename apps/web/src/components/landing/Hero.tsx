import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/constants/landing";

const trustBullets = [
  "Live online classes for all 4 IELTS modules",
  "Personal feedback on speaking and writing",
  "Structured preparation from your first session",
];

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 text-xs tracking-wide uppercase">
          Online IELTS Coaching
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Prepare for IELTS.
          <br />
          Live Practice. Real Results.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Structured online IELTS coaching across all four modules — Speaking,
          Writing, Listening, and Reading. Live sessions, personal feedback,
          and a clear path to your target band score.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#assessment">Book Free IELTS Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="#programs">View Programs</Link>
          </Button>
        </div>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
          {trustBullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          Prefer to chat?{" "}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Message us on WhatsApp
          </Link>
        </p>
      </div>
    </section>
  );
}
