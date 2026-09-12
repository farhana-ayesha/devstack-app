
import { useState } from "react";
import TechCard, { type Tech } from "./TechCard";
import StackList from "./StackList";

const techs: Tech[] = [
  {
    icon: "⚛️",
    badge: "Popular",
    badgeColor: "bg-pink-100 text-pink-600",
    name: "React",
    desc: "A declarative, component-based JavaScript library for building modern user interfaces.",
    tag1: "Frontend",
    tag2: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    icon: "🟢",
    badge: "Versatile",
    badgeColor: "bg-green-100 text-green-600",
    name: "Vue.js",
    desc: "An approachable, performant, and versatile framework for building web user interfaces.",
    tag1: "Frontend",
    tag2: "Beginner-Friendly",
    rating: "4.8",
  },
  {
    icon: "🔥",
    badge: "Fast",
    badgeColor: "bg-orange-100 text-orange-600",
    name: "Svelte",
    desc: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    tag1: "Frontend",
    tag2: "Intermediate",
    rating: "4.8",
  },
  {
    icon: "▲",
    badge: "SSR / Edge",
    badgeColor: "bg-purple-100 text-purple-600",
    name: "Next.js",
    desc: "The React framework for full-stack web applications with hybrid static & server rendering.",
    tag1: "Frontend",
    tag2: "Intermediate",
    rating: "4.9",
  },
  {
    icon: "🟩",
    badge: "Standard",
    badgeColor: "bg-green-100 text-green-600",
    name: "Node.js",
    desc: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    tag1: "Backend",
    tag2: "Intermediate",
    rating: "4.8",
  },
  {
    icon: "🐘",
    badge: "Top SQL",
    badgeColor: "bg-blue-100 text-blue-600",
    name: "PostgreSQL",
    desc: "A powerful, open-source object-relational database system with proven reliability.",
    tag1: "Database",
    tag2: "Intermediate",
    rating: "4.9",
  },
  {
    icon: "🧱",
    badge: "Cache",
    badgeColor: "bg-red-100 text-red-500",
    name: "Redis",
    desc: "In-memory data structure store used as a high-speed database, cache, and message broker.",
    tag1: "Database",
    tag2: "Intermediate",
    rating: "4.8",
  },
  {
    icon: "🟨",
    badge: "Ubiquitous",
    badgeColor: "bg-orange-100 text-orange-600",
    name: "JavaScript",
    desc: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    tag1: "Language",
    tag2: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    icon: "🔷",
    badge: "Essential",
    badgeColor: "bg-blue-100 text-blue-600",
    name: "TypeScript",
    desc: "A strongly typed programming language that builds on JavaScript for robust tooling.",
    tag1: "Language",
    tag2: "Intermediate",
    rating: "4.9",
  },
  {
    icon: "☕",
    badge: "Robust",
    badgeColor: "bg-blue-100 text-blue-600",
    name: "Java",
    desc: "A secure, object-oriented programming language designed for portability and scale.",
    tag1: "Language",
    tag2: "Intermediate",
    rating: "4.6",
  },
  {
    icon: "🌊",
    badge: "Modern",
    badgeColor: "bg-green-100 text-green-600",
    name: "Tailwind CSS",
    desc: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    tag1: "Styling",
    tag2: "Beginner-Friendly",
    rating: "4.9",
  },
  {
    icon: "🐳",
    badge: "Containers",
    badgeColor: "bg-blue-100 text-blue-600",
    name: "Docker",
    desc: "A platform designed to build, share, and run containerized applications reliably.",
    tag1: "DevOps",
    tag2: "Intermediate",
    rating: "4.9",
  },
];

export default function Technologies() {
  // stack ta ekhane store kori
  const [stack, setStack] = useState<Tech[]>([]);

  const isAdded = (name: string) => stack.some((item) => item.name === name);

  const addToStack = (tech: Tech) => {
    if (isAdded(tech.name)) return;
    setStack([...stack, tech]);
  };

  const removeFromStack = (name: string) => {
    setStack(stack.filter((item) => item.name !== name));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 py-16">
      {/* heading */}
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* content: cards grid + sidebar */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techs.map((tech) => (
            <TechCard
              key={tech.name}
              tech={tech}
              added={isAdded(tech.name)}
              onAdd={addToStack}
            />
          ))}
        </div>

        <StackList stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
      </div>
    </section>
  );
}