import { motion } from "framer-motion"

// Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculate the reverse index for staggerred delay
const reverseIndex = (index)=> {
    const totalSteps = 4; // number of steps
return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* rendre 6 motion divs, each represnting a step of the stairs.}
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated dynamically based on its reserved index,
        creating a staggered effect with decreasing delay for each subsequent step.  
        */}
    {[...Array(4)].map((_,index)=> {
        return(
            <motion.div key={index} variants={stairAnimation} initial="initial"
            animate="animate" exit="exit" transition={{
                duration: 0.15,
                ease: "easeInOut",
                delay: reverseIndex(index)*0.1,
            }} 
            className="h-full w-full bg-gray-400 relative"
            />
        );
      })}
    </>
  );
};

export default Stairs;
