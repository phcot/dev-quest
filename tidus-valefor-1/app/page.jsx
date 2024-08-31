import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/ui/Social";

// I use my diverse skillset to efficiently deliver substantial value for my clients.Software development, web development, data analytics, system modeling, numerical simulation.
const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:frex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-accent">Philippe Cote</span>
            </h1>
            <p className="max-w-[500px] nb-9 text-white/80"> 
              I'm a versatile jack-of-all-trades engineer who uses my diverse system, product and 
              software expertise to bring ideas to life. 
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
