import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

interface Project {
  number: string
  category: string
  name: string
  video: string
  link: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Motion Edit',
    name: 'Premium Motion Graphics',
    video: '/videos/edit1.mp4',
    link: 'https://instagram.com/yourusername',
  },
  {
    number: '02',
    category: 'Basic Edit',
    name: 'Reel Edit',
    video: '/videos/edit2.mp4',
    link: 'https://instagram.com/yourusername',
  },
  {
    number: '03',
    category: 'Motion Graphics',
    name: 'Creative Motion Graphics',
    video: '/videos/edit3.mp4',
    link: 'https://instagram.com/yourusername',
  },
  {
    number: '04',
    category: 'Speed Ramp Edit',
    name: 'VFX Car Edit',
    video: '/videos/edit4.mp4',
    link: 'https://instagram.com/yourusername',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.03

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  )

  return (
    <div
      ref={cardRef}
      className="sticky top-12 md:top-20 h-[60vh] md:h-[72vh]"
      style={{ top: `${index * 24 + 80}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[24px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 md:p-6 flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{
                fontSize: 'clamp(2rem,6vw,5rem)',
              }}
            >
              {project.number}
            </span>

            <div>
              <p className="uppercase tracking-widest text-xs md:text-sm text-[#D7E2EA]/60">
                {project.category}
              </p>

              <h2
                className="uppercase font-semibold text-[#D7E2EA]"
                style={{
                  fontSize: 'clamp(1rem,2vw,1.8rem)',
                }}
              >
                {project.name}
              </h2>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiveProjectButton />
          </a>
        </div>

        <div className="flex-1 overflow-hidden rounded-[16px] md:rounded-[28px]">
          <video
            className="w-full h-full object-contain bg-black rounded-[16px] md:rounded-[28px]"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      className="rounded-t-[30px] md:rounded-t-[50px] -mt-10 relative z-10 px-4 md:px-8 py-16 md:py-24"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-12 md:mb-16 leading-none tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem,8vw,6rem)',
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}