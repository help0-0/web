import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Target, Lightbulb, Shield } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our consultancy services.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our focus is on delivering measurable results and tangible outcomes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and innovative methodologies.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest standards of professionalism and ethics.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Avontide</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Avontide is a premier sports consultancy firm dedicated to transforming athletic performance 
              and organizational excellence. With over 15 years of experience, we've helped hundreds of 
              athletes and teams reach their full potential.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our multidisciplinary team combines expertise in sports science, psychology, data analytics, 
              and strategic planning to deliver comprehensive solutions tailored to your unique needs.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700 font-medium">Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700 font-medium">Global Reach</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700 font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
