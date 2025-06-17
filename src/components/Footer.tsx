import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-muted relative z-10 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-brand-purple mb-2">UG.</div>
            <p className="text-muted-foreground text-sm max-w-md">
              Building innovative digital solutions with a focus on clean,
              efficient code and exceptional user experiences.
            </p>
          </div>

          
          <div className="flex flex-col items-center md:items-end">
            <p className="font-medium mb-3 text-white">Connect with me</p>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://github.com/oxBinaryBrain/",
                  icon: <Github className="h-6 w-6" />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/uday-g-601ba9266/",
                  icon: <Linkedin className="h-6 w-6" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/UdayG6389896490",
                  icon: <Twitter className="h-6 w-6" />,
                  label: "Twitter",
                },
                {
                  href: "mailto:ud4yg@yandex.com",
                  icon: <Mail className="h-6 w-6" />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  aria-label={label}
                  style={{ transform: "none" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-muted-foreground text-sm text-center mt-10">
          © {new Date().getFullYear()} Uday G. All rights reserved.
        </div>
      </div>
    </footer>
  );
}