import heroImage from "../assets/banner-stack.png"

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-16"
    >
      {/* left side - text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#technologies"
            className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-full"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-gray-300 font-semibold text-sm px-6 py-3 rounded-full"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* right side - image */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Banner Stack"
          className="w-72 sm:w-96"
        />
      </div>
    </section>
  );
}