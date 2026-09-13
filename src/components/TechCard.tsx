export type Tech = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
  badgeColor: string;
};

type TechCardProps = {
  tech: Tech;
  added: boolean;
  onAdd: (tech: Tech) => void;
};

export default function TechCard({ tech, added, onAdd }: TechCardProps) {
  return (
    <div className="border border-gray-100 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tech.badgeColor}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold mt-3">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{tech.description}</p>

      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tech.category}</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tech.difficulty}</span>
        <span className="ml-auto text-gray-700">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className="mt-4 w-full bg-slate-800 text-white text-sm font-semibold py-2 rounded-lg disabled:opacity-50"
        disabled={added}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}