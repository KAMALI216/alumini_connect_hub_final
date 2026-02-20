import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Footer Content Grid */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 mb-8">
        {/* Support */}
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-sm">Support</h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/faq" className="hover:text-foreground transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-foreground transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground transition">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:support@alumniconnect.edu" className="hover:text-foreground transition">
                Email Support
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-sm">Company</h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/code-of-conduct" className="hover:text-foreground transition">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="hover:text-foreground transition">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-foreground transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t pt-8">
        {/* Social Links */}
        <div className="flex gap-6 mb-4 text-sm text-muted-foreground justify-center">
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-foreground transition">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-foreground transition">
            LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-foreground transition">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-foreground transition">
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AlumniConnect. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
