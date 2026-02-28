import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Brain, BarChart3, Heart, Zap } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="h-1 bg-gradient-to-r from-primary-500 to-blue-500 mt-4 sm:mt-5 md:mt-6 rounded-full"
        />
      </div>
    </motion.div>
  )
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced data analysis and performance metrics to optimize athlete and team performance through cutting-edge technology.',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Comprehensive team development programs that foster collaboration, communication, and championship culture.',
    },
    {
      icon: Brain,
      title: 'Mental Coaching',
      description: 'Sports psychology and mental resilience training to develop the winning mindset required for peak performance.',
    },
    {
      icon: BarChart3,
      title: 'Strategic Planning',
      description: 'Data-driven strategic planning and tactical analysis to give your team the competitive edge.',
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Holistic wellness and injury prevention programs designed to keep athletes performing at their best.',
    },
    {
      icon: Zap,
      title: 'Performance Training',
      description: 'Customized training programs leveraging the latest sports science to maximize athletic potential.',
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive sports consultancy solutions tailored to elevate performance and achieve excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
