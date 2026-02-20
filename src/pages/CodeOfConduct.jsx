import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CodeOfConduct = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Community Code of Conduct</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Guidelines for maintaining a respectful and professional community
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect is dedicated to providing a safe, respectful, and inclusive community for all members. We believe in the power of professional networks built on mutual respect, integrity, and collegial behavior.
              </p>
              <p>
                This Code of Conduct outlines expectations for all members and establishes the behavioral standards that enable our community to thrive.
              </p>
            </CardContent>
          </Card>

          {/* Core Principles */}
          <Card>
            <CardHeader>
              <CardTitle>Core Principles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Respect & Professionalism</h4>
                <p>
                  Treat all members with respect and courtesy, regardless of their background, role, or opinions. Interact professionally in all communications—messages, comments, and discussions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Inclusivity & Diversity</h4>
                <p>
                  Celebrate our diverse community. Do not discriminate against, or make assumptions about, members based on race, ethnicity, gender, gender identity, age, religion, disability, sexual orientation, or any other characteristic.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Honesty & Integrity</h4>
                <p>
                  Be truthful in your profile information and all interactions. Do not impersonate others, misrepresent your background, or provide false information about opportunities or credentials.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Accountability</h4>
                <p>
                  Take responsibility for your actions. If you make a mistake, acknowledge it, apologize, and work toward a resolution. Help maintain the community's standards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Expected Behavior */}
          <Card>
            <CardHeader>
              <CardTitle>Expected Behavior</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-foreground">Members should:</p>
              <ul className="space-y-2 ml-4">
                <li>• Use inclusive language and respectful tone in all communications</li>
                <li>• Listen actively and consider different perspectives</li>
                <li>• Provide constructive feedback and genuine support</li>
                <li>• Respect others' time—respond to messages in a timely manner</li>
                <li>• Keep confidential information private</li>
                <li>• Share knowledge and experience openly for mutual growth</li>
                <li>• Respect platform rules and guidelines</li>
                <li>• Report concerning behavior or content appropriately</li>
              </ul>
            </CardContent>
          </Card>

          {/* Unacceptable Behavior */}
          <Card>
            <CardHeader>
              <CardTitle>Unacceptable Behavior</CardTitle>
              <CardDescription>The following behaviors are prohibited</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Harassment & Discrimination</h4>
                <p>
                  Harassing, bullying, threatening, or discriminatory language or behavior targeted at any member is strictly forbidden. This includes unwanted advances, slurs, and any form of intimidation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Spam & Unsolicited Promotion</h4>
                <p>
                  Do not send unsolicited commercial messages, mass promotions, or misleading links. Do not post excessive self-promotional content. Spam violates community trust.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Fraud & Deception</h4>
                <p>
                  Misrepresenting yourself, your credentials, your company, or opportunities is prohibited. Do not post false job listings, fraudulent opportunities, or misleading claims.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Inappropriate Content</h4>
                <p>
                  Do not share sexually explicit, violent, hate speech, or illegal content. This includes memes, images, or links that violate these standards.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Privacy Violations</h4>
                <p>
                  Do not share others' personal information, messages, or data without consent. Do not screenshot and share private conversations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Conflicts of Interest</h4>
                <p>
                  Do not use the platform to gain unfair advantages, manipulate hiring processes, or exploit your position within the community.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enforcement */}
          <Card>
            <CardHeader>
              <CardTitle>Enforcement & Consequences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We take violations of this Code of Conduct seriously. Our moderation team investigates reported violations and takes appropriate action based on severity.
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Enforcement Levels:</h4>
                <ul className="space-y-2 ml-4">
                  <li>
                    <strong>Warning:</strong> For minor first-time violations, members receive a warning explaining the issue.
                  </li>
                  <li>
                    <strong>Temporary Suspension:</strong> Repeated violations or serious misconduct may result in temporary account suspension (24 hours to 30 days).
                  </li>
                  <li>
                    <strong>Permanent Ban:</strong> Severe violations (fraud, harassment, illegal activity) result in permanent account termination.
                  </li>
                </ul>
              </div>

              <p className="mt-6 border-t pt-4">
                Members have the right to appeal decisions. Appeals should be submitted to <a href="mailto:conduct@alumniconnect.edu" className="text-accent hover:underline">conduct@alumniconnect.edu</a> within 7 days.
              </p>
            </CardContent>
          </Card>

          {/* Reporting */}
          <Card>
            <CardHeader>
              <CardTitle>Reporting Violations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                All members have a responsibility to report violations. You can report concerning behavior:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Using the Report button on any user profile or message</li>
                <li>• Contacting our moderation team at <a href="mailto:conduct@alumniconnect.edu" className="text-accent hover:underline">conduct@alumniconnect.edu</a></li>
                <li>• Using the in-app support chat for immediate concerns</li>
              </ul>
              <p className="mt-4">
                All reports are handled confidentially. We protect reporters from retaliation and do not disclose their identity without consent.
              </p>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Questions?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                If you have questions about this Code of Conduct, please contact our Community Standards team.
              </p>
              <p>
                Email: <a href="mailto:conduct@alumniconnect.edu" className="text-accent hover:underline">conduct@alumniconnect.edu</a>
              </p>
              <p>
                Learn more in our <a href="/faq" className="text-accent hover:underline">FAQ</a> or <a href="/support" className="text-accent hover:underline">Support</a> pages.
              </p>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-4 border-t">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>We reserve the right to update this Code of Conduct at any time. Changes will be communicated to members.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default CodeOfConduct;
