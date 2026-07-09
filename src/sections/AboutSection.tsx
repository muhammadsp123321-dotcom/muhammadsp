import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Left Top */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[5%] left-[2%] w-[80px] sm:w-[120px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Left Bottom */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[10%] left-[4%] w-[80px] sm:w-[120px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Top */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[5%] right-[2%] w-[80px] sm:w-[120px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Bottom */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[10%] right-[4%] w-[90px] sm:w-[130px] md:w-[200px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
          }}
        >
          About Me
        </h2>
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-8 mt-8 md:mt-12">
        <AnimatedText
          text="I'm Muhammad Sp, a Motion Graphics & Video Editor from India. I create cinematic edits, anime edits, gaming montages, and high-quality After Effects animations."
          className="text-center leading-relaxed max-w-[900px] font-medium px-4"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(1rem, 2vw, 1.8rem)',
          }}
        />

        <div className="mt-4">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}