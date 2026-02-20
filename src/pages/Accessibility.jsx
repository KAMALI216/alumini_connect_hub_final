import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Accessibility = () => (
  <Layout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Accessibility Statement</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our commitment to inclusive design and accessibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          {/* Our Commitment */}
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment to Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                AlumniConnect is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to continuously improve the accessibility and usability of our platform to ensure everyone can fully participate in our community.
              </p>
              <p>
                We aim to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and continuously work to improve our accessibility features.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🔤 Text & Readability</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Adjustable font sizes (zoom up to 200%)</li>
                  <li>• High contrast color options</li>
                  <li>• Clear, readable sans-serif fonts</li>
                  <li>• Proper heading hierarchy for screen readers</li>
                  <li>• Adequate spacing between text elements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">🎯 Navigation & Structure</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Keyboard navigation support (TAB, ENTER, ESC keys)</li>
                  <li>• Skip to main content links</li>
                  <li>• Logical tab order</li>
                  <li>• Breadcrumb navigation on all pages</li>
                  <li>• Clear, descriptive page titles</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">🎤 Vision & Hearing</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Screen reader compatibility (NVDA, JAWS, VoiceOver)</li>
                  <li>• Alt text for all meaningful images</li>
                  <li>• Captions for video content (coming soon)</li>
                  <li>• Transcripts for audio content</li>
                  <li>• Color not used alone to convey information</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">🎮 Motor & Interaction</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Large tap targets (minimum 44x44 pixels)</li>
                  <li>• Full keyboard accessibility without mouse required</li>
                  <li>• Voice input support on compatible devices</li>
                  <li>• No fixed time limits on critical actions</li>
                  <li>• Double-click not required for essential functions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">💡 Cognitive & Learning</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Simple, clear language</li>
                  <li>• Consistent navigation and layout</li>
                  <li>• Error messages that clearly explain issues</li>
                  <li>• Undo functionality where possible</li>
                  <li>• Multiple ways to find content (search, browsing, links)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Browser & Device Support */}
          <Card>
            <CardHeader>
              <CardTitle>Browser & Device Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>AlumniConnect is compatible with:</p>
              <ul className="space-y-2 ml-4">
                <li>• Chrome 90+</li>
                <li>• Firefox 88+</li>
                <li>• Safari 14+</li>
                <li>• Edge 90+</li>
                <li>• Mobile browsers (iOS Safari, Chrome Mobile)</li>
              </ul>
              <p className="mt-4">
                We support assistive technologies including:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• NVDA (Free screen reader)</li>
                <li>• JAWS (Commercial screen reader)</li>
                <li>• Apple VoiceOver (built-in Mac/iOS)</li>
                <li>• Windows Narrator (built-in Windows)</li>
                <li>• Dragon NaturallySpeaking (voice control)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Known Issues */}
          <Card>
            <CardHeader>
              <CardTitle>Known Issues & Improvements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We're actively working to improve accessibility. Here are areas we're currently enhancing:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Video Captions:</strong> All video content will have captions by Q2 2026</li>
                <li>• <strong>Advanced Keyboard Navigation:</strong> Improving shortcuts for power users</li>
                <li>• <strong>Dark Mode:</strong> Coming in the next update</li>
                <li>• <strong>Text-to-Speech:</strong> Native TTS integration in progress</li>
                <li>• <strong>Language Support:</strong> Working on 5+ language options</li>
              </ul>
            </CardContent>
          </Card>

          {/* Accessibility Settings */}
          <Card>
            <CardHeader>
              <CardTitle>User Accessibility Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You can customize your AlumniConnect experience in Settings &gt; Accessibility:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Font Size:</strong> Small (100%), Medium (125%), Large (150%), Extra Large (200%)</li>
                <li>• <strong>Color Contrast:</strong> Normal, High Contrast, Dark Mode (coming)</li>
                <li>• <strong>Animation:</strong> Reduce motion option for animations</li>
                <li>• <strong>Focus Indicators:</strong> Enhanced visual focus indicators</li>
                <li>• <strong>Screen Reader Mode:</strong> Optimize for screen reader use</li>
              </ul>
            </CardContent>
          </Card>

          {/* How to Get Help */}
          <Card>
            <CardHeader>
              <CardTitle>Having Accessibility Issues?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you experience accessibility barriers or have suggestions for improvement:
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <p className="font-semibold text-foreground">📧 Email us:</p>
                  <a href="mailto:accessibility@alumniconnect.edu" className="text-accent hover:underline">
                    accessibility@alumniconnect.edu
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground">📱 Use our Contact Form:</p>
                  <p><a href="/contact" className="text-accent hover:underline">Visit our Contact page</a> and select "Accessibility Issue" as the subject</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">💬 Live Chat:</p>
                  <p>Use the chat feature on any page to speak with our accessibility team</p>
                </div>
              </div>
              <p className="mt-4 pt-4 border-t">
                Please provide details about what you encountered and what device/browser you're using. We aim to respond within 24 hours.
              </p>
            </CardContent>
          </Card>

          {/* Accessibility Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Learn more about digital accessibility:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener" className="text-accent hover:underline">Web Content Accessibility Guidelines (WCAG)</a></li>
                <li>• <a href="https://www.nvaccess.org/" target="_blank" rel="noopener" className="text-accent hover:underline">NVDA Screen Reader</a></li>
                <li>• <a href="https://www.section508.gov/" target="_blank" rel="noopener" className="text-accent hover:underline">U.S. Section 508 Accessibility Guidelines</a></li>
                <li>• <a href="https://www.abletech.org/" target="_blank" rel="noopener" className="text-accent hover:underline">AbilityTech Resources</a></li>
              </ul>
            </CardContent>
          </Card>

          {/* Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Compliance</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                AlumniConnect aims to comply with:
              </p>
              <ul className="space-y-2 ml-4 mt-3">
                <li>• WCAG 2.1 Level AA standards</li>
                <li>• Section 508 of the Americans with Disabilities Act (ADA)</li>
                <li>• Directive 2016/2102 (EU Accessibility)</li>
                <li>• Ontario Accessibility Standard (OAS)</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-4 border-t">
            <p>Last audited: January 2026</p>
            <p>We conduct accessibility audits quarterly and welcome feedback from users.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Accessibility;
