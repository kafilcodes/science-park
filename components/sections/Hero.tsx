"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import scienceLettersAnimation from "@/public/assets/lottie/Science letters artwork.json";
import atomAnimation from "@/public/assets/lottie/Atom loading animation.json";
import rocketAnimation from "@/public/assets/lottie/Technology.json";
import microscopeAnimation from "@/public/assets/lottie/Science Research.json";
import discoveryAnimation from "@/public/assets/lottie/Discovery.json";
import experimentAnimation from "@/public/assets/lottie/Creative experiment animation.json";
import autumnAnimation from "@/public/assets/lottie/People in autumn scene.json";
import scientistAnimation from "@/public/assets/lottie/Scientist (1).json";
import femaleScientistAnimation from "@/public/assets/lottie/Female Scientist Research On Lab.json";
import worldEnvironmentDayAnimation from "@/public/assets/lottie/World Environment Day.json";


// Configurable Animation List
const HERO_ANIMATIONS = [
    { id: 1, data: scienceLettersAnimation, name: "Science Letters" },
    { id: 2, data: scientistAnimation, name: "Scientist" },
    { id: 3, data: atomAnimation, name: "Atom" },
    { id: 4, data: rocketAnimation, name: "Rocket" },
    { id: 5, data: microscopeAnimation, name: "Microscope" },
    { id: 6, data: discoveryAnimation, name: "Discovery" },
    { id: 7, data: experimentAnimation, name: "Experiment" },
    { id: 8, data: autumnAnimation, name: "Autumn" },
    { id: 9, data: femaleScientistAnimation, name: "Female Scientist Research On Lab" },
    { id: 10, data: worldEnvironmentDayAnimation, name: "World Environment Day" },

];

export function Hero({ isLoading = false }: { isLoading?: boolean }) {
    const [currentAnimation, setCurrentAnimation] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAnimation((prev) => (prev + 1) % HERO_ANIMATIONS.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0 bg-white">
            {/* Background Elements - Subtle/Plain */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-50/30 via-transparent to-transparent opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-8 order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
                            👋 Welcome to Science Park Dhamtari 
                        </div>

                        <div className="space-y-1 sm:space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-teal-600 leading-tight"
                            >
                                Discover the Wonders
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-teal-600 leading-tight"
                            >
                                of Science & Nature
                            </motion.div>
                        </div>

                        <p className="max-w-[800px] text-muted-foreground text-base sm:text-lg md:text-xl/relaxed lg:text-2xl/relaxed">
                            Experience interactive exhibits, lush gardens, and educational programs at Science Park Dhamtari.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="#exhibits" className="w-full sm:w-auto">
                                <HoverBorderGradient
                                    containerClassName="rounded-full w-full sm:w-auto"
                                    as="button"
                                    className="bg-teal-600 text-white flex items-center justify-center space-x-2 px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 w-full sm:w-auto text-sm lg:text-base xl:text-lg transition-all duration-200 hover:bg-teal-700 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Explore Exhibits</span>
                                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                                </HoverBorderGradient>
                            </Link>
                            <Link href="#contact" className="w-full sm:w-auto">
                                <HoverBorderGradient
                                    containerClassName="rounded-full w-full sm:w-auto"
                                    as="button"
                                    className="bg-white text-teal-600 border border-teal-100 flex items-center justify-center space-x-2 px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 w-full sm:w-auto text-sm lg:text-base xl:text-lg transition-all duration-200 hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Plan Your Visit</span>
                                    <Calendar className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                                </HoverBorderGradient>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Graphics (Chained Animation) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full aspect-square max-w-[500px] lg:max-w-[700px] mx-auto lg:mr-0 flex items-center justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentAnimation}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-[72%] h-[72%] sm:w-[81%] sm:h-[81%] flex items-center justify-center" // Reduced by ~10% (80->72, 90->81)
                                >
                                    <Lottie
                                        animationData={HERO_ANIMATIONS[currentAnimation].data}
                                        loop={true}
                                        className="w-full h-full drop-shadow-2xl"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

