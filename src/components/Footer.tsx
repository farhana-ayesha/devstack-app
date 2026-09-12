export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold text-sm w-9 h-9 flex items-center justify-center rounded-lg">
            DS
          </span>
          <span className="font-bold text-lg">
            Dev <span className="text-pink-600">Stack</span>
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Tools, technologies, and resources for developers building modern software.
        </p>
      </div>
    </footer>
  );
}