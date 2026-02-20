import Layout from "@/components/Layout";
import { Users, UserPlus, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const networkData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "SDE-III at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    followers: 1240,
    following: true,
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "PM Lead at Microsoft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    followers: 980,
    following: true,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Data Scientist at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    followers: 850,
    following: false,
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "VP Engineering at Goldman Sachs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    followers: 1520,
    following: true,
  },
  {
    id: 5,
    name: "Ananya Gupta",
    role: "ML Engineer at Meta",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    followers: 670,
    following: false,
  },
  {
    id: 6,
    name: "Karthik Nair",
    role: "Tech Lead at Flipkart",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    followers: 430,
    following: true,
  },
  {
    id: 7,
    name: "Vikram Singh",
    role: "Hardware Engineer at Tesla",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    followers: 1890,
    following: false,
  },
  {
    id: 8,
    name: "Divya Joshi",
    role: "UX Designer at Adobe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    followers: 560,
    following: true,
  },
];

const Networking = () => {
  const [connections, setConnections] = useState(networkData);

  const toggleFollow = (id) => {
    setConnections((prev) =>
      prev.map((c) => (c.id === id ? { ...c, following: !c.following } : c))
    );
  };

  const followingList = connections.filter((c) => c.following);
  const suggestedList = connections.filter((c) => !c.following);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">My Network</h1>
            <p className="text-muted-foreground">People you follow and suggested connections.</p>
          </div>
        </div>

        {/* Following */}
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          Following ({followingList.length})
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {followingList.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border bg-card p-5 text-center shadow-card transition-all hover:shadow-card-hover"
            >
              <img
                src={c.image}
                alt={c.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <p className="mt-3 font-medium text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.followers} followers</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-3 w-full"
                onClick={() => toggleFollow(c.id)}
              >
                <UserCheck className="mr-1 h-3.5 w-3.5" /> Following
              </Button>
            </div>
          ))}
        </div>

        {/* Suggested */}
        {suggestedList.length > 0 && (
          <>
            <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
              Suggested Connections
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {suggestedList.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border bg-card p-5 text-center shadow-card transition-all hover:shadow-card-hover"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                  />
                  <p className="mt-3 font-medium text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.followers} followers</p>
                  <Button
                    size="sm"
                    className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => toggleFollow(c.id)}
                  >
                    <UserPlus className="mr-1 h-3.5 w-3.5" /> Follow
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Networking;
