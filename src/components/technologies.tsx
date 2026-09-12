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

  const isAdded = (id: string) => stack.some((item) => item.id === id);

  function addToStack(tech: Tech) {
    if (isAdded(tech.id)) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack`);
  }

  function removeFromStack(id: string) {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from stack`);
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
                key={tech.id}
                tech={tech}
                added={isAdded(tech.id)}
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