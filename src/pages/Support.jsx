import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Help & Support</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're here to help you get the most out of AlumniConnect
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Email Support */}
              <Card>
                <CardHeader>
                  <Mail className="h-6 w-6 text-accent" />
                  <CardTitle>Email Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <a href="mailto:support@alumniconnect.edu" className="text-accent font-medium hover:underline">
                    support@alumniconnect.edu
                  </a>
                </CardContent>
              </Card>

              {/* Phone Support */}
              <Card>
                <CardHeader>
                  <Phone className="h-6 w-6 text-accent" />
                  <CardTitle>Phone Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Call us Monday-Friday, 9 AM - 5 PM EST
                  </p>
                  <a href="tel:+18004567890" className="text-accent font-medium hover:underline">
                    +1 (800) 456-7890
                  </a>
                </CardContent>
              </Card>

              {/* Live Chat */}
              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 text-accent" />
                  <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Get instant help from our support team
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="border-t bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-3xl font-bold">Common Issues & Solutions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can't log in to my account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Try these steps:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Check that your email and password are correct</li>
                    <li>• Clear your browser cache and cookies</li>
                    <li>• Try using the "Forgot Password" option to reset</li>
                    <li>• Use a different browser if the issue persists</li>
                  </ul>
                  <p className="mt-4">Still having issues? <a href="mailto:support@alumniconnect.edu" className="text-accent hover:underline">Contact support</a></p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to update my profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Follow these steps:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Click on your profile icon in the top right</li>
                    <li>• Select "Edit Profile"</li>
                    <li>• Update your information</li>
                    <li>• Click "Save Changes"</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Having trouble uploading a profile photo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Make sure:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Image is in JPG or PNG format</li>
                    <li>• File size is less than 5MB</li>
                    <li>• Image dimensions are at least 200x200 pixels</li>
                    <li>• You have a stable internet connection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Not receiving emails from AlumniConnect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Try these troubleshooting steps:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Check your spam/junk folder</li>
                    <li>• Verify your email address in Account Settings</li>
                    <li>• Check your notification preferences</li>
                    <li>• Add support@alumniconnect.edu to your contacts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Connection request not being accepted</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Consider:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• The user may not check messages regularly</li>
                    <li>• Your message may not have been clear</li>
                    <li>• They might prefer not to connect at this time</li>
                    <li>• Try following up after a week with a polite message</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-3xl font-bold">Send us a Message</h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
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
                      Email
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

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
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
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your issue..."
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

        {/* Additional Resources */}
        <section className="border-t bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-3xl font-bold">Additional Resources</h2>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <a href="/faq" className="rounded-lg border p-4 hover:bg-secondary transition-colors">
                <HelpCircle className="h-6 w-6 text-accent mb-2" />
                <h3 className="font-semibold">FAQ</h3>
                <p className="text-sm text-muted-foreground mt-1">Answers to frequently asked questions</p>
              </a>

              <a href="/code-of-conduct" className="rounded-lg border p-4 hover:bg-secondary transition-colors">
                <HelpCircle className="h-6 w-6 text-accent mb-2" />
                <h3 className="font-semibold">Code of Conduct</h3>
                <p className="text-sm text-muted-foreground mt-1">Community guidelines and standards</p>
              </a>

              <a href="/privacy" className="rounded-lg border p-4 hover:bg-secondary transition-colors">
                <HelpCircle className="h-6 w-6 text-accent mb-2" />
                <h3 className="font-semibold">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mt-1">How we protect your data</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;
