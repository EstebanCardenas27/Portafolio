import { Section } from "@/components/Sections/Section";

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
      </div>

      <a
        className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
        href="/contact"
      > Get in Touch
      </a>
    </div>
  </Section>
);