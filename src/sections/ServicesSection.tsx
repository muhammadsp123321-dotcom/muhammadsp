import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'motion graphics',
    description:
      'Passionate Motion Graphics Artist creating smooth, dynamic animations with creativity, precision, and attention to detail.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'Creating high-quality renders with realistic lighting, detailed textures, and optimized visual quality.',
  },
  {
    number: '03',
    name: 'cinematic',
    description:
      'Creating cinematic visuals with smooth transitions, immersive storytelling, and polished editing.',
  },
  {
    number: '04',
    name: 'amv',
    description:
      'Crafting fast-cut edits with smooth transitions and adding VFX and SFX control.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export default function ServicesSection() {
  return (
    <section
      className="rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-12 sm:mb-16 md:mb-20"
          style={{
            color: '#0C0C0C',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10"
              style={{
                borderBottom:
                  i < SERVICES.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : undefined,
                borderTop:
                  i === 0
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : undefined,
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-3 justify-center">
                <h3
                  className="font-semibold uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 1.8vw, 1.75rem)',
                  }}
                >
                  {service.name}
                </h3>

                <p
                  className="font-light leading-relaxed max-w-xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.7,
                    fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}