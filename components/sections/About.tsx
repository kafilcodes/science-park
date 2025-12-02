"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Map, Building2, IndianRupee, FlaskConical } from "lucide-react"
import dynamic from "next/dynamic"
import { useState, useEffect, useRef } from "react"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import educationAnimation from "@/public/assets/lottie/Education.json";
import telescopeAnimation from "@/public/assets/lottie/Man looking through binoculars.json";
import plantedTreeAnimation from "@/public/assets/lottie/A girl planted tree.json";
import mapAnimation from "@/public/assets/lottie/Map-map.json";

const features = [
    {
        title: "Our Mission",
        description: "To ignite curiosity and foster a love for science in every visitor through interactive learning experiences.",
        animation: educationAnimation,
        color: "text-primary",
    },
    {
        title: "Our Vision",
        description: "To be a leading center for scientific exploration and innovation in the region, inspiring future generations.",
        animation: telescopeAnimation,
        color: "text-accent",
    },
    {
        title: "Our Values",
        description: "We believe in accessibility, sustainability, and the power of hands-on experimentation to drive learning.",
        animation: plantedTreeAnimation,
        color: "text-secondary",
    },
]

const stats = [
    { label: "Total Area", value: "10 Acres", icon: Map },
    { label: "Buildup Area", value: "50,000 sq ft", icon: Building2 },
    { label: "Capital Cost", value: "₹ 15 Cr", icon: IndianRupee },
    { label: "Exhibits", value: "50+", icon: FlaskConical },
]

export function About() {
    return (
        <section className="container py-24 flex flex-col gap-16">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    About Science Park
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto"
                >
                    A place where science meets nature, creating a unique environment for learning and discovery.
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 group">
                            <CardHeader className="p-6 pb-0 flex flex-col items-center text-center gap-4">
                                <div className="h-40 w-40 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                                    <Lottie animationData={feature.animation} loop={true} className="w-full h-full" />
                                </div>
                                <CardTitle className="text-xl font-bold text-foreground group-hover:text-teal-500 transition-colors">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-2 text-center">
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-12 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[300px] w-full flex items-center justify-center"
                >
                    <Lottie animationData={mapAnimation} loop={true} className="w-full h-full drop-shadow-xl" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative z-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-teal-500/20 bg-white p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                        >
                            <div className="mb-3 p-2.5 rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                                <Counter value={stat.value} color={index % 2 === 0 ? "text-primary" : "text-accent"} />
                            </h3>
                            <p className="text-muted-foreground font-medium text-xs sm:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Counter({ value, color }: { value: string, color: string }) {
    const numberMatch = value.match(/[\d,]+/)
    const number = numberMatch ? parseInt(numberMatch[0].replace(/,/g, "")) : 0
    const suffix = value.replace(/[\d,]+/, "").trim()
    const prefix = value.match(/^[^\d]+/) ? value.match(/^[^\d]+/)?.[0] : ""

    return (
        <span className={`flex items-baseline gap-1 ${color}`}>
            {prefix}
            <CountUpAnimation end={number} />
            <span className="text-lg md:text-2xl text-foreground/80">{suffix}</span>
        </span>
    )
}

function CountUpAnimation({ end }: { end: number }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10px" })

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [end, isInView])

    return <span ref={ref} className="text-3xl md:text-5xl font-bold tracking-tight">{count}</span>
}
