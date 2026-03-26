import {
  BrainCog,
  Clock,
  PenLine,
  Headphones,
  Mic,
  Target,
  GraduationCap,
  MessageSquare,
  BookOpen,
  CheckCircle,
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

export interface ModuleItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const WHATSAPP_NUMBER = "918423350000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const YOUTUBE_VIDEO_ID = "re3GmeM5JHU";
export const CONTACT_EMAIL = "hello@ezieltsonline.com";
export const SITE_URL = "https://www.ezieltsonline.com";

export const modules: ModuleItem[] = [
  {
    icon: Mic,
    title: "Speaking",
    description:
      "Develop natural fluency and confidence for all three parts of the IELTS Speaking exam.",
    features: [
      "Part 1, 2 & 3 answer frameworks",
      "Fluency and coherence drills",
      "Mock exams with full band feedback",
      "Pronunciation and grammar coaching",
    ],
  },
  {
    icon: Headphones,
    title: "Listening",
    description:
      "Build the skills to follow complex audio and answer accurately under time pressure.",
    features: [
      "All four section types covered",
      "Multiple choice, matching & completion strategies",
      "Note-taking and prediction techniques",
      "Practice with authentic IELTS recordings",
    ],
  },
  {
    icon: PenLine,
    title: "Writing",
    description:
      "Master Task 1 and Task 2 for both Academic and General Training with proven structures.",
    features: [
      "Task 1: graphs, charts, diagrams & letters",
      "Task 2: argument, discussion & problem essays",
      "Band 7+ essay structures and cohesion",
      "Detailed written feedback on every submission",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Learn to read strategically — find answers fast and handle every question type with confidence.",
    features: [
      "True/False/Not Given and Yes/No/Not Given",
      "Matching headings and features",
      "Skimming, scanning and close-reading tactics",
      "Time management across three passages",
    ],
  },
];

export const problems: ProblemItem[] = [
  {
    icon: BrainCog,
    title: "Speaking feels unnatural under pressure",
    description:
      "You know what you want to say, but under exam conditions the words don't come. Fluency drops and band score suffers.",
  },
  {
    icon: PenLine,
    title: "Your writing misses the task requirements",
    description:
      "Vague arguments, poor coherence, or not enough words. Writing is hard to self-diagnose without expert feedback.",
  },
  {
    icon: Clock,
    title: "Reading runs you out of time",
    description:
      "Three passages, 40 questions, 60 minutes. Without the right scanning strategies, time pressure causes costly mistakes.",
  },
  {
    icon: Headphones,
    title: "Listening trips you up on detail",
    description:
      "The audio plays once. Distractors, fast speech, and unfamiliar accents cause you to second-guess every answer.",
  },
];

export const benefits: BenefitItem[] = [
  {
    icon: GraduationCap,
    title: "Expert coaching across all 4 modules",
    description:
      "Dedicated tutors for Speaking, Listening, Writing, and Reading — so every skill gets the focused attention it needs.",
  },
  {
    icon: Target,
    title: "Personalised study plans",
    description:
      "Based on your assessment, you get a targeted plan covering exactly what to work on and in what order across all modules.",
  },
  {
    icon: MessageSquare,
    title: "Real feedback, specific improvements",
    description:
      "Detailed session and written feedback pinpointing the exact issues — not generic tips you've already heard.",
  },
  {
    icon: CheckCircle,
    title: "Proven band-score frameworks",
    description:
      "Structured approaches for every module — from essay templates to listening note-taking — that translate directly to higher bands.",
  },
];

export const steps: StepItem[] = [
  {
    number: "01",
    title: "Book your free IELTS assessment",
    description:
      "A 20-minute session where we assess your current level, identify your weak modules, and map the gap to your target band.",
  },
  {
    number: "02",
    title: "Get a personalised study plan",
    description:
      "Based on your assessment, you receive a clear, targeted plan covering all four modules in priority order.",
  },
  {
    number: "03",
    title: "Practice, get feedback, improve",
    description:
      "Regular sessions with structured feedback across Speaking, Writing, Listening, and Reading. Track progress and watch your band score climb.",
  },
];

export const programs: ProgramItem[] = [
  {
    name: "Foundation",
    tag: "Band 5 → 6",
    description:
      "For students starting out or stuck below Band 6. Build core skills across all four IELTS modules from the ground up.",
    includes: [
      "Introduction to all 4 IELTS modules",
      "Core frameworks for Speaking & Writing",
      "Listening and Reading strategy basics",
      "Weekly practice sessions with feedback",
    ],
  },
  {
    name: "Accelerator",
    tag: "Band 6 → 7+",
    description:
      "For students close to Band 7 who need to close the gap. Targeted work on fluency, task response, and exam strategy across all modules.",
    includes: [
      "Everything in Foundation",
      "Band 7+ Writing and Speaking structures",
      "Advanced Listening and Reading tactics",
      "Full mock exam with detailed debrief",
    ],
    highlight: true,
  },
  {
    name: "Intensive",
    tag: "Fast-track",
    description:
      "For students with a deadline. High-frequency sessions across all four modules designed to maximise improvement quickly.",
    includes: [
      "Everything in Accelerator",
      "Multiple sessions per week",
      "Priority scheduling and support",
      "Exam-day strategy session",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I had been stuck at Band 6.5 for two attempts. After working through the answer framework, I finally understood what was holding me back. Got 7.5 on my next attempt.",
    name: "Priya M.",
    detail: "Band 6.5 → 7.5 · Speaking",
  },
  {
    quote:
      "The writing feedback was specific and honest — not just encouragement. I knew exactly what to fix after every submission. That made all the difference.",
    name: "Arun K.",
    detail: "Band 6 → 7 · Writing",
  },
  {
    quote:
      "I stopped memorising answers completely and started actually thinking in English. My overall band jumped because my speaking and writing both improved.",
    name: "Tanvir H.",
    detail: "Band 5.5 → 7 · Overall",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What happens in the free IELTS assessment?",
    answer:
      "It's a 20-minute online session. We assess your current level across your weakest modules — typically Speaking and Writing — and give you a clear picture of your band, your specific blockers, and what to prioritise first.",
  },
  {
    question: "Do you cover all four IELTS modules?",
    answer:
      "Yes. EZIELTS provides coaching for Speaking, Listening, Writing, and Reading. Whether you need help with one module or all four, we build a personalised plan around your specific gaps.",
  },
  {
    question: "Who is this for?",
    answer:
      "EZIELTS is for students targeting Band 7 or above. Whether you're preparing for the first time or retaking the exam to improve a specific module, if IELTS is standing between you and your goal — this is for you.",
  },
  {
    question: "How long are the sessions?",
    answer:
      "Standard sessions are 60 minutes. Intensive students typically do 2–3 sessions per week. Session length, frequency, and module focus are agreed after your free assessment.",
  },
  {
    question: "Are sessions online or in-person?",
    answer:
      "All sessions are conducted online via video call. You can join from anywhere, and sessions are scheduled around your availability.",
  },
  {
    question: "How quickly can I expect to improve?",
    answer:
      "Most students who practise consistently see measurable improvement within 4–6 weeks. The timeline depends on your starting band, how often you practise, and how well you apply feedback between sessions.",
  },
  {
    question: "What makes EZIELTS different from other IELTS coaching?",
    answer:
      "Most coaching gives you generic tips and practice tests. EZIELTS gives you structured frameworks, real exam-condition practice, and specific feedback on exactly what is holding each of your module scores back.",
  },
];
