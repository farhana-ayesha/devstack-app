
import type { Tech } from "./TechCard";

type StackListProps = {
  stack: Tech[];
  onRemove: (name: string) => void;
  onRemoveAll: () => void;
};

export default function StackList({ stack, onRemove, onRemoveAll }: StackListProps) {
  return (
    <div className="border rounded-xl p-6 h-fit">
      <h3 className="font-bold">Your Stack</h3>
      <p className="text-sm text-gray-500 mt-1">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        // stack khali thakle empty state dekhabe
        <div className="flex flex-col items-center text-center mt-10">
          <span className="text-4xl">🗃️</span>
          <p className="font-semibold mt-4">Your stack is empty.</p>
          <p className="text-sm text-gray-500 mt-1">
            Add technologies from the left to build your perfect stack.
          </p>
        </div>
      ) : (
        // stack e kichu thakle list dekhabe
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.name} className="flex items-center justify-between border rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.tag1}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.name)}>✕</button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 border border-red-300 text-red-500 text-sm font-semibold py-2 rounded-lg"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}