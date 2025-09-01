'use client'

import { FAQs, FAQ } from '@/data/faq'
import { ChevronDown, Star } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Text from './Text'
import { tv } from 'tailwind-variants'

// Tailwind Variants
const faqSection = tv({
  base: "mx-auto max-w-full p-4 mt-16",
})

const headerWrapper = tv({
  base: "mb-8 text-start",
})

const headerTitle = tv({
  base: "flex items-center gap-2 sm:gap-3",
})

const faqList = tv({
  base: "space-y-4",
})

const faqItem = tv({
  base: "rounded-lg border border-[#bb0000] bg-black/40 p-4 transition-colors hover:bg-black/60",
})

const faqButton = tv({
  base: "flex w-full items-center justify-between text-left cursor-pointer focus:outline-hidden",
})

const faqIcon = tv({
  base: "h-6 w-6 text-white transition-transform duration-300",
  variants: {
    open: {
      true: "rotate-180",
      false: "",
    },
  },
})

const faqAnswer = tv({
  base: "overflow-hidden mt-3",
})

const answerText = tv({
  base: "text-white",
})

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
    <section className={faqSection()}>
      {/* Title + Description */}
      <div className={headerWrapper()}>
        <div className={headerTitle()}>
          <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          <Text as="h2">Frequently Asked Questions</Text>
        </div>
        <Text as="p" className="text-white">
          Got questions? We&apos;ve got answers! Check out our FAQ section to find
          answers to the most common questions about{" "}
          <span className="text-red-500 font-semibold">StreamVibe</span>.
        </Text>
      </div>

      {/* FAQ Items */}
      <div className={faqList()}>
        {FAQs.map((item: FAQ) => (
          <div key={item.id} className={faqItem()}>
            <button
              onClick={() => toggleAccordion(item.id)}
              className={faqButton()}
            >
              <Text as="h6" className="text-white">
                {item.title}
              </Text>
              <ChevronDown
                className={faqIcon({ open: activeIndex.includes(item.id) })}
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
                  className={faqAnswer()}
                >
                  <Text as="span" className={answerText()}>
                    {item.answer}
                  </Text>
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
