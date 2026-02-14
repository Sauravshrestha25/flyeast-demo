"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductRevealCardProps {
  name?: string
  image?: string
  description?: string
  onAdd?: () => void
  enableAnimations?: boolean
  className?: string
}

export function ProductRevealCard({
  name = "Everest Base Camp Trek",
  image = "/images/trek1.png",
  description = "Everest Base Camp Trek is a once-in-a-lifetime adventure that takes you to the heart of the Himalayas.",
  onAdd,
  className,
}: ProductRevealCardProps) {


  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  }

  const frontContentVariants = {
    rest: { opacity: 1, y: 0 },
    hover: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  }

  const overlayVariants = {
    rest: {
      opacity: 0,
      y: "100%",
    },
    hover: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 28,
        staggerChildren: 0.1,
      },
    },
  }

  const contentVariants = {
    rest: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group",
        "shadow-xl shadow-black/10",
        className
      )}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* FRONT TITLE + GRADIENT (disappears on hover) */}
      <motion.div
        variants={frontContentVariants}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-bold font-primary text-white drop-shadow-lg">
            {name}
          </h3>
        </div>
      </motion.div>

      {/* HOVER OVERLAY */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end"
      >
        <div className="p-6 space-y-4 text-white">
          
          <motion.p
            variants={contentVariants}
            className="text-sm leading-relaxed text-white/90"
          >
            {description}
          </motion.p>

          <motion.div variants={contentVariants} className="space-y-3">
            
            {/* View Details - OUTLINE */}
            <button
              onClick={onAdd}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full border-white text-black  rounded-full hover:bg-white/10"
              )}
            >
              View Details
            </button>

            {/* Book Now - BRAND */}
            <button
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-brand text-white rounded-full hover:bg-brand/90 border-none"
              )}
            >
              Book Now
            </button>

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
