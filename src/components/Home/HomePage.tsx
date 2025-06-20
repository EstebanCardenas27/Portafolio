import { SkillBox } from "../Skillbox/SkillBox"; 

export const HomePage = () => {
  return (
    <>
        <SkillBox/> 
        <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            I'm a Computer Science student specializing in AI & ML. Passionate about programming, AI integration, and building innovative web applications.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-lg">
            <div className="w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">Web Development</h3>
            <p className="text-muted-foreground text-center">
              Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.
            </p>
          </div>
      
          <div className="glass-panel p-8 rounded-lg">
            <div className="w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">Computer Science</h3>
            <p className="text-muted-foreground text-center">
              Strong foundation in algorithms, data structures, and programming principles.
            </p>
          </div>
      
          <div className="glass-panel p-8 rounded-lg">
            <div className="w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-muted-foreground text-center">
              Specializing in artificial intelligence and machine learning algorithms and applications.
            </p>
          </div>
        </div>
      
        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            href="/about"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
               
    </>
  );
};