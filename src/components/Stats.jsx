import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 500, suffix: '+', label: 'Athletes Trained' },
    { value: 150, suffix: '+', label: 'Teams Consulted' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 15, suffix: '+', label: 'Years Experience' },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Proven Track Record
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Numbers that speak to our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
