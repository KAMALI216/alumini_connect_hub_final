import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Find answers to common questions about AlumniConnect
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {/* General Questions */}
              <div className="mb-8">
                <h2 className="mb-4 font-semibold text-foreground">Getting Started</h2>
                
                <AccordionItem value="register">
                  <AccordionTrigger>How do I register?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Visit our Register page and fill in your details including name, email, graduation year, and password. You'll receive a confirmation email. Once verified, you can start building your profile and exploring the platform.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="who-can-join">
                  <AccordionTrigger>Who can join AlumniConnect?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Both current students and alumni of the institution can join. Students can register using their student email or ID, while alumni can join by verifying their graduation year and credentials.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="create-profile">
                  <AccordionTrigger>How do I create my profile?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      After registration, go to your Profile section and add your information. Include a professional photo, bio, current role, industry, skills, and areas of interest. A complete profile helps you connect better with others.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Networking & Connections */}
              <div className="mb-8">
                <h2 className="mb-4 font-semibold text-foreground">Networking & Connections</h2>

                <AccordionItem value="contact-alumni">
                  <AccordionTrigger>How do I contact an alumni?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Browse the Alumni Directory, find a profile you're interested in, and click "Connect" or "Send Message". You can send a personalized message explaining why you'd like to connect. Alumni can then accept or respond to your request.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mentorship">
                  <AccordionTrigger>How does the mentorship program work?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Students can request mentorship from alumni who've indicated they're available to mentor. Mentors can set their availability, expertise areas, and mentoring preferences. Once paired, you can schedule calls, exchange messages, and work together on career goals.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="messaging">
                  <AccordionTrigger>Is the messaging private and confidential?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, all messages between users are private and end-to-end encrypted. Only the sender and recipient can access these conversations. We take your privacy seriously and never share personal messages with third parties.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Events & Opportunities */}
              <div className="mb-8">
                <h2 className="mb-4 font-semibold text-foreground">Events & Opportunities</h2>

                <AccordionItem value="post-events">
                  <AccordionTrigger>How do I post events?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Go to the Events section and click "Create Event". Fill in the event details including title, description, date, time, location (virtual or physical), and capacity. Your event will be reviewed and listed within 24 hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="post-opportunities">
                  <AccordionTrigger>How can I post job opportunities or internships?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Alumni can post opportunities in the Opportunities section. Include the job title, company, description, requirements, salary range (optional), and application instructions. These will be visible to all students and relevant alumni.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="register-event">
                  <AccordionTrigger>How do I register for an event?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Browse upcoming events in the Events section, click on any event that interests you, and select "Register" or "RSVP". You'll receive a confirmation and reminders as the event date approaches.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Privacy & Security */}
              <div className="mb-8">
                <h2 className="mb-4 font-semibold text-foreground">Privacy & Security</h2>

                <AccordionItem value="data-safe">
                  <AccordionTrigger>Is my data safe?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, we take data security seriously. Your information is encrypted in transit and at rest. We comply with industry-standard security protocols and never sell your personal data. See our Privacy Policy for detailed information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="visibility">
                  <AccordionTrigger>How can I control my profile visibility?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      In your Privacy Settings, you can control who sees your profile. Options include public (visible to all), alumni-only, or private (only visible to your connections). You can also hide specific information like contact details.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delete-account">
                  <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      You can request account deletion from your Settings under "Privacy & Deletion". Your data will be removed from our systems within 30 days. Some anonymized data may be retained for analytics purposes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="report-issue">
                  <AccordionTrigger>How do I report inappropriate content or harassment?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Use the Report button on any user's profile or message. Our moderation team reviews all reports within 24 hours. Serious violations of our Code of Conduct may result in account suspension.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Technical Issues */}
              <div>
                <h2 className="mb-4 font-semibold text-foreground">Technical Support</h2>

                <AccordionItem value="reset-password">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      On the login page, click "Forgot Password?" and enter your email. You'll receive instructions to create a new password. Make sure to use a strong password for security.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="update-email">
                  <AccordionTrigger>How do I update my email address?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Go to Settings &gt; Account Information and click "Change Email". You'll need to verify your new email before it takes effect.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="browser-issues">
                  <AccordionTrigger>Which browsers does AlumniConnect support?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, keep your browser updated to the latest version.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </Card>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <h2 className="font-display text-2xl font-bold">Still have questions?</h2>
            <p className="mt-2 text-muted-foreground">
              Contact our support team at support@alumniconnect.edu or visit our{" "}
              <a href="/support" className="text-accent hover:underline">
                Support page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default FAQ;
