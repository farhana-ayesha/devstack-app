import { iconMap } from "./iconMap";

export type Tech = {
  icon: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  name: string;
  desc: string;
  tag1: string;
  tag2: string;
  rating: string;
};

type TechCardProps = {
  tech: Tech;
  added: boolean;
  onAdd: (tech: Tech) => void;
};

export default function TechCard({ tech, added, onAdd }: TechCardProps) {
  const Icon = iconMap[tech.icon as keyof typeof iconMap];

  return (
    <div className="border rounded-xl p-4">
      <div className="flex items-center justify-between">
        <Icon className={`text-3xl ${tech.iconColor}`} />
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tech.badgeColor}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold mt-3">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{tech.desc}</p>

      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tech.tag1}</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tech.tag2}</span>
        <span className="ml-auto text-gray-700">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className="mt-4 w-full bg-slate-800 text-white text-sm font-semibold py-2 rounded-lg"
      >
        {added ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
}