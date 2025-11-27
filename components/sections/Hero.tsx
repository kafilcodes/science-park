"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { ArrowRight, Calendar } from "lucide-react"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import scienceLettersAnimation from "@/public/assets/lottie/Science letters artwork.json";
import scientistAnimation from "@/public/assets/lottie/Scientist (1).json";
import autumnAnimation from "@/public/assets/lottie/People in autumn scene.json";
import technologyAnimation from "@/public/assets/lottie/Technology.json";
import discoveryAnimation from "@/public/assets/lottie/Discovery.json";
import atomAnimation from "@/public/assets/lottie/Atom loading animation.json";
import experimentAnimation from "@/public/assets/lottie/Creative experiment animation.json";

const animations = [
    { data: scienceLettersAnimation, id: 1 },
    { data: scientistAnimation, id: 2 },
    { data: autumnAnimation, id: 3 },
    { data: technologyAnimation, id: 4 },
    { data: discoveryAnimation, id: 5 },
    { data: atomAnimation, id: 6 },
    { data: experimentAnimation, id: 7 },
]

export function Hero() {
    const [currentAnimation, setCurrentAnimation] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAnimation((prev) => (prev + 1) % animations.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-0">
            {/* Background Animations */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                    >
                        Discover the Wonders of <br className="hidden sm:block" />
                        <span className="text-teal-500">Science & Nature</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl md:text-2xl lg:mx-0"
                    >
                        Experience interactive exhibits, lush gardens, and educational programs at Science Park Dhamtari.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Button asChild size="lg" className="rounded-full text-lg h-12 px-8 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all hover:scale-105 w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white border-none">
                            <Link href="#exhibits">
                                Explore Exhibits <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 border-teal-500/20 text-teal-500 hover:bg-teal-500/10 hover:text-teal-600 transition-all hover:scale-105 w-full sm:w-auto">
                            <Link href="#contact">
                                Plan Your Visit <Calendar className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentAnimation}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
                            <Lottie
                                animationData={animations[currentAnimation].data}
                                loop={true}
                                className="w-full h-full drop-shadow-2xl"
                            />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section >
    )
}
