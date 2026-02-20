import Layout from "@/components/Layout";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const trends = [
  {
    id: 1,
    title: "AI & Machine Learning Roles Surge by 45% in 2026",
    expert: "Dr. Kavitha Ranganathan",
    expertRole: "AI Research Lead, Google DeepMind",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    expertImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    summary: "The demand for AI/ML engineers has skyrocketed across sectors. Companies are increasingly looking for talent with expertise in large language models, computer vision, and reinforcement learning. Freshers with strong Python and PyTorch skills are being offered packages above ₹20 LPA.",
    tags: ["AI/ML", "Hiring Surge", "2026 Trend"],
  },
  {
    id: 2,
    title: "Cybersecurity: The Fastest Growing Tech Domain",
    expert: "Rajesh Khanna",
    expertRole: "CISO, Infosys",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=340&fit=crop",
    expertImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    summary: "With increasing cyber threats globally, cybersecurity roles have seen a 60% jump in placements. Companies are hiring security analysts, ethical hackers, and compliance officers at premium salaries. Certifications like CISSP and CEH significantly boost placement chances.",
    tags: ["Cybersecurity", "High Demand", "Certifications"],
  },
  {
    id: 3,
    title: "Product Management: The New Dream Role for Engineers",
    expert: "Meghna Agarwal",
    expertRole: "VP Product, Razorpay",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=340&fit=crop",
    expertImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    summary: "Product management has emerged as the most sought-after non-technical role among engineering graduates. Top companies are offering ₹25-40 LPA for PM roles. Skills in data analysis, user research, and agile methodologies are highly valued.",
    tags: ["Product Management", "Career Shift", "Top Packages"],
  },
  {
    id: 4,
    title: "Cloud & DevOps: Every Company is Hiring",
    expert: "Amit Desai",
    expertRole: "Cloud Architect, AWS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
    expertImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    summary: "Cloud computing and DevOps engineers continue to be in massive demand. AWS, Azure, and GCP certifications are proving to be career accelerators. Companies are offering remote-first roles with competitive packages starting at ₹15 LPA for freshers.",
    tags: ["Cloud", "DevOps", "Remote Work"],
  },
];

const IndustryInsights = () => (
  <Layout>
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
          <TrendingUp className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Industry Insights</h1>
          <p className="text-muted-foreground">Latest placement trends and expert perspectives.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {trends.map((t) => (
          <div
            key={t.id}
            className="group overflow-hidden rounded-xl border bg-card shadow-card transition-all hover:shadow-card-hover"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <h2 className="font-display text-lg font-bold text-white">{t.title}</h2>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3">
                <img
                  src={t.expertImage}
                  alt={t.expert}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.expert}</p>
                  <p className="text-xs text-muted-foreground">{t.expertRole}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default IndustryInsights;
