import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Alumni Meet 2026",
    date: "March 15, 2026",
    time: "10:00 AM – 6:00 PM",
    location: "University Campus, Main Auditorium",
    type: "In-Person",
    attendees: 450,
    description: "Reconnect with batchmates, network with seniors, and celebrate our growing alumni community.",
  },
  {
    id: 2,
    title: "Career Webinar: Breaking into AI/ML",
    date: "February 28, 2026",
    time: "7:00 PM – 8:30 PM",
    location: "Zoom (link shared upon registration)",
    type: "Online",
    attendees: 230,
    description: "Industry experts from Google and OpenAI share insights on building a career in AI and machine learning.",
  },
  {
    id: 3,
    title: "Startup Showcase & Pitch Night",
    date: "April 5, 2026",
    time: "5:00 PM – 9:00 PM",
    location: "Innovation Hub, Block C",
    type: "Hybrid",
    attendees: 180,
    description: "Alumni-founded startups pitch to investors and mentors. Great networking opportunity for aspiring entrepreneurs.",
  },
  {
    id: 4,
    title: "Women in Tech Panel",
    date: "March 22, 2026",
    time: "6:00 PM – 7:30 PM",
    location: "Online — Microsoft Teams",
    type: "Online",
    attendees: 310,
    description: "Leading women alumni in tech share their journeys, challenges, and advice for the next generation.",
  },
];

const typeColor: Record<string, string> = {
  "In-Person": "bg-accent/10 text-accent",
  "Online": "bg-primary/10 text-primary",
  "Hybrid": "bg-accent/15 text-accent",
};

const Events = () => (
  <Layout>
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-foreground">Events</h1>
      <p className="mt-1 text-muted-foreground">Upcoming events, webinars, and reunions for the alumni network.</p>

      <div className="mt-8 space-y-5">
        {events.map((e) => (
          <div
            key={e.id}
            className="group rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-xl font-semibold text-foreground">{e.title}</h2>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColor[e.type]}`}>
                    {e.type}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {e.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {e.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> {e.attendees} registered
                  </span>
                </div>
              </div>
              <Button className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90">
                Register
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Events;
