import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            How we collect, use, and protect your data
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          {/* Effective Date */}
          <div className="text-sm text-muted-foreground border rounded-lg p-4 bg-card">
            <strong>Effective Date:</strong> January 1, 2026<br />
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </div>

          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our platform.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information You Provide</h4>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Account Registration:</strong> Name, email address, password</li>
                  <li>• <strong>Profile Information:</strong> Graduation year, school/university, location, phone number</li>
                  <li>• <strong>Professional Details:</strong> Current job title, company, industry, skills, experience</li>
                  <li>• <strong>Profile Content:</strong> Bio, profile picture, resume, cover letter</li>
                  <li>• <strong>Communications:</strong> Messages, comments, event registrations</li>
                  <li>• <strong>Payment Information:</strong> Billing address (if applicable), payment method</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Automatically Collected Information</h4>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Device Information:</strong> Browser type, IP address, device type, operating system</li>
                  <li>• <strong>Usage Data:</strong> Pages visited, time spent, search queries, clicks</li>
                  <li>• <strong>Location Data:</strong> General location (city/country) based on IP address</li>
                  <li>• <strong>Cookies:</strong> Session cookies and optional persistent cookies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Third-Party Information</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Information from partner companies (with consent)</li>
                  <li>• Publicly available information (LinkedIn, GitHub, academic records)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use your information for:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Service Delivery:</strong> Creating and maintaining your account, providing platform services</li>
                <li>• <strong>Personalization:</strong> Recommending connections, opportunities, and content relevant to you</li>
                <li>• <strong>Communication:</strong> Sending updates, newsletters, event notifications (with your consent)</li>
                <li>• <strong>Support:</strong> Responding to inquiries and providing customer service</li>
                <li>• <strong>Safety:</strong> Preventing fraud, abuse, and enforcing our terms</li>
                <li>• <strong>Analytics:</strong> Understanding user behavior to improve our platform</li>
                <li>• <strong>Marketing:</strong> Promoting new features (only with your consent)</li>
                <li>• <strong>Legal Compliance:</strong> Fulfilling legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>3. Data Protection Measures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We employ industry-standard security measures:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Encryption:</strong> SSL/TLS encryption for data in transit</li>
                <li>• <strong>Database Security:</strong> Encrypted data at rest using AES-256</li>
                <li>• <strong>Access Control:</strong> Restricted employee access to sensitive data</li>
                <li>• <strong>Regular Audits:</strong> Quarterly security assessments</li>
                <li>• <strong>Firewall:</strong> Enterprise-grade firewall protection</li>
                <li>• <strong>Backups:</strong> Regular encrypted backups</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no internet transmission is completely secure. We cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>4. Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What Are Cookies?</h4>
                <p>
                  Cookies are small text files stored on your device that help us remember your preferences and improve your experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Types of Cookies We Use</h4>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Essential Cookies:</strong> Required for basic functionality (login, security)</li>
                  <li>• <strong>Performance Cookies:</strong> Track usage to improve our platform</li>
                  <li>• <strong>Preference Cookies:</strong> Remember your settings and choices</li>
                  <li>• <strong>Advertising Cookies:</strong> Used by third parties for relevant ads (optional)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Managing Cookies</h4>
                <p>
                  You can control cookie settings in your browser preferences. However, disabling cookies may limit platform functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>5. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">We May Share Information With</h4>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Other Users:</strong> Only information you've made public in your profile</li>
                  <li>• <strong>Service Providers:</strong> Hosting, email, analytics (under NDA)</li>
                  <li>• <strong>Partner Organizations:</strong> With your explicit consent for opportunities</li>
                  <li>• <strong>Legal Requirements:</strong> If required by law or court order</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">We Will NOT</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Sell your personal data to third parties</li>
                  <li>• Share email without consent</li>
                  <li>• Share sensitive information (passwords, financial details)</li>
                  <li>• Share data with marketing companies for unsolicited contact</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle>6. Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Access:</strong> Request a copy of your data</li>
                <li>• <strong>Correction:</strong> Update inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request account and data deletion</li>
                <li>• <strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
                <li>• <strong>Privacy Controls:</strong> Control who sees your profile</li>
                <li>• <strong>Portability:</strong> Export your data in standard formats</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@alumniconnect.edu" className="text-accent hover:underline">privacy@alumniconnect.edu</a>
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We retain your information as long as your account is active. After account deletion:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Personal data is deleted within 30 days</li>
                <li>• Backup copies are deleted within 90 days</li>
                <li>• Anonymized analytics data may be retained indefinitely</li>
                <li>• Legal or security obligations may require longer retention</li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                AlumniConnect is not intended for users under 18. We do not knowingly collect data from minors. If we discover we have collected information from someone under 18, we will delete it immediately. Parents who believe their child's information was collected should contact us at <a href="mailto:privacy@alumniconnect.edu" className="text-accent hover:underline">privacy@alumniconnect.edu</a>.
              </p>
            </CardContent>
          </Card>

          {/* International Users */}
          <Card>
            <CardHeader>
              <CardTitle>9. International Users</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                If you're outside the United States, your data may be transferred to and processed in the U.S., which may have different privacy laws. By using AlumniConnect, you consent to your information being transferred to and processed in the U.S. under these terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>For privacy questions or to exercise your rights:</p>
              <div className="space-y-2 ml-4">
                <p><strong>Email:</strong> <a href="mailto:privacy@alumniconnect.edu" className="text-accent hover:underline">privacy@alumniconnect.edu</a></p>
                <p><strong>Mail:</strong> AlumniConnect Privacy Team, [Your University], [City, State]</p>
                <p><strong>Response Time:</strong> We respond to privacy requests within 10 business days</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-4 border-t">
            <p>This Privacy Policy is subject to change. We will notify you of material changes by email or prominent notice on our platform.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Privacy;
