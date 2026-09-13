import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo-text.png"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
    <div>
         
       <img src={logo} alt="Dev Stack logo" className="h-9" />

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

        <div>
          <h4 className="font-bold text-sm">PRODUCT</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm">COMPANY</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm">LEGAL</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms Of Service</a></li>
          </ul>
        </div>
    </div>

           <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>

    </footer>
  );
}