import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard, { type Tech } from "./TechCard";
import StackList from "./StackList";

export default function Technologies() {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Tech[]>([]);

  useEffect(() => {
    const loadTechs = async () => {
      const res = await fetch("/techs.json");
      const data = await res.json();
      setTechs(data);
      setLoading(false);
    };

    loadTechs();
  }, []);

  const isAdded = (name: string) => stack.some((item) => item.name === name);

  function addToStack(tech: Tech) {
    if (isAdded(tech.name)) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack`);
  }

  function removeFromStack(name: string) {
    setStack(stack.filter((item) => item.name !== name));
    toast.info(`${name} removed from stack`);
  }

  function removeAll() {
    setStack([]);
    toast.info("Stack cleared");
  }

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <p className="mt-10 text-center text-gray-500">Loading technologies...</p>
      ) : (
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
      )}
    </section>
  );
}