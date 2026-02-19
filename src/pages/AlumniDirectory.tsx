import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, MapPin, Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import { useState, useMemo } from "react";

const alumniData = [
  { id: 1, name: "Priya Sharma", batch: 2019, company: "Google", role: "SDE-III", domain: "Software", location: "Bangalore", package: "₹48 LPA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face", email: "priya.sharma@alumni.edu", bio: "Priya works on Google Cloud Platform's core infrastructure team. She specializes in distributed systems and has contributed to improving service reliability for millions of users. She is a Women Techmakers ambassador and leads a coding bootcamp for underprivileged students.", skills: ["Java", "Go", "Kubernetes", "GCP"] },
  { id: 2, name: "Arjun Patel", batch: 2018, company: "Microsoft", role: "PM Lead", domain: "Product", location: "Hyderabad", package: "₹42 LPA", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", email: "arjun.patel@alumni.edu", bio: "Arjun leads product strategy for Microsoft Teams' enterprise features. With a unique blend of technical depth and business acumen, he has driven products from 0 to 1 that serve over 50 million users.", skills: ["Product Strategy", "Agile", "Data Analytics", "Azure"] },
  { id: 3, name: "Sneha Reddy", batch: 2020, company: "Amazon", role: "Data Scientist", domain: "Data Science", location: "Bangalore", package: "₹38 LPA", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", email: "sneha.reddy@alumni.edu", bio: "Sneha builds machine learning models for Amazon's recommendation engine, directly impacting purchase decisions for millions of customers. Her research on bias detection in AI has been published in top-tier conferences.", skills: ["Python", "TensorFlow", "SQL", "AWS"] },
  { id: 4, name: "Rahul Verma", batch: 2015, company: "Goldman Sachs", role: "VP Engineering", domain: "Finance", location: "Mumbai", package: "₹55 LPA", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", email: "rahul.verma@alumni.edu", bio: "Rahul heads the quantitative trading infrastructure at Goldman Sachs Mumbai. He has built low-latency trading systems processing millions of transactions daily.", skills: ["C++", "Python", "System Design", "FinTech"] },
  { id: 5, name: "Ananya Gupta", batch: 2021, company: "Meta", role: "ML Engineer", domain: "AI/ML", location: "Menlo Park", package: "₹36 LPA", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", email: "ananya.gupta@alumni.edu", bio: "Ananya works on generative AI research at Meta's FAIR lab. She has co-authored papers on large language models and multimodal learning.", skills: ["PyTorch", "NLP", "Computer Vision", "Research"] },
  { id: 6, name: "Karthik Nair", batch: 2017, company: "Flipkart", role: "Tech Lead", domain: "Software", location: "Bangalore", package: "₹32 LPA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", email: "karthik.nair@alumni.edu", bio: "Karthik leads Flipkart's checkout engineering team, optimizing for scale during Big Billion Days. He has mentored over 30 junior engineers.", skills: ["Java", "Microservices", "React", "Scalability"] },
  { id: 7, name: "Meera Iyer", batch: 2022, company: "Deloitte", role: "Consultant", domain: "Consulting", location: "Chennai", package: "₹18 LPA", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face", email: "meera.iyer@alumni.edu", bio: "Meera advises Fortune 500 clients on digital transformation strategies at Deloitte. She specializes in cloud migration and process automation.", skills: ["Strategy", "Cloud", "Digital Transformation", "SAP"] },
  { id: 8, name: "Vikram Singh", batch: 2016, company: "Tesla", role: "Hardware Engineer", domain: "Hardware", location: "Austin", package: "₹60 LPA", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face", email: "vikram.singh@alumni.edu", bio: "Vikram leads the hardware integration team at Tesla's Gigafactory. He has filed 12 patents in power electronics and mentors engineering students.", skills: ["VLSI", "Embedded Systems", "Power Electronics", "FPGA"] },
  { id: 9, name: "Divya Joshi", batch: 2019, company: "Adobe", role: "UX Designer", domain: "Design", location: "Noida", package: "₹28 LPA", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", email: "divya.joshi@alumni.edu", bio: "Divya designs user experiences for Adobe Creative Cloud. She has a keen eye for accessibility and has won multiple design awards for inclusive design.", skills: ["Figma", "User Research", "Prototyping", "Accessibility"] },
];

const domains = ["All", "Software", "Product", "Data Science", "Finance", "AI/ML", "Consulting", "Hardware", "Design"];

const AlumniDirectory = () => {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");
  const [selectedAlumni, setSelectedAlumni] = useState<typeof alumniData[0] | null>(null);

  const filtered = useMemo(() => {
    return alumniData.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.company.toLowerCase().includes(search.toLowerCase()) ||
        a.role.toLowerCase().includes(search.toLowerCase());
      const matchesDomain = domain === "All" || a.domain === domain;
      return matchesSearch && matchesDomain;
    });
  }, [search, domain]);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-foreground">Alumni Directory</h1>
        <p className="mt-1 text-muted-foreground">Search and connect with alumni across companies and domains.</p>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or role..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={domain} onValueChange={setDomain}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Domain" />
            </SelectTrigger>
            <SelectContent>
              {domains.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <div
              key={a.id}
              onClick={() => setSelectedAlumni(a)}
              className="group cursor-pointer rounded-xl border bg-card p-5 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="flex items-start gap-3">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">{a.name}</p>
                  <p className="text-sm text-muted-foreground">Batch {a.batch}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{a.role} at <strong className="text-foreground">{a.company}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{a.location}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {a.domain}
                </span>
                <span className="text-sm font-semibold text-accent">{a.package}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center text-muted-foreground">
              No alumni found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Alumni Detail Dialog */}
      <Dialog open={!!selectedAlumni} onOpenChange={() => setSelectedAlumni(null)}>
        <DialogContent className="max-w-lg">
          {selectedAlumni && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedAlumni.image}
                    alt={selectedAlumni.name}
                    className="h-16 w-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <DialogTitle className="font-display text-xl">{selectedAlumni.name}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{selectedAlumni.role} at {selectedAlumni.company}</p>
                  </div>
                </div>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" /> Batch {selectedAlumni.batch}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {selectedAlumni.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> {selectedAlumni.email}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Package</p>
                  <p className="text-lg font-bold text-accent">{selectedAlumni.package}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">About</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selectedAlumni.bio}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Skills</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedAlumni.skills.map((s) => (
                      <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default AlumniDirectory;
