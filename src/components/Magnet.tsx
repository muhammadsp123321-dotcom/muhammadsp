import { useRef, useState, ReactNode, MouseEvent as ReactMouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)')
  const [transition, setTransition] = useState(inactiveTransition)
  const [isActive, setIsActive] = useState(false)

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = Math.abs(e.clientX - centerX) - rect.width / 2
    const distY = Math.abs(e.clientY - centerY) - rect.height / 2
    const dist = Math.max(distX, distY)

    if (dist < padding) {
      if (!isActive) {
        setIsActive(true)
        setTransition(activeTransition)
      }
      const deltaX = (e.clientX - centerX) / strength
      const deltaY = (e.clientY - centerY) / strength
      setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0)`)
    } else if (isActive) {
      setIsActive(false)
      setTransition(inactiveTransition)
      setTransform('translate3d(0px, 0px, 0)')
    }
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setTransition(inactiveTransition)
    setTransform('translate3d(0px, 0px, 0)')
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
