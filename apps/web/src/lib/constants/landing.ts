import {
  BrainCog,
  Lightbulb,
  MessageSquareOff,
  ClipboardList,
  Mic,
  Target,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ProgramItem {
  name: string;
  tag: string;
  description: string;
  includes: string[];
  highlight?: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  detail: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER"; // e.g. "919876543210"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const YOUTUBE_VIDEO_ID = "YOUTUBE_VIDEO_ID"; // Replace with real video ID
export const CONTACT_EMAIL = "hello@ezielts.com"; // Replace with real email

export const problems: ProblemItem[] = [
  {
    icon: BrainCog,
    title: "You rely on memorised answers",
    description:
      "Scripted responses sound unnatural and examiners can tell. When the question shifts, you freeze.",
  },
  {
    icon: Lightbulb,
    title: "You run out of things to say",
    description:
      "You start strong, then trail off. Extending answers to 2 minutes feels impossible without a framework.",
  },
  {
    icon: MessageSquareOff,
    title: "Grammar slows you down",
    description:
      "You stop mid-sentence to fix grammar, breaking your fluency and costing you precious band score points.",
  },
  {
    icon: ClipboardList,
    title: "Feedback is too vague",
    description:
      '"Your speaking needs improvement" tells you nothing. You need specific, actionable feedback to actually improve.',
  },
];

export const benefits: BenefitItem[] = [
  {
    icon: Mic,
    title: "Natural speaking framework",
    description:
      "A structured approach to answering any question naturally — without memorising scripts.",
  },
  {
    icon: Target,
    title: "Band 7+ answer structures",
    description:
      "Learn exactly how to extend, organise, and deliver answers that meet Band 7 criteria.",
  },
  {
    icon: BookOpen,
    title: "Fluent, topic vocabulary",
    description:
      "Build vocabulary that actually comes to you in the exam — not a word list you've crammed.",
  },
  {
    icon: MessageSquare,
    title: "Real feedback, specific improvements",
    description:
      "Detailed session feedback pinpointing fluency, lexical resource, grammar, and pronunciation.",
  },
];

export const steps: StepItem[] = [
  {
    number: "01",
    title: "Book your free speaking assessment",
    description:
      "A 20-minute session where we listen to you speak, assess your current band, and identify your biggest blockers.",
  },
  {
    number: "02",
    title: "Get a personalised study plan",
    description:
      "Based on your assessment, you get a clear, targeted plan covering what to work on and in what order.",
  },
  {
    number: "03",
    title: "Practice, get feedback, improve",
    description:
      "Regular practice sessions with structured feedback. You track your progress and see your band score climb.",
  },
];

export const programs: ProgramItem[] = [
  {
    name: "Foundation",
    tag: "Band 5 → 6",
    description:
      "For students starting out or stuck below Band 6. Build core speaking habits from the ground up.",
    includes: [
      "Fundamentals of IELTS Speaking",
      "Part 1, 2 & 3 answer frameworks",
      "Weekly practice sessions",
      "Written session feedback",
    ],
  },
  {
    name: "Accelerator",
    tag: "Band 6 → 7+",
    description:
      "For students close to Band 7 who need to close the gap. Targeted work on fluency, vocabulary, and structure.",
    includes: [
      "Everything in Foundation",
      "Band 7+ vocabulary strategies",
      "Fluency and coherence drills",
      "Mock exam with full debrief",
    ],
    highlight: true,
  },
  {
    name: "Intensive",
    tag: "Fast-track",
    description:
      "For students with a deadline. Focused, high-frequency sessions designed to maximise improvement quickly.",
    includes: [
      "Everything in Accelerator",
      "Multiple sessions per week",
      "Priority scheduling",
      "Exam-day strategy session",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I had been stuck at Band 6.5 for two attempts. After working through the answer framework, I finally understood what was holding me back. Got 7.5 on my next attempt.",
    name: "Priya M.",
    detail: "Band 6.5 → 7.5",
  },
  {
    quote:
      "The feedback was specific and honest — not just encouragement. I knew exactly what to fix after every session. That made all the difference.",
    name: "Arun K.",
    detail: "Band 6 → 7",
  },
  {
    quote:
      "I stopped memorising answers completely and started actually thinking in English. My fluency score jumped almost immediately.",
    name: "Tanvir H.",
    detail: "Band 5.5 → 7",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What happens in the free speaking assessment?",
    answer:
      "It's a 20-minute online session. You'll answer IELTS-style speaking questions while we listen and assess. At the end, you'll get a clear picture of your current band, your specific weaknesses, and what to work on first.",
  },
  {
    question: "Who is this for?",
    answer:
      "EZIELTS is for students targeting Band 7 or above in IELTS Speaking. Whether you're just starting preparation or have already taken the exam, if speaking is your weak point — this is for you.",
  },
  {
    question: "How long are the sessions?",
    answer:
      "Standard sessions are 60 minutes. Intensive students typically do 2–3 sessions per week. Session length and frequency are discussed after your assessment.",
  },
  {
    question: "Are sessions online or in-person?",
    answer:
      "All sessions are conducted online via video call. This means you can join from anywhere, and sessions are scheduled around your availability.",
  },
  {
    question: "How quickly can I expect to improve?",
    answer:
      "Most students who practise consistently see measurable improvement within 4–6 weeks. The timeline depends on your current band, how often you practise, and how much you apply feedback between sessions.",
  },
  {
    question: "Do I need to memorise answers or scripts?",
    answer:
      "No — and that's the point. EZIELTS is built around natural, spontaneous speaking. You'll learn frameworks and structures, not scripts. Memorised answers are a trap, and we help you get out of it.",
  },
  {
    question: "What makes EZIELTS different from other IELTS coaching?",
    answer:
      "Most coaching focuses on memorisation and generic tips. EZIELTS focuses specifically on speaking — with structured frameworks, real practice under exam conditions, and detailed feedback on exactly what's holding your score back.",
  },
];
