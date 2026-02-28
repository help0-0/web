import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Target, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/stratford.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-40 h-40 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2">
            <span className="block bg-gradient-to-r from-primary-300 to-blue-300 bg-clip-text text-transparent">
              Global Sports Marketing & Infrastructure
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
        >
          Expert sports consultancy services to transform athletes, teams, and organizations into champions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 rounded-full font-semibold text-base sm:text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-center"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
        >
          {[
            { icon: Trophy, title: 'Championship Results', desc: 'Proven track record' },
            { icon: Target, title: 'Strategic Planning', desc: 'Data-driven approach' },
            { icon: Users, title: 'Team Development', desc: 'Holistic growth' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
            >
              <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <p className="text-xs sm:text-sm">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
