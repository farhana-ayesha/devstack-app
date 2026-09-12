
import {useEffect,useState} from "react";
import Nav from "./components/Nav";
import Hero from "./components/hero";
import Technologies from "./components/technologies";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  console.log(technologies);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex-col items-stretch">
      <Nav />
      <Hero/>
      <Technologies/>
    </div>
  );
}

export default App;