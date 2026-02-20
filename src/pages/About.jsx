import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Shield, Target } from "lucide-react";

const About = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">About AlumniConnect</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Building lifelong connections between students and alumni to create opportunities and foster a thriving professional network.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Target className="h-6 w-6 text-accent" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To bridge the gap between current students and alumni professionals, creating meaningful connections that drive career growth, mentorship, and lifelong relationships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 text-accent" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading platform where students discover opportunities, alumni share insights, and a vibrant community thrives through collaboration and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">How AlumniConnect Benefits You</h2>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-accent" />
                <CardTitle>For Students</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Connect with successful alumni in your field</li>
                  <li>• Access exclusive mentorship programs</li>
                  <li>• Discover internship and job opportunities</li>
                  <li>• Learn industry insights from professionals</li>
                  <li>• Build your professional network early</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-6 w-6 text-accent" />
                <CardTitle>For Alumni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Stay connected with your alma mater</li>
                  <li>• Mentor the next generation</li>
                  <li>• Find talent for your organization</li>
                  <li>• Network with fellow alumni</li>
                  <li>• Share your career journey and advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">Our Impact</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">8,500+</p>
              <p className="mt-2 text-sm text-muted-foreground">Alumni Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">350+</p>
              <p className="mt-2 text-sm text-muted-foreground">Partner Companies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">140+</p>
              <p className="mt-2 text-sm text-muted-foreground">Events Organized</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">22,000+</p>
              <p className="mt-2 text-sm text-muted-foreground">Connections Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="border-t bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-8 font-display text-3xl font-bold">About This Project</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                AlumniConnect is an academic project designed to showcase modern web development practices. Built with React, TypeScript, and Tailwind CSS, this platform demonstrates full-stack development capabilities including user authentication, real-time networking features, and responsive design. It serves as a practical example of how technology can solve real-world problems in educational and professional communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
