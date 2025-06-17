import { Section } from "./Section";

const LeftColumn = () => (
  <div className="bg-purple-100 p-4 rounded-lg relative z-10">
    <div className="mb-4 bg-purple-200 p-2 rounded">Bienvenida</div>
    <h1 className="text-5xl font-bold mb-4 bg-purple-300 p-2 rounded">Título</h1>
    <div className="h-12 mb-6 bg-purple-400 p-2 rounded">Subtítulo</div>
    <p className="text-lg mb-8 bg-purple-500 p-2 rounded">
      Descripción
    </p>
    <div className="flex flex-wrap gap-4 bg-purple-600 p-4 rounded">
      <button className="bg-teal-400 p-2 rounded text-white font-semibold hover:bg-teal-500 transition">
        Botón 1
      </button>
      <button className="bg-gray-400 p-2 rounded text-white font-semibold hover:bg-gray-500 transition">
        Botón 2
      </button>
    </div>
  </div>
);

const RightColumn = () => (
  <div className="hidden lg:block bg-pink-100 p-4 rounded-lg relative z-10">
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-pink-200 p-6">
      <div className="h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-2 bg-pink-300 p-4 rounded shadow">Skill 1</div>
        <div className="col-span-3 row-span-2 bg-pink-400 p-4 rounded shadow">Skill 2</div>
        <div className="col-span-2 row-span-2 bg-pink-500 p-4 rounded shadow">Skill 3</div>
        <div className="col-span-2 row-span-2 bg-pink-600 p-4 rounded shadow">Skill 4</div>
        <div className="col-span-2 row-span-2 bg-pink-700 p-4 rounded shadow">Skill 5</div>
        <div className="col-span-3 row-span-2 bg-pink-800 p-4 rounded shadow">Skill 6</div>
        <div className="col-span-3 row-span-2 bg-pink-900 p-4 rounded shadow">Skill 7</div>
      </div>
    </div>
  </div>
);

export const SectionHero = () => {
  return (
    <Section
      id="hero"      
      padding="pt-16"
      className="relative min-h-screen flex items-center justify-center bg-transparent"
    >
      {/* Fondos decorativos con z-0 */}
      <div className="bg-transparent" />
      <div className="bg-transparent" />
      <div className="bg-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-lg p-6">
        <LeftColumn />
        <RightColumn />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center items-start">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </Section>
  );
};