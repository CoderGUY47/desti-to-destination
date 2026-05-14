import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative w-full min-h-screen -mt-26 z-0 flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[url('/assets/Banner.png')] bg-cover bg-center">
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 -mt-20 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-6">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Explore breathtaking destinations and create unforgettable memories
          with <br className="hidden md:block" /> our curated travel experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="flex items-center gap-2 bg-[#18a0b5] hover:bg-[#14899b] text-white px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors uppercase"
          >
            Explore Now <FiArrowRight className="text-lg" />
          </Link>

          <Link
            href="/destinations"
            className="uppercase bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/50 text-white px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search Bar Container */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="w-full bg-black/40 backdrop-blur-md border-none">
          <div className="w-full flex flex-col md:flex-row">
            {/* Location */}
            <div className="flex-1 px-8 py-3 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <h3 className="text-white text-[17px] font-semibold mb-1">
                Location
              </h3>
              <p className="text-white/60 text-[13px]">Address, City Or Zip</p>
            </div>

            {/* Date/Duration */}
            <div className="flex-1 px-8 py-3 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <h3 className="text-white text-[17px] font-semibold mb-1">
                Date/Duration
              </h3>
              <p className="text-white/60 text-[13px]">Anytime/3 Days</p>
            </div>

            {/* Budget */}
            <div className="flex-1 px-8 py-3 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <h3 className="text-white text-[17px] font-semibold mb-1">
                Budget
              </h3>
              <p className="text-white/60 text-[13px]">$0-$3000</p>
            </div>

            {/* People */}
            <div className="flex-1 px-8 py-3 border-b md:border-b-0 border-white/10 text-left">
              <h3 className="text-white text-[17px] font-semibold mb-1">
                People
              </h3>
              <p className="text-white/60 text-[13px]">5-10</p>
            </div>

            {/* Search Button */}
            <button className="bg-[#18a0b5] hover:bg-[#14899b] text-white px-16 py-6 text-xl font-medium transition-colors flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;