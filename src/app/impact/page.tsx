  <motion.div 
    className="testimonial-card bg-white p-6 rounded-lg shadow-md relative mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="testimonial-quote-mark">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-teal-500 opacity-50" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.59 4.59A2 2 0 1 1 11 7.98v.01c0 .46-.18.94-.48 1.30A6.18 6.18 0 0 0 9 13.5C9 13.5 9 19 4.5 19v-2a6 6 0 0 0 6-6c0-.96-.34-1.84-.92-2.47A2.02 2.02 0 0 1 8 7.28 2.02 2.02 0 0 1 9.59 4.6zm11 0A2 2 0 1 1 22 7.98v.01c0 .46-.18.94-.48 1.30a6.18 6.18 0 0 0-1.52 4.2c0 .01 0 5.51-4.5 5.51v-2a6 6 0 0 0 6-6c0-.96-.34-1.84-.92-2.47a2.02 2.02 0 0 1-1.58-1.23 2.02 2.02 0 0 1 1.59-2.71z" fill="currentColor"></path>
      </svg>
    </div>
    <p className="text-gray-700 mb-6 text-lg">
      CoSprout&apos;s mentorship program transformed my daughter&apos;s confidence in STEM subjects. Her mentor didn&apos;t just help with homework—they inspired her to pursue computer science as a career!
    </p>
    <div className="flex items-center">
      <div className="ml-4">
        <p className="font-semibold text-gray-900">Jessica R.</p>
        <p className="text-gray-600 text-sm">Parent of 15-year-old mentee</p>
      </div>
    </div>
  </motion.div>

  <motion.div 
    className="testimonial-card bg-white p-6 rounded-lg shadow-md relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <div className="testimonial-quote-mark">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-teal-500 opacity-50" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.59 4.59A2 2 0 1 1 11 7.98v.01c0 .46-.18.94-.48 1.30A6.18 6.18 0 0 0 9 13.5C9 13.5 9 19 4.5 19v-2a6 6 0 0 0 6-6c0-.96-.34-1.84-.92-2.47A2.02 2.02 0 0 1 8 7.28 2.02 2.02 0 0 1 9.59 4.6zm11 0A2 2 0 1 1 22 7.98v.01c0 .46-.18.94-.48 1.30a6.18 6.18 0 0 0-1.52 4.2c0 .01 0 5.51-4.5 5.51v-2a6 6 0 0 0 6-6c0-.96-.34-1.84-.92-2.47a2.02 2.02 0 0 1-1.58-1.23 2.02 2.02 0 0 1 1.59-2.71z" fill="currentColor"></path>
      </svg>
    </div>
    <p className="text-gray-700 mb-6 text-lg">
      Being a mentor with CoSprout has been the most rewarding experience of my college career. There&apos;s nothing like seeing a student&apos;s eyes light up when they finally understand a concept.
    </p>
    <div className="flex items-center">
      <div className="ml-4">
        <p className="font-semibold text-gray-900">Marcus T.</p>
        <p className="text-gray-600 text-sm">Volunteer Mentor, Stanford University</p>
      </div>
    </div>
  </motion.div> 