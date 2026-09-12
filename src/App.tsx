import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Nav";
import Hero from "./components/hero";
import Technologies from "./components/technologies";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}