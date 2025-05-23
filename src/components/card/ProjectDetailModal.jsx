/* eslint-disable react/prop-types */
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material'
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect
} from 'react'
import {
  Close,
  ArrowBack,
  ArrowForward,
  FiberManualRecord
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { RemoveScroll } from 'react-remove-scroll'
import { Link } from 'react-router-dom'
import ScrollIndicator from '@components/ScrollIndicator'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    filter: 'blur(0px)'
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 25,
      stiffness: 500,
      when: 'beforeChildren'
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: [0.48, 0.15, 0.25, 0.96],
      staggerChildren: 0.1
    }
  }
}

const slideFadeVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    filter: 'blur(8px)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1]
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    filter: 'blur(8px)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  })
}

const ProjectDetailModal = ({ open, onClose, project, allProjects }) => {
  const [selectedProject, setSelectedProject] = useState(project)
  const [direction, setDirection] = useState(0)
  const [isContentReady, setIsContentReady] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false)

  const contentRef = useRef()

  useEffect(() => {
    if (!open) {
      setSelectedProject(project)
      setDirection(0)
    }
  }, [open, project])

  useEffect(() => {
    if (open) {
      setIsBlurred(true)
    } else {
      const timer = setTimeout(() => setIsBlurred(false), 500)
      return () => clearTimeout(timer)
    }
  }, [open])

  const currentIndex = allProjects.findIndex((p) => p.id === selectedProject.id)

  const isFirst = currentIndex === 0
  const isLast = currentIndex === allProjects.length - 1

  const handlePrev = () => {
    if (!isFirst) {
      setDirection(-1)
      const prevProject = allProjects[currentIndex - 1]
      setSelectedProject(prevProject)
    }
  }

  const handleNext = () => {
    if (!isLast) {
      setDirection(1)
      const nextProject = allProjects[currentIndex + 1]
      setSelectedProject(nextProject)
    }
  }

  const hasAnyTech =
    !!selectedProject.tech?.frontend ||
    !!selectedProject.tech?.backend ||
    !!selectedProject.tech?.deploy ||
    !!selectedProject.tech?.extra

  const checkScrollable = useCallback(() => {
    if (contentRef.current) {
      clearTimeout(window.scrollCheckTimeout)

      window.scrollCheckTimeout = setTimeout(() => {
        const { scrollHeight, clientHeight } = contentRef.current
        const canScroll = scrollHeight > clientHeight + 5

        setIsScrollable(canScroll)
      }, 100)
    }
  }, [contentRef])

  useLayoutEffect(() => {
    if (contentRef.current && isContentReady) {
      contentRef.current.scrollTop = 0
      checkScrollable()
    }
  }, [selectedProject, isContentReady, checkScrollable])

  useLayoutEffect(() => {
    const node = contentRef.current
    if (!node) return

    setIsScrollable(false)
    node.scrollTop = 0

    const performCheck = () => {
      const isReady = node.scrollHeight > 0
      setIsContentReady(isReady)
      checkScrollable()
    }

    const timers = [setTimeout(performCheck, 50), setTimeout(performCheck, 300)]

    const checkReady = () => {
      const isReady = node.scrollHeight > 0
      setIsContentReady(isReady)
    }

    const fullCheck = () => {
      checkReady()
      checkScrollable()
    }

    const resizeObserver = new ResizeObserver(() => {
      checkScrollable()
    })
    resizeObserver.observe(node)

    const images = contentRef.current.querySelectorAll('img')
    const loadListeners = Array.from(images).map((img) => {
      img.addEventListener('load', fullCheck)
      return () => img.removeEventListener('load', fullCheck)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      resizeObserver.disconnect()
      clearTimeout(window.scrollCheckTimeout)
      loadListeners.forEach((cleanup) => cleanup())
    }
  }, [selectedProject, checkScrollable])

  useEffect(() => {
    return () => {
      setIsContentReady(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: open ? 1 : 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100dvh',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 100
            }}
            onClick={onClose}
          />
          <RemoveScroll enabled={open} removeScrollBar={false} allowPinchZoom>
            <Modal
              open={open}
              onClose={onClose}
              closeAfterTransition
              hideBackdrop
              sx={{
                zIndex: 100,
                overflow: 'auto',
                '& .MuiTypography-root, & .MuiButton-root, & .MuiInputBase-root':
                  {
                    fontFamily: 'Neue Montreal, sans-serif !important'
                  }
              }}>
              <Box
                component={motion.div}
                className='fixed inset-0 flex items-center justify-center'
                initial='hidden'
                animate={open ? 'visible' : 'exit'}
                exit='exit'
                variants={dropIn}
                onClick={onClose}
                sx={{
                  outline: 'none',
                  border: 'none',
                  touchAction: 'none',
                  alignItems: 'flex-start'
                }}>
                <Box
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                  sx={{
                    width: { xs: '90vw', md: 900 },
                    minHeight: '40vh',
                    height: 'auto',
                    willChange: 'scroll-position'
                  }}>
                  <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                      key={selectedProject.id}
                      custom={direction}
                      variants={slideFadeVariants}
                      initial='enter'
                      animate='center'
                      exit='exit'
                      style={{ width: '100%' }}
                      onAnimationStart={() => setIsContentReady(false)}
                      onAnimationComplete={() => setIsContentReady(true)}
                      className='w-[90vw] max-h-[90vh] my-[5vh] mx-auto rounded-[24px] relative bg-white shadow-[0_0_24px_rgba(0,0,0,0.1)] p-8 border border-[#ddd] flex flex-col'>
                      {selectedProject.title !== 'Hello Clever' &&
                        isScrollable && (
                        <ScrollIndicator contentRef={contentRef} />
                      )}
                      <IconButton
                        onClick={onClose}
                        sx={{
                          position: 'absolute',
                          right: 10,
                          top: 10,
                          color: 'text.secondary',
                          zIndex: 120,
                          '&:hover': {
                            backgroundColor: 'action.hover',
                            color: 'text.primary'
                          }
                        }}>
                        <Close />
                      </IconButton>

                      {/* Header Section */}
                      <Box
                        sx={{
                          mb: { xs: 0, sm: 2 },
                          position: 'sticky',
                          top: 0,
                          zIndex: 110,
                          borderBottom: '1px solid #eee'
                        }}>
                        <Typography
                          variant='h4'
                          sx={{
                            fontWeight: 800,
                            mb: 1,
                            '& a': {
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                textDecoration: 'none',
                                color: '#5D4037'
                              }
                            }
                          }}>
                          <Link to={selectedProject?.link || '#'}>
                            {selectedProject?.title}
                          </Link>
                        </Typography>

                        <Stack
                          direction='row'
                          spacing={1}
                          useFlexGap
                          flexWrap='wrap'
                          sx={{ mb: 1 }}>
                          {selectedProject?.role && (
                            <Chip
                              label={selectedProject.role}
                              size='small'
                              variant='filled'
                              sx={{
                                px: 1,
                                py: 2,
                                backgroundColor: '#b1a994',
                                color: '#fff'
                              }}
                            />
                          )}
                          {selectedProject?.company && (
                            <Chip
                              label={selectedProject.company}
                              size='small'
                              variant='outlined'
                              sx={{ px: 1, py: 2 }}
                            />
                          )}
                          {selectedProject?.timeline && (
                            <Chip
                              label={selectedProject.timeline}
                              size='small'
                              variant='outlined'
                              sx={{ px: 1, py: 2 }}
                            />
                          )}
                        </Stack>

                        {selectedProject?.description && (
                          <Typography
                            variant='overline'
                            sx={{
                              letterSpacing: 1.5,
                              textTransform: 'uppercase'
                            }}>
                            {selectedProject.description}
                          </Typography>
                        )}
                      </Box>

                      <Box
                        ref={contentRef}
                        sx={{
                          overflowY: 'auto',
                          scrollbarWidth: 'none',
                          position: 'relative',
                          height: '100%',
                          maxHeight: 'calc(100% - 200px)',
                          overscrollBehavior: 'contain'
                        }}>
                        {/* Paragraph Content */}
                        <Box sx={{ flex: 1, pr: '16px' }}>
                          <Box sx={{ mb: 2 }}>
                            {selectedProject.paragraph.map((item, index) => (
                              <Typography
                                key={`para-${index}`}
                                variant='body1'
                                sx={{ mb: 2, lineHeight: 1.6 }}>
                                {item}
                              </Typography>
                            ))}
                          </Box>
                        </Box>

                        {/* Tech Stack Section */}
                        {hasAnyTech && (
                          <Box sx={{ mb: 4 }}>
                            <Typography
                              variant='h6'
                              sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: 'text.primary'
                              }}>
                              Tech Stack
                            </Typography>

                            <Grid container spacing={2}>
                              {selectedProject.tech.frontend && (
                                <Grid item xs={12} sm={4}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      height: '100%',
                                      backgroundColor: 'grey.50',
                                      border: '1px solid',
                                      borderColor: 'divider',
                                      borderRadius: 2
                                    }}>
                                    <Typography
                                      variant='subtitle2'
                                      sx={{ fontWeight: 600, mb: 1 }}>
                                      Frontend
                                    </Typography>
                                    <Typography variant='body2'>
                                      {selectedProject.tech.frontend}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              )}

                              {selectedProject.tech.backend && (
                                <Grid item xs={12} sm={4}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      height: '100%',
                                      backgroundColor: 'grey.50',
                                      border: '1px solid',
                                      borderColor: 'divider',
                                      borderRadius: 2
                                    }}>
                                    <Typography
                                      variant='subtitle2'
                                      sx={{ fontWeight: 600, mb: 1 }}>
                                      Backend
                                    </Typography>
                                    <Typography variant='body2'>
                                      {selectedProject.tech.backend}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              )}

                              {selectedProject.tech.deploy && (
                                <Grid item xs={12} sm={4}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      height: '100%',
                                      backgroundColor: 'grey.50',
                                      border: '1px solid',
                                      borderColor: 'divider',
                                      borderRadius: 2
                                    }}>
                                    <Typography
                                      variant='subtitle2'
                                      sx={{ fontWeight: 600, mb: 1 }}>
                                      Deployment
                                    </Typography>
                                    <Typography variant='body2'>
                                      {selectedProject.tech.deploy}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              )}

                              {selectedProject.tech.extra && (
                                <Grid item xs={12} sm={4}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      height: '100%',
                                      backgroundColor: 'grey.50',
                                      border: '1px solid',
                                      borderColor: 'divider',
                                      borderRadius: 2
                                    }}>
                                    <Typography
                                      variant='subtitle2'
                                      sx={{ fontWeight: 600, mb: 1 }}>
                                      Tools
                                    </Typography>
                                    <Typography variant='body2'>
                                      {selectedProject.tech.extra}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              )}
                            </Grid>
                          </Box>
                        )}

                        {/* Responsibilities Section */}
                        {selectedProject?.responsibilities?.length > 0 && (
                          <Box
                            sx={{
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              mb: 2
                            }}>
                            <Typography
                              variant='h6'
                              sx={{
                                fontWeight: 600,
                                p: 2,
                                bgcolor: 'grey.50',
                                borderBottom: '1px solid',
                                borderColor: 'divider'
                              }}>
                              Responsibilities
                            </Typography>

                            <Box
                              sx={{
                                flex: 1,
                                display: 'block',
                                position: 'relative',
                                pl: 2,
                                pb: 2,
                                pr: 2,
                                pt: 1
                              }}>
                              <List dense disablePadding>
                                {selectedProject.responsibilities.map(
                                  (item, index) => (
                                    <ListItem
                                      key={`resp-${index}`}
                                      sx={{
                                        px: 0,
                                        alignItems: 'flex-start',
                                        '&:hover': {
                                          bgcolor: 'action.hover',
                                          borderRadius: 1
                                        }
                                      }}>
                                      <ListItemIcon
                                        sx={{ minWidth: 28, mt: '12px' }}>
                                        <FiberManualRecord
                                          sx={{
                                            fontSize: 8,
                                            color: '#000',
                                            '&:hover': {
                                              color: '#3E2723'
                                            }
                                          }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                          variant: 'body2',
                                          sx: {
                                            lineHeight: 1.6,
                                            pr: 1
                                          }
                                        }}
                                      />
                                    </ListItem>
                                  )
                                )}
                              </List>
                            </Box>
                          </Box>
                        )}

                        {/* Sreenshots */}
                        {selectedProject.title !== 'Hello Clever' &&
                          selectedProject.images?.length > 0 && (
                          <Box sx={{ mb: 4 }}>
                            <Typography
                              variant='h6'
                              sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: 'text.primary'
                              }}>
                                Screenshots
                            </Typography>

                            <Grid container spacing={2}>
                              {selectedProject.images.map((img, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                  <Box
                                    component='img'
                                    src={img}
                                    alt={`screenshot-${index}`}
                                    sx={{
                                      width: '100%',
                                      borderRadius: 2,
                                      maxHeight: '60dvh',
                                      objectFit: 'contain'
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        )}
                      </Box>

                      {/* Navigation Buttons */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mt: 3,
                          pt: 2,
                          borderTop: '1px solid #eee',
                          borderColor: 'divider',
                          position: 'sticky',
                          bottom: 0,
                          backgroundColor: 'white',
                          zIndex: 110
                        }}>
                        <Button
                          onClick={handlePrev}
                          disabled={isFirst}
                          size='small'
                          startIcon={<ArrowBack />}
                          sx={{
                            borderRadius: 5,
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 2,
                            cursor: 'pointer',
                            color: '#8B7355',
                            backgroundColor: '#F5F0E6',
                            '&:hover': {
                              backgroundColor: '#E3D9C8'
                            },
                            '&:active': {
                              backgroundColor: '#D4C9B8'
                            },
                            '&.Mui-disabled': {
                              color: '#B0A18D',
                              backgroundColor: '#F5F0E6',
                              cursor: 'not-allowed',
                              pointerEvents: 'auto'
                            }
                          }}>
                          Previous
                        </Button>

                        <Button
                          onClick={handleNext}
                          disabled={isLast}
                          size='small'
                          endIcon={<ArrowForward />}
                          sx={{
                            borderRadius: 5,
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 2,
                            cursor: 'pointer',
                            color: '#8B7355',
                            backgroundColor: '#F5F0E6',
                            '&:hover': {
                              backgroundColor: '#E3D9C8'
                            },
                            '&:active': {
                              backgroundColor: '#D4C9B8'
                            },
                            '&.Mui-disabled': {
                              color: '#B0A18D',
                              backgroundColor: '#F5F0E6',
                              cursor: 'not-allowed',
                              pointerEvents: 'auto'
                            }
                          }}>
                          Next
                        </Button>
                      </Box>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </Box>
            </Modal>
          </RemoveScroll>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectDetailModal
