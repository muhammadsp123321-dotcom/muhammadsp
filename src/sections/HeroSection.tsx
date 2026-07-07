import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
<<<<<<< HEAD
        <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center px-4 md:px-10 pt-6 md:pt-8">
=======
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
>>>>>>> 093f53146b5669fde27091d1902d989eacdcb4a3
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
<<<<<<< HEAD
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center md:text-left text-[3rem] sm:text-[4rem] md:text-[8rem] lg:text-[13vw]">
=======
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[15vw] sm:text-[15vw] md:text-[15vw] lg:text-[13.8vw]">
>>>>>>> 093f53146b5669fde27091d1902d989eacdcb4a3
            Muhammad Sp
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
<<<<<<< HEAD
       className="
         absolute
         left-1/2
        -translate-x-1/2
         z-10
         bottom-0
         w-[180px]
         sm:w-[250px]
         md:w-[440px]
         lg:w-[520px]
        "
=======
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
>>>>>>> 093f53146b5669fde27091d1902d989eacdcb4a3
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="muhammadsp portfolio"
            className="w-full h-auto"
          />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
