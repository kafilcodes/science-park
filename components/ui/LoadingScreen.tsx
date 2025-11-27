"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import namasteAnimation from "@/public/assets/lottie/Namaste_India.json.json";
import welcomeAnimation from "@/public/assets/lottie/Welcome.json";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [exit, setExit] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true)
            setTimeout(onComplete, 800) // Wait for exit animation
        }, 4000) // Show for 4 seconds
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl"
        >
            <div className="flex flex-col items-center gap-8">
                <div className="w-64 h-64 md:w-80 md:h-80">
                    <Lottie animationData={namasteAnimation} loop={true} className="w-full h-full" />
                </div>
                <div className="w-48 h-24 -mt-10">
                    <Lottie animationData={welcomeAnimation} loop={true} className="w-full h-full" />
                </div>
            </div>
        </motion.div>
    )
}
