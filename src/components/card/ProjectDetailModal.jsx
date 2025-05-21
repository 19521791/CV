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
import { useState, useEffect } from 'react'
import {
  Close,
  ArrowBack,
  ArrowForward,
  FiberManualRecord
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { RemoveScroll } from 'react-remove-scroll'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
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

  useEffect(() => {
    setSelectedProject(project)
  }, [project])

  const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id)
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

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 1300
            }}
            onClick={onClose}
          />
          <RemoveScroll>
            <Modal
              open={open}
              onClose={onClose}
              closeAfterTransition
              hideBackdrop
              sx={{
                zIndex: 1300,
                overflow: 'hidden',
                '& .MuiTypography-root, & .MuiButton-root, & .MuiInputBase-root': {
                  fontFamily: 'Neue Montreal, sans-serif !important'
                }
              }}
            >
              <Box
                component={motion.div}
                className="fixed inset-0 flex items-center justify-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropIn}
                onClick={onClose}
                sx={{ outline: 'none', border: 'none', touchAction: 'none' }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                  sx={{
                    width: { xs: '90vw', md: 900 },
                    maxHeight: '90vh'
                  }}
                >
                  <AnimatePresence
                    mode="wait"
                    custom={direction}
                    onExitComplete={() => {
                      document.body.style.overflow = 'auto'
                    }}
                  >
                    <motion.div
                      key={selectedProject.id}
                      custom={direction}
                      variants={slideFadeVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      style={{ width: '100%', height: '100%' }}
                      className='modal-container'
                      onScroll={(e) => {
                        e.stopPropagation()
                        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
                        if (scrollTop === 0) {
                          e.currentTarget.scrollTop = 1
                        } else if (scrollTop + clientHeight >= scrollHeight) {
                          e.currentTarget.scrollTop = scrollHeight - clientHeight - 1
                        }
                      }}
                    >
                      <IconButton
                        onClick={onClose}
                        sx={{
                          position: 'absolute',
                          right: 16,
                          top: 16,
                          color: 'text.secondary',
                          '&:hover': {
                            backgroundColor: 'action.hover',
                            color: 'text.primary'
                          }
                        }}
                      >
                        <Close />
                      </IconButton>

                      {/* Header Section */}
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                          {selectedProject?.title}
                        </Typography>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
                          {selectedProject?.role && (
                            <Chip label={selectedProject.role} color="primary" size="small" variant="filled" sx={{ px: 1, py: 2 }}/>
                          )}
                          {selectedProject?.company && (
                            <Chip label={selectedProject.company} size="small" variant="outlined" sx={{ px: 1, py: 2 }}/>
                          )}
                          {selectedProject?.timeline && (
                            <Chip label={selectedProject.timeline} size="small" variant="outlined" sx={{ px: 1, py: 2 }}/>
                          )}
                        </Stack>

                        {selectedProject?.description && (
                          <Typography
                            variant="overline"
                            sx={{
                              letterSpacing: 1.5,
                              textTransform: 'uppercase'
                            }}
                          >
                            {selectedProject.description}
                          </Typography>
                        )}
                      </Box>


                      {/* Paragraph Content */}
                      <Box sx={{ mb: 4 }}>
                        {selectedProject.paragraph.map((item, index) => (
                          <Typography
                            key={`para-${index}`}
                            variant="body1"
                            sx={{
                              mb: 2,
                              lineHeight: 1.6
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>


                      {/* Tech Stack Section */}
                      {(selectedProject.tech?.frontend || selectedProject.tech?.backend || selectedProject.tech?.deploy) && (
                        <Box sx={{ mb: 4 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 2,
                              color: 'text.primary'
                            }}
                          >
                      Tech Stack
                          </Typography>

                          <Grid container spacing={2}>
                            {selectedProject.tech.frontend && (
                              <Grid item xs={12} sm={4}>
                                <Paper elevation={0} sx={{
                                  p: 2,
                                  height: '100%',
                                  backgroundColor: 'grey.50',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 2
                                }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Frontend
                                  </Typography>
                                  <Typography variant="body2">
                                    {selectedProject.tech.frontend}
                                  </Typography>
                                </Paper>
                              </Grid>
                            )}

                            {selectedProject.tech.backend && (
                              <Grid item xs={12} sm={4}>
                                <Paper elevation={0} sx={{
                                  p: 2,
                                  height: '100%',
                                  backgroundColor: 'grey.50',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 2
                                }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Backend
                                  </Typography>
                                  <Typography variant="body2">
                                    {selectedProject.tech.backend}
                                  </Typography>
                                </Paper>
                              </Grid>
                            )}

                            {selectedProject.tech.deploy && (
                              <Grid item xs={12} sm={4}>
                                <Paper elevation={0} sx={{
                                  p: 2,
                                  height: '100%',
                                  backgroundColor: 'grey.50',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 2
                                }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Deployment
                                  </Typography>
                                  <Typography variant="body2">
                                    {selectedProject.tech.deploy}
                                  </Typography>
                                </Paper>
                              </Grid>
                            )}
                          </Grid>
                        </Box>
                      )}

                      {/* Responsibilities Section */}
                      {selectedProject?.responsibilities?.length > 0 && (
                        <Box sx={{
                          mb: 4,
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 2,
                          overflow: 'hidden'
                        }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 500,
                              p: 2,
                              bgcolor: 'grey.50',
                              borderBottom: '1px solid',
                              borderColor: 'divider'
                            }}
                          >
                      Responsibilities
                          </Typography>

                          <Box sx={{
                            maxHeight: 400,
                            overflowY: 'auto',
                            p: 2,
                            pb: 3,
                            pr: 3,
                            '&::-webkit-scrollbar': {
                              width: '6px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                              backgroundColor: (theme) => theme.palette.grey[400],
                              borderRadius: '3px'
                            },
                            '&::-webkit-scrollbar-track': {
                              backgroundColor: (theme) => theme.palette.grey[100]
                            }
                          }}>
                            <List dense disablePadding>
                              {selectedProject.responsibilities.map((item, index) => (
                                <ListItem
                                  key={`resp-${index}`}
                                  sx={{
                                    px: 0,
                                    // py: 1,
                                    alignItems: 'flex-start',
                                    '&:hover': {
                                      bgcolor: 'action.hover',
                                      borderRadius: 1
                                    }
                                  }}
                                >
                                  <ListItemIcon sx={{
                                    minWidth: 28,
                                    mt: '10px'
                                  }}>
                                    <FiberManualRecord sx={{
                                      fontSize: 10,
                                      color: 'primary.main'
                                    }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                      variant: 'body2',
                                      sx: { lineHeight: 1.6, pr: 1 }
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Box>
                      )}

                      {/* Navigation Buttons */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mt: 4,
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'divider'
                        }}
                      >
                        <Button
                          onClick={handlePrev}
                          disabled={isFirst}
                          size="small"
                          startIcon={<ArrowBack />}
                          sx={{
                            borderRadius: 5,
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 1,
                            cursor: 'pointer',
                            '&.Mui-disabled': {
                              cursor: 'not-allowed',
                              pointerEvents: 'auto'
                            }
                          }}
                        >
                          Previous
                        </Button>

                        <Button
                          onClick={handleNext}
                          disabled={isLast}
                          size="small"
                          endIcon={<ArrowForward />}
                          sx={{
                            borderRadius: 5,
                            textTransform: 'none',
                            fontWeight: 500,
                            px: 1,
                            cursor: 'pointer',
                            '&.Mui-disabled': {
                              cursor: 'not-allowed',
                              pointerEvents: 'auto'
                            }
                          }}
                        >
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
