'use client'

import { FAQs, FAQ } from '@/data/faq'
import { ChevronDown, Star } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Text from './Text'

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const toggleAccordion = (id: number) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex.includes(id)
        ? prevActiveIndex.filter((activeId) => activeId !== id)
        : [...prevActiveIndex, id]
    )
  }

  return (
    <section className="mx-auto max-w-full p-4 mt-16 ">
      {/* Title + Description aligned left */}
      <div className="mb-8 text-start">
        <div className="flex items-center gap-2 sm:gap-3">
        <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
        <Text as='h2'>Frequently Asked Questions</Text>
        </div>
        <Text as='p' className='text-white'>
          Got questions? We&apos;ve got answers! Check out our FAQ section to find
          answers to the most common questions about <span className="text-red-500 font-semibold">StreamVibe</span>.
        </Text>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {FAQs.map((item: FAQ) => (
          <div
            key={item.id}
            className="rounded-lg border border-[#bb0000] bg-black/40 p-4 hover:bg-black/60 transition-colors"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="flex  cursor-pointer w-full items-center justify-between text-left focus:outline-hidden"
            >
              <Text as='h6' className='text-white'>{item.title}</Text>
              <ChevronDown
                className={`h-6 w-6 text-white transition-transform duration-300 ${
                  activeIndex.includes(item.id) ? 'rotate-180' : ''
                }`}
              />
            </button>
 
            <AnimatePresence initial={false}>
              {activeIndex.includes(item.id) && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden mt-3"
                >
                  <Text as='span' className="text-white">{item.answer}</Text>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs
