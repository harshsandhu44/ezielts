import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/constants/landing";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 text-xs tracking-wide uppercase">
          Complete IELTS Preparation
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Score Band 7+
          <br />
          in Every Module.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Expert IELTS coaching for Speaking, Listening, Writing, and Reading.
          Structured practice, real feedback, and a personalised plan to reach
          your target band.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#assessment">Book Free Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="#modules">Explore Modules</Link>
          </Button>
        </div>

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
