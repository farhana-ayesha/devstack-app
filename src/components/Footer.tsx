import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

        <div className="flex gap-3 mt-4">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-white">
            <FaGithub />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-white">
            <FaXTwitter />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-white">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </footer>
  );
}