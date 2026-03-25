import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants/landing";

export default function FinalCTA() {
  return (
    <section id="assessment" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to stop guessing and start improving?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Book your free speaking assessment. No commitment, no pressure — just
          a clear picture of where you are and exactly what to work on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book Free Speaking Assessment
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Free. No obligation. Takes 20 minutes.
        </p>
      </div>
    </section>
  );
}
