import React, { PropsWithChildren, useContext } from 'react'
import { motion, Variants } from 'framer-motion'
import { RouteContext } from '@/providers/RouteProvider'

const transition = { ease: 'easeInOut', duration: 0.3 }
const AnimationLayout = ({ children }: PropsWithChildren) => {
  const { isPush } = useContext(RouteContext)

  const variants = {
    enter() {
      return {
        x: 0,
        transition,
        transitionEnd: {
          position: 'static'
        },
        ...(isPush && {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        })
      }
    },
    initial() {
      return {
        x: isPush ? '100%' : '-100%',
        ...(isPush && { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }),
        transition,
        ...(isPush
          ? {
              position: 'fixed',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }
          : {})
      }
    },
    exit() {
      const isPop = !isPush
      return {
        x: isPop ? '100%' : '-100%',
        zIndex: isPop ? 1 : -1,
        ...(isPop && { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }),
        transition,
        ...(isPop && {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        })
      }
    }
  }

  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={variants as Variants}>
      {children}
    </motion.div>
  )
}

export default AnimationLayout
