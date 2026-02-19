import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card py-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-accent" />
          <span className="font-display text-sm font-semibold text-foreground">AlumniConnect</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AlumniConnect. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
