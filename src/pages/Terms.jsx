import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Governing your use of AlumniConnect
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

          {/* Acceptance */}
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By accessing and using AlumniConnect, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                We reserve the right to update these terms at any time. Your continued use of the platform following any changes constitutes your acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* License & Use */}
          <Card>
            <CardHeader>
              <CardTitle>2. License to Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect grants you a limited, non-exclusive, non-transferable license to access and use our platform for lawful purposes only. You may not:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Modify, reproduce, or transmit any content without permission</li>
                <li>• Reverse-engineer, decompile, or disassemble any code</li>
                <li>• Attempt to gain unauthorized access to any system</li>
                <li>• Introduce viruses, malware, or harmful code</li>
                <li>• Use the platform for automated scraping or data mining</li>
                <li>• Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You are responsible for:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Keeping your password confidential</li>
                <li>• All activities that occur under your account</li>
                <li>• Providing accurate and truthful information</li>
                <li>• Complying with all applicable laws and regulations</li>
                <li>• Not impersonating or misrepresenting another person</li>
                <li>• Not posting illegal, offensive, or defamatory content</li>
                <li>• Respecting intellectual property rights of others</li>
              </ul>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle>4. Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You agree NOT to use AlumniConnect to:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Harass, abuse, or defame any person</li>
                <li>• Discriminate based on protected characteristics</li>
                <li>• Post sexually explicit, violent, or illegal content</li>
                <li>• Engage in fraud, phishing, or deception</li>
                <li>• Spam or send unsolicited commercial messages</li>
                <li>• Violate any person's privacy or security</li>
                <li>• Post false information or misinformation</li>
                <li>• Violate any applicable laws or regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Account Termination */}
          <Card>
            <CardHeader>
              <CardTitle>5. Account Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">We May Terminate Your Account If:</h4>
                <ul className="space-y-2 ml-4">
                  <li>• You violate these Terms or our Code of Conduct</li>
                  <li>• You engage in fraud or illegal activity</li>
                  <li>• You have not accessed your account for 12 months</li>
                  <li>• We determine continuation poses a risk to users or platform</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Your Right to Terminate</h4>
                <p>
                  You can close your account at any time through your account settings. Upon termination, your account will be deactivated, though we may retain some data for legal or operational reasons.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>6. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Our Rights</h4>
                <p>
                  All content, features, and functionality (including software, design, graphics) are owned by AlumniConnect or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Your Content</h4>
                <p>
                  By posting content (text, images, profiles), you grant AlumniConnect a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content. You retain ownership of your content and can delete it anytime.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Respect Others' Rights</h4>
                <p>
                  Do not post content that infringes on others' intellectual property rights. If you believe your rights have been violated, contact us immediately at <a href="mailto:legal@alumniconnect.edu" className="text-accent hover:underline">legal@alumniconnect.edu</a>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Content */}
          <Card>
            <CardHeader>
              <CardTitle>7. User-Generated Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You are solely responsible for any content you post. We do not endorse, guarantee, or claim ownership of user content. We reserve the right to remove content that violates these terms, but are not obligated to monitor or pre-screen content.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card>
            <CardHeader>
              <CardTitle>8. Third-Party Links & Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect may contain links to third-party websites and services. We are not responsible for their content, accuracy, or privacy practices. Use third-party services at your own risk and review their terms before using.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>9. Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• The platform will be uninterrupted or error-free</li>
                <li>• All content is accurate or current</li>
                <li>• Your use will achieve desired results</li>
                <li>• Issues will be resolved</li>
              </ul>
              <p className="mt-4">
                We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>10. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To the fullest extent permitted by law, AlumniConnect shall not be liable for:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Indirect, incidental, special, or consequential damages</li>
                <li>• Lost profits, revenue, or data</li>
                <li>• Loss of business or reputation</li>
                <li>• Damages arising from your use or inability to use the platform</li>
              </ul>
              <p className="mt-4">
                Our total liability shall not exceed the amount you paid for the service in the past 12 months.
              </p>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <CardTitle>11. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                You agree to indemnify and hold harmless AlumniConnect, its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform or violation of these terms.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>12. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                These Terms are governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts in [Your Location].
              </p>
            </CardContent>
          </Card>

          {/* Entire Agreement */}
          <Card>
            <CardHeader>
              <CardTitle>13. Entire Agreement</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                These Terms, along with our Privacy Policy and Code of Conduct, constitute the entire agreement between you and AlumniConnect regarding your use of the platform and supersede all prior or concurrent agreements.
              </p>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card>
            <CardHeader>
              <CardTitle>14. Severability</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>15. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>For questions about these Terms, please contact:</p>
              <div className="space-y-2 ml-4">
                <p><strong>Email:</strong> <a href="mailto:legal@alumniconnect.edu" className="text-accent hover:underline">legal@alumniconnect.edu</a></p>
                <p><strong>Support:</strong> <a href="/support" className="text-accent hover:underline">Visit our Support page</a></p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-4 border-t">
            <p>By using AlumniConnect, you acknowledge that you have read and agree to these Terms & Conditions.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Terms;
