"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
    //init
    const particlesInit = useCallback(async(engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async() => {}, []);

  return (
    <Particles
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
               quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 1,
            },
          }
        },
        particles: {
          color: {
            value: '#000000',
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 4,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min:1, max: 5}
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
