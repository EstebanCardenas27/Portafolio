export const Background = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-20 -right-20 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl opacity-50" />
    <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-50" />
    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-30" />
  </div>
);