import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
  onClick={scrollToTop}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 30 }}
  transition={{ duration: 0.3 }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="
    fixed
    bottom-6 right-6
    md:bottom-8 md:right-8
    z-50
    w-14 h-14 md:w-16 md:h-16
    rounded-full
    backdrop-blur-xl
    bg-[#0B1025]/80
    border border-[#4DD0E1]/40
    text-[#4DD0E1]
    hover:bg-[#4DD0E1]
    hover:text-[#0B1025]
    shadow-[0_0_20px_rgba(77,208,225,0.25)]
    flex items-center justify-center
    transition-colors duration-300
  "
>
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 md:w-8 md:h-8"
    initial={{ y: 2 }}
    animate={{ y: 0 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.2,
      ease: "easeInOut",
    }}
  >
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </motion.svg>
</motion.button>
      )}
    </AnimatePresence>
  )
}
