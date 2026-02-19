import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Search, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { label: "Alumni Registered", value: "12,500+" },
  { label: "Companies Represented", value: "850+" },
  { label: "Events Hosted", value: "320+" },
  { label: "Active Connections", value: "45,000+" },
];

const features = [
  {
    icon: Search,
    title: "Find Alumni",
    description: "Search by company, domain, batch year, or role to find and connect with alumni.",
  },
  {
    icon: Calendar,
    title: "Events & Reunions",
    description: "Stay updated on upcoming alumni meetups, webinars, and campus reunions.",
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Discover placement trends, top recruiters, and highest packages across batches.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Build meaningful connections with seniors for mentorship and career guidance.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_87%_55%/0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Where Alumni
            <span className="text-gradient-gold"> Stay Connected</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
            A centralized platform to connect students with alumni, explore career paths,
            and build a thriving professional network.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/alumni">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Browse Alumni
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-12 relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-card p-6 text-center shadow-card animate-fade-in-up"
            >
              <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">
          Everything You Need
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          From finding mentors to attending events — all in one place.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">
            Ready to reconnect?
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Join thousands of alumni and students already building meaningful connections.
          </p>
          <Link to="/register">
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Join AlumniConnect
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
