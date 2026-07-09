import { motion } from "framer-motion";
import { SiBlender, SiFigma } from "react-icons/si";
import { FaFilm, FaVideo, FaImage, FaPalette } from "react-icons/fa";

const topRow = [
  { name: "After Effects", icon: <FaFilm size={60} color="#9999FF" /> },
  { name: "Premiere Pro", icon: <FaVideo size={60} color="#9999FF" /> },
  { name: "Blender", icon: <SiBlender size={60} color="#F5792A" /> },
];

const bottomRow = [
  { name: "Photoshop", icon: <FaImage size={60} color="#31A8FF" /> },
  { name: "Illustrator", icon: <FaPalette size={60} color="#FF9A00" /> },
  { name: "Figma", icon: <SiFigma size={60} color="#A259FF" /> },
];

function Row({
  items,
  reverse = false,
}: {
  items: any[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 md:py-6">
      <motion.div
        className="flex gap-3 md:gap-6 w-max"
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              y: -6,
            }}
            className="
              w-[120px]
              sm:w-[150px]
              md:w-[220px]
              lg:w-[260px]

              h-[100px]
              sm:h-[120px]
              md:h-[150px]
              lg:h-[180px]

              shrink-0
              rounded-[20px]
              md:rounded-[28px]

              bg-[#11111180]
              backdrop-blur-md
              border border-[#2a2a2a]

              flex flex-col
              items-center
              justify-center

              gap-2
            "
          >
            <div className="scale-75 md:scale-100">
              {tool.icon}
            </div>

            <h3 className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center px-2">
              {tool.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="bg-[#0C0C0C] py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full">
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-3 px-4">
          Creative Toolkit
        </h2>

        <p className="text-center text-gray-400 text-sm md:text-lg mb-10 md:mb-14 px-4">
          Software powering every motion graphic.
        </p>

        <Row items={topRow} />

        <div className="mt-2 md:mt-4">
          <Row items={bottomRow} reverse />
        </div>
      </div>
    </section>
  );
}