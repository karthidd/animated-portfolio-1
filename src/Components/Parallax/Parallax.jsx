import './Parallax.scss'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Parallax = ({ type }) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start(i => ({
        x: [1000, 0],
        opacity: [0, 1],
        transition: { duration: 1, delay: i * 0.5 }
      }))
      setHasAnimated(false)
    }
  }, [controls, inView, hasAnimated])

  const images = [
    { className: "html" },
    { className: "css" },
    { className: "js" },
    { className: "react" },
    { className: "github" },
  ]

  return (
    <div
      className={`parallax ${type === "services" ? "dark-theme" : "light-theme"}`}
    >
      <motion.h1>{type === "services" ? "What We Do" : "What We Did?"}</motion.h1>
      
      <div className="images-container" ref={ref}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={image.className}
            initial={{ x: 1000, opacity: 0 }}
            animate={controls}
            custom={index}
          />
        ))}
        
      </div>
    </div>
  )
}

export default Parallax
