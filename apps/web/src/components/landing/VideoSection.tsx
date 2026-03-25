import { YOUTUBE_VIDEO_ID } from "@/lib/constants/landing";

export default function VideoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See what a session looks like
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Watch a real IELTS Speaking practice session with feedback.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="EZIELTS Speaking Session Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          This is what structured, feedback-driven practice looks like.
        </p>
      </div>
    </section>
  );
}
