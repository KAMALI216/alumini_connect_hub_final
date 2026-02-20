import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "inquiry",
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us. We'll get back to you within 24 hours!");
    setFormData({ name: "", email: "", subject: "", message: "", type: "inquiry" });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Email */}
              <Card>
                <CardHeader>
                  <Mail className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    We respond to all emails within 24 hours.
                  </p>
                  <a href="mailto:contact@alumniconnect.edu" className="font-medium text-accent hover:underline">
                    contact@alumniconnect.edu
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardHeader>
                  <Phone className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Call us Monday-Friday, 9 AM - 5 PM EST
                  </p>
                  <a href="tel:+18004567890" className="font-medium text-accent hover:underline">
                    +1 (800) 456-7890
                  </a>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Our headquarters:
                  </p>
                  <p className="text-sm font-medium">
                    [Your University]<br />
                    [City, State]
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <Clock className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-medium">Weekends:</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    For technical issues:
                  </p>
                  <a href="mailto:support@alumniconnect.edu" className="text-sm font-medium text-accent hover:underline">
                    support@alumniconnect.edu
                  </a>
                </CardContent>
              </Card>

              {/* Partnerships */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Partnerships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Corporate partnerships:
                  </p>
                  <a href="mailto:partnerships@alumniconnect.edu" className="text-sm font-medium text-accent hover:underline">
                    partnerships@alumniconnect.edu
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="border-t bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-3xl font-bold">Send us a Message</h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Category *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Report a Bug</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-3xl font-bold">Quick Answers</h2>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is AlumniConnect?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  AlumniConnect is an online platform that connects students with alumni, enabling mentorship, networking, and career opportunities.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I create an account?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Visit our Register page and fill in your details. Current students and alumni can sign up—it's free to join!
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a cost to use AlumniConnect?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  No! AlumniConnect is completely free for all users. Basic features and networking are available at no cost.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to verify my account?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Most accounts are verified within 24 hours. You'll receive a confirmation email when your account is ready.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I report inappropriate behavior?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Use the report button on any user profile or message. Our moderation team reviews reports within 24 hours.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I delete my account?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
  {"Yes! Go to Settings &gt; Privacy &gt; Delete Account. Your data will be removed within 30 days."}
</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold">Still have questions?</h2>
            <p className="mb-6 text-muted-foreground">
              Check out our FAQ page or visit our support center.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/faq">
                <Button variant="outline">Read FAQ</Button>
              </a>
              <a href="/support">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get Support</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
