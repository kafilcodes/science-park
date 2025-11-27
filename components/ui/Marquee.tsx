"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MarqueeProps {
    className?: string
    text: string
    speed?: number
}

import { Clock, Sparkles } from "lucide-react"

export function Marquee({ className, text, speed = 30 }: MarqueeProps) {
    return (
        <div className={cn("overflow-hidden whitespace-nowrap flex", className)}>
            <motion.div
                className="inline-block"
                style={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", duration: text.length / speed, repeat: Infinity }}
            >
                {text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;
            </motion.div>
            <motion.div
                className="inline-block"
                style={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", duration: text.length / speed, repeat: Infinity }}
            >
                {text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;
            </motion.div>
        </div>
    )
}
