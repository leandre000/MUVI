// appData/faq.ts
export interface FAQ {
  id: number
  title: string
  answer: string
}

export const FAQs: FAQ[] = [
  {
    id: 1,
    title: "What is MuviStream?",
    answer:
      "MuviStream is a streaming platform optimized for smartphones, TVs, and laptops, offering seamless entertainment anytime, anywhere.",
  },
  {
    id: 2,
    title: "Can I watch on multiple devices?",
    answer:
      "Yes, you can stream MuviStream on smartphones, smart TVs, and laptops without additional charges.",
  },
  {
    id: 3,
    title: "Do you offer a free trial?",
    answer:
      "Yes, we provide a 7-day free trial so you can explore all features before choosing a plan.",
  },
  {
    id: 4,
    title: "How do I cancel my subscription?",
    answer:
      "You can easily cancel anytime from your account settings. No hidden fees or contracts.",
  },
]
