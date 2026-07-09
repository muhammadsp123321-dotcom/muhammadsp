import { motion } from "framer-motion";
import { SiBlender, SiFigma } from "react-icons/si";
import { FaFilm, FaVideo, FaImage, FaPalette } from "react-icons/fa";

const topRow = [
  { name: "After Effects", icon: <FaFilm size={90} color="#9999FF" /> },
  { name: "Premiere Pro", icon: <FaVideo size={90} color="#9999FF" /> },
  { name: "Blender", icon: <SiBlender size={90} color="#F5792A" /> },
];

const bottomRow = [
  { name: "Photoshop", icon: <FaImage size={90} color="#31A8FF" /> },
  { name: "Illustrator", icon: <FaPalette size={90} color="#FF9A00" /> },
  { name: "Figma", icon: <SiFigma size={90} color="#A259FF" /> },
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
    <div className="w-full overflow-hidden py-6 md:py-8">
      <motion.div
        className="flex gap-4 md:gap-8 w-max"
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
              scale: 1.05,
              y: -8,
            }}
            className="
              w-[150px]
              sm:w-[180px]
              md:w-[260px]
              lg:w-[320px]

              h-[120px]
              sm:h-[140px]
              md:h-[180px]
              lg:h-[220px]

              shrink-0
              rounded-[24px]
              md:rounded-[32px]

              bg-[#11111180]
              backdrop-blur-md
              border border-[#2a2a2a]

              flex flex-col
              items-center
              justify-center

              gap-2 md:gap-5
            "
          >
            <div className="scale-50 sm:scale-75 md:scale-100">
              {tool.icon}
            </div>

            <h3 className="text-white text-sm sm:text-lg md:text-2xl font-bold text-center px-2">
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
      className="bg-[#0C0C0C] py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full">
        <h2 className="text-center text-white text-4xl sm:text-5xl md:text-8xl font-black uppercase mb-4 px-4">
          Creative Toolkit
        </h2>

        <p className="text-center text-gray-400 text-sm sm:text-base md:text-xl mb-12 md:mb-16 px-4">
          Software powering every motion graphic.
        </p>

        <Row items={topRow} />

        <div className="mt-2 md:mt-6">
          <Row items={bottomRow} reverse />
        </div>
      </div>
    </section>
  );
}