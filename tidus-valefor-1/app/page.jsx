"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import styled from 'styled-components';

const ParticlesWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
`;

const ImageContainer = styled.div`
    position: relative;
    z-index: 2;
`;

// Components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import ParticlesContainer from "@/components/ui/ParticlesContainer";

// I use my diverse skillset to efficiently deliver substantial value for my clients.Software development, web development, data analytics, system modeling, numerical simulation.
const Home = () => {
  return(
    <section className="h-full">
      {/*Particles*/}
      <ParticlesWrapper>
        <ParticlesContainer/>
      </ParticlesWrapper>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Product Developer</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br /> <span className="text-accent">Philippe Cote</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80"> 
              A jack-of-all-trades engineer who uses his diverse system, product and 
              software expertise to bring your ideas to life. 
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
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <ImageContainer>
            <div className="order-2 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </ImageContainer>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
