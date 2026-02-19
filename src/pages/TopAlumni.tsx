import Layout from "@/components/Layout";
import { Trophy, Briefcase, MapPin, GraduationCap } from "lucide-react";

const topAlumni = [
  {
    id: 1,
    name: "Vikram Singh",
    batch: 2016,
    company: "Tesla",
    role: "Hardware Engineer",
    domain: "Hardware",
    location: "Austin, USA",
    package: "₹60 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Vikram leads the hardware integration team at Tesla's Gigafactory in Austin. With over 8 years of experience in semiconductor design and embedded systems, he has filed 12 patents in power electronics. He mentors engineering students and actively contributes to open-source hardware projects.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    batch: 2015,
    company: "Goldman Sachs",
    role: "VP Engineering",
    domain: "Finance",
    location: "Mumbai, India",
    package: "₹55 LPA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Rahul heads the quantitative trading infrastructure at Goldman Sachs Mumbai. A passionate advocate for fintech innovation, he has built low-latency trading systems processing millions of transactions daily. He regularly speaks at finance and tech conferences across Asia.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    batch: 2019,
    company: "Google",
    role: "SDE-III",
    domain: "Software",
    location: "Bangalore, India",
    package: "₹48 LPA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "Priya works on Google Cloud Platform's core infrastructure team. She specializes in distributed systems and has contributed to improving service reliability for millions of users. She is a Women Techmakers ambassador and leads a coding bootcamp for underprivileged students.",
  },
  {
    id: 4,
    name: "Arjun Patel",
    batch: 2018,
    company: "Microsoft",
    role: "PM Lead",
    domain: "Product",
    location: "Hyderabad, India",
    package: "₹42 LPA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Arjun leads product strategy for Microsoft Teams' enterprise features. With a unique blend of technical depth and business acumen, he has driven products from 0 to 1 that serve over 50 million users. He hosts a podcast on product management and startup culture.",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    batch: 2020,
    company: "Amazon",
    role: "Data Scientist",
    domain: "Data Science",
    location: "Bangalore, India",
    package: "₹38 LPA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Sneha builds machine learning models for Amazon's recommendation engine, directly impacting purchase decisions for millions of customers. Her research on bias detection in AI has been published in top-tier conferences. She volunteers as a data literacy instructor.",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    batch: 2021,
    company: "Meta",
    role: "ML Engineer",
    domain: "AI/ML",
    location: "Menlo Park, USA",
    package: "₹36 LPA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    bio: "Ananya works on generative AI research at Meta's FAIR lab. Despite being a recent graduate, she has co-authored papers on large language models and multimodal learning. She actively mentors undergrads interested in AI research careers.",
  },
];

const TopAlumni = () => (
  <Layout>
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
          <Trophy className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Top Alumni by Package</h1>
          <p className="text-muted-foreground">Our highest-achieving alumni making an impact worldwide.</p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {topAlumni.map((a, i) => (
          <div
            key={a.id}
            className="group rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
          >
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="relative shrink-0">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-32 w-32 rounded-xl object-cover shadow-md"
                />
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow">
                  #{i + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-xl font-bold text-foreground">{a.name}</h2>
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 text-sm font-semibold text-accent">
                    {a.package}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" /> {a.role} at <strong className="text-foreground">{a.company}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {a.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" /> Batch {a.batch}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default TopAlumni;
