"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import physicsAnimation from "@/public/assets/lottie/Physics simulation.json";
import bioAnimation from "@/public/assets/lottie/Bio Lab.json";
import spaceAnimation from "@/public/assets/lottie/Cute astronaut operating laptop.json";
import chemistryAnimation from "@/public/assets/lottie/hard science.json";

const exhibits = [
    {
        title: "Physics Playground",
        description: "Experience the laws of motion and gravity firsthand with our interactive installations.",
        animation: physicsAnimation,
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Biology Corner",
        description: "Dive into the microscopic world and understand the building blocks of life.",
        animation: bioAnimation,
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Space Exploration",
        description: "Journey through the cosmos and learn about our solar system and beyond.",
        animation: spaceAnimation,
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Chemistry Lab",
        description: "Mix, react, and discover the magic of chemical reactions safely.",
        animation: chemistryAnimation,
        color: "from-yellow-500/20 to-orange-500/20",
    },
]

function TiltCard({ children, className, color, title, description }: { children: React.ReactNode; className?: string; color: string; title: string; description: string }) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        x.set(clientX - left - width / 2)
        y.set(clientY - top - height / 2)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useMotionTemplate`${mouseY.get() / 25}deg`
    const rotateY = useMotionTemplate`${mouseX.get() / -25}deg`

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={className}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className={`absolute inset-4 rounded-xl bg-gradient-to-br ${color} blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative h-full w-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
                </div>
                {children}
            </div>
        </motion.div>
    )
}

export function Exhibits() {
    return (
        <section className="container py-24">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Interactive Exhibits
                </motion.h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Touch, play, and learn with our hands-on science models.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {exhibits.map((exhibit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-[400px] perspective-1000 group"
                    >

                        <TiltCard
                            className="h-full w-full"
                            color={exhibit.color}
                            title={exhibit.title}
                            description={exhibit.description}
                        >
                            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-20">
                                <div className="h-48 w-48 mb-6">
                                    <Lottie animationData={exhibit.animation} loop={true} className="w-full h-full drop-shadow-2xl" />
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
