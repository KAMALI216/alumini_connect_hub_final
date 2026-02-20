import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    id: 1,
    title: "Annual Alumni Meet 2026",
    date: "March 15, 2026",
    time: "10:00 AM – 6:00 PM",
    location: "University Campus, Main Auditorium",
    type: "In-Person",
    attendees: 450,
    description: "Reconnect with batchmates and network.",
  },
  {
    id: 2,
    title: "Career Webinar: Breaking into AI/ML",
    date: "February 28, 2026",
    time: "7:00 PM – 8:30 PM",
    location: "Zoom",
    type: "Online",
    attendees: 230,
    description: "Industry experts share insights on AI careers.",
  },
];

const typeColor = {
  "In-Person": "bg-accent/10 text-accent",
  Online: "bg-primary/10 text-primary",
  Hybrid: "bg-accent/15 text-accent",
};

const Events = () => {
  const [registerEvent, setRegisterEvent] = useState(null); // ✅ fixed
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", batch: "" });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: `You have been registered for "${registerEvent?.title}".`,
    });
    setRegisterEvent(null);
    setFormData({ name: "", email: "", phone: "", batch: "" });
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-foreground">Events</h1>
        <p className="mt-1 text-muted-foreground">
          Upcoming events, webinars, and reunions.
        </p>

        <div className="mt-8 space-y-5">
          {events.map((e) => (
            <div key={e.id} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{e.title}</h2>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs ${typeColor[e.type]}`}>
                      {e.type}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {e.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {e.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {e.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" /> {e.attendees} registered
                    </span>
                  </div>
                </div>

                <Button onClick={() => setRegisterEvent(e)}>Register</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!registerEvent} onOpenChange={() => setRegisterEvent(null)}>
        <DialogContent>
          {registerEvent && (
            <>
              <DialogHeader>
                <DialogTitle>Register for Event</DialogTitle>
                <p className="text-sm text-muted-foreground">{registerEvent.title}</p>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  placeholder="Batch"
                  value={formData.batch}
                  onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                />
                <Button type="submit" className="w-full">
                  Confirm Registration
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Events;