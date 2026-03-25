import Link from "next/link";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/constants/landing";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div className="max-w-xs">
            <Link href="/" className="font-bold text-lg tracking-tight block mb-2">
              EZ<span className="text-primary">IELTS</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IELTS Speaking training focused on natural fluency and Band 7+
              results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Navigate
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Contact
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EZIELTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
