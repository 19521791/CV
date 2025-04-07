/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { slide } from '../../utils/animate.props'

const NavItem = ({ data, onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === data.href

  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={`nav-item cursor-pointer ${isActive ? 'active' : ''}`}
      onClick={() => {
        navigate(data.href)
        onClick()
      }}
    >
      {data.title}
    </motion.div>
  )
}

export default NavItem