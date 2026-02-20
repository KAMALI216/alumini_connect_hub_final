import Layout from "@/components/Layout";
import { Users, Briefcase, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Total Alumni", value: "12,534", icon: Users, change: "+124 this month" },
  { label: "Top Package", value: "₹48 LPA", icon: TrendingUp, change: "Google — Batch 2023" },
  { label: "Companies", value: "856", icon: Briefcase, change: "+18 new" },
  { label: "Upcoming Events", value: "5", icon: Calendar, change: "Next: Alumni Meet 2026" },
];

const topAlumni = [
  { name: "Priya Sharma", company: "Google", role: "SDE-III", batch: 2019, package: "₹48 LPA" },
  { name: "Arjun Patel", company: "Microsoft", role: "PM Lead", batch: 2018, package: "₹42 LPA" },
  { name: "Sneha Reddy", company: "Amazon", role: "Data Scientist", batch: 2020, package: "₹38 LPA" },
  { name: "Rahul Verma", company: "Goldman Sachs", role: "VP Engineering", batch: 2015, package: "₹55 LPA" },
  { name: "Ananya Gupta", company: "Meta", role: "ML Engineer", batch: 2021, package: "₹36 LPA" },
];

const recentEvents = [
  { title: "Alumni Meet 2026", date: "Mar 15, 2026", type: "In-Person" },
  { title: "Career Webinar: AI/ML", date: "Feb 28, 2026", type: "Online" },
  { title: "Startup Showcase", date: "Apr 5, 2026", type: "Hybrid" },
];

const Dashboard = () => (
  <Layout>
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Welcome back! Here's an overview of the alumni network.</p>

      {/* Metrics */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
              <m.icon className="h-4 w-4 text-accent" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Top Alumni */}
        <div className="lg:col-span-2 rounded-xl border bg-card shadow-card">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Top Alumni by Package</h2>
            <Link to="/alumni" className="flex items-center gap-1 text-sm text-accent hover:underline">
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="divide-y">
            {topAlumni.map((a) => (
              <div key={a.name} className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {a.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.role} at {a.company} · Batch {a.batch}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-accent">{a.package}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div className="rounded-xl border bg-card shadow-card">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Upcoming Events</h2>
            <Link to="/events" className="flex items-center gap-1 text-sm text-accent hover:underline">
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="divide-y">
            {recentEvents.map((e) => (
              <div key={e.title} className="px-5 py-4">
                <p className="text-sm font-medium text-foreground">{e.title}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {e.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Dashboard;
