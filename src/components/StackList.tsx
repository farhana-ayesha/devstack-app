import type { Tech } from "./TechCard";

type StackListProps = {
  stack: Tech[];
  onRemove: (id: string) => void;
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
        <div className="flex flex-col items-center text-center mt-10">
          <span className="text-4xl">🗃️</span>
          <p className="font-semibold mt-4">Your stack is empty.</p>
          <p className="text-sm text-gray-500 mt-1">
            Add technologies from the left to build your perfect stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between border rounded-lg p-3">
              <div className="flex items-center gap-2">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)}>✕</button>
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