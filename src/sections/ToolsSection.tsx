import { motion } from "framer-motion";
import { SiBlender, SiFigma } from "react-icons/si";
import { FaFilm, FaVideo, FaImage, FaPalette } from "react-icons/fa";

const topRow = [
  { name: "After Effects", icon: <FaFilm size={50} color="#9999FF" /> },
  { name: "Premiere Pro", icon: <FaVideo size={70} color="#9999FF" /> },
  { name: "Blender", icon: <SiBlender size={70} color="#F5792A" /> },
];

const bottomRow = [
  { name: "Photoshop", icon: <FaImage size={70} color="#31A8FF" /> },
  { name: "Illustrator", icon: <FaPalette size={70} color="#FF9A00" /> },
  { name: "Figma", icon: <SiFigma size={70} color="#A259FF" /> },
];

function Row({ items, reverse = false, offset = 0 }: any) {
  return (
    <div className="w-full overflow-hidden py-8 flex justify-center">
      
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: reverse
            ? [offset, -1000 + offset]
            : [-1000 + offset, offset],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, y: -8 }}
            className="w-64 h-40 shrink-0 rounded-3xl bg-[#111] border border-[#333]
                       flex flex-col items-center justify-center gap-2"
          >
            <div className="w-24 h-24 grid place-items-center">
              {tool.icon}
            </div>

            <h3 className="text-white text-xl font-bold text-center">
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
    <section className="bg-[#0C0C0C] py-20 md:py-28 overflow-hidden px-4">

      <h2 className="text-center text-white text-4xl md:text-6xl font-black uppercase mb-4">
        Creative Toolkit
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Software powering every motion graphic.
      </p>

      {/* TOP ROW (shifted right) */}
      <Row items={topRow} reverse={false} offset={50} />

      {/* BOTTOM ROW (normal center) */}
      <Row items={bottomRow} reverse={true} offset={100} />

    </section>
  );
}