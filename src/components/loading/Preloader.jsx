import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="loader-container preloader will-change-transform backface-hidden"
    >
      <div className="page-loader"></div>
    </motion.div>
  )
}

export default Preloader