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
    name: 'premium Motion graphics',
    video: '/videos/edit1.mp4',
    link: 'https://instagram.com/yourusername',
  },
  {
    number: '02',
    category: 'basic Edit',
    name: 'reel',
    video: '/videos/edit2.mp4',
    link: 'https://instagram.com/yourusername',
  },
  {
    number: '03',
    category: 'Motion Graphics',
    name: 'motion gtaphics',
    video: '/videos/edit3.mp4',
    link: 'https://instagram.com/yourusername',
  },
   {
    number: '04',
    category: 'speed ramp edit',
    name: 'vfx car edit',
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
  const totalCards = PROJECTS.length

  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky top-16 md:top-32 h-[75vh] md:h-[85vh]"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale, background: '#0C0C0C' }}
        className="h-full rounded-[60px] border-2 border-[#D7E2EA] p-8 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <span
              className="font-black"
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(3rem,10vw,140px)',
              }}
            >
              {project.number}
            </span>

            <div>
              <p
                className="uppercase tracking-widest text-sm"
                style={{
                  color: '#D7E2EA',
                  opacity: 0.6,
                }}
              >
                {project.category}
              </p>

              <h2
                className="uppercase font-semibold"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(1.5rem,3vw,2.5rem)',
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

        {/* Video */}
        <div className="flex-1 overflow-hidden rounded-[25px] md:rounded-[45px]">
          <video
            className="w-full h-full object-contain bg-black"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      className="rounded-t-[40px] md:rounded-t-[60px] -mt-14 relative z-10 px-4 md:px-10 py-20 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-28 leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3rem,12vw,160px)',
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col">
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