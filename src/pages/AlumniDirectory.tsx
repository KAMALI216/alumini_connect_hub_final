import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useState, useMemo } from "react";

const alumniData = [
  { id: 1, name: "Priya Sharma", batch: 2019, company: "Google", role: "SDE-III", domain: "Software", location: "Bangalore", package: "₹48 LPA" },
  { id: 2, name: "Arjun Patel", batch: 2018, company: "Microsoft", role: "PM Lead", domain: "Product", location: "Hyderabad", package: "₹42 LPA" },
  { id: 3, name: "Sneha Reddy", batch: 2020, company: "Amazon", role: "Data Scientist", domain: "Data Science", location: "Bangalore", package: "₹38 LPA" },
  { id: 4, name: "Rahul Verma", batch: 2015, company: "Goldman Sachs", role: "VP Engineering", domain: "Finance", location: "Mumbai", package: "₹55 LPA" },
  { id: 5, name: "Ananya Gupta", batch: 2021, company: "Meta", role: "ML Engineer", domain: "AI/ML", location: "Menlo Park", package: "₹36 LPA" },
  { id: 6, name: "Karthik Nair", batch: 2017, company: "Flipkart", role: "Tech Lead", domain: "Software", location: "Bangalore", package: "₹32 LPA" },
  { id: 7, name: "Meera Iyer", batch: 2022, company: "Deloitte", role: "Consultant", domain: "Consulting", location: "Chennai", package: "₹18 LPA" },
  { id: 8, name: "Vikram Singh", batch: 2016, company: "Tesla", role: "Hardware Engineer", domain: "Hardware", location: "Austin", package: "₹60 LPA" },
  { id: 9, name: "Divya Joshi", batch: 2019, company: "Adobe", role: "UX Designer", domain: "Design", location: "Noida", package: "₹28 LPA" },
];

const domains = ["All", "Software", "Product", "Data Science", "Finance", "AI/ML", "Consulting", "Hardware", "Design"];

const AlumniDirectory = () => {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");

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
              className="group rounded-xl border bg-card p-5 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {a.name.split(" ").map((n) => n[0]).join("")}
                </div>
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
    </Layout>
  );
};

export default AlumniDirectory;
