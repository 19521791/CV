/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { slide } from '@/utils/animate.props'
import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const NavItem = ({ data, onClick }) => {
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === data.href

  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false)

  const navItemVariants = isMobile
    ? {}
    : slide

  useEffect(() => {
    const shouldHide =
      isMobile &&
      (data.href === '/model' || data.title.toLowerCase().includes('3d'))
    setIsHiddenOnMobile(shouldHide)
  }, [data.href, data.title, isMobile])

  if (isHiddenOnMobile) return null

  return (
    <motion.div
      custom={data.index}
      variants={navItemVariants}
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
