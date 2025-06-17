import { Section } from "@/components/Section";

export const SectionContact = () => (
  <Section
    id="contact"
    className="relative min-h-screen flex items-center justify-center bg-transparent border-1"
    padding="py-24"
    center={true}
    title="Let's Work Together"
    subtitle="I'm currently available for freelance work and open to new opportunities. If you have a project in mind or want to collaborate, let's connect!"
  >
    <div className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center border-1">
      <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star w-8 h-8 text-teal-400"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      </div>

      <a
        className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
        href="/contact"
      >
        Get in Touch
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right ml-2 h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  </Section>
);