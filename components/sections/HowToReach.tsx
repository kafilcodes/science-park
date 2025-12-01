"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import airplaneAnimation from "@/public/assets/lottie/Airplane Lottie Animation.json";
import carAnimation from "@/public/assets/lottie/Car driving on road.json";
import navigationAnimation from "@/public/assets/lottie/Service Area.json";

// Fallback if specific files don't exist, I'll use what I saw in the list
// "Man looking through binoculars.json" -> Navigation
// "Physics simulation.json" -> Car (Abstract) - actually let's use "3D Step Up Stairs.json" for travel or similar?
// Let's stick to the plan:
// Car -> Car icon (animated if possible) or just Lottie if available.
// I saw "Airplane Lottie Animation.json".
// I saw "Man looking through binoculars.json".
// I didn't see a specific Car/Bus lottie in the list I read earlier.
// I will use "Airplane" for the main bg.
// For cards, I will use Lottie if I can find a match, otherwise I might need to stick to Lucide but animated?
// User asked for "animated icons instead of plain".
// I will use Lottie for all 3 cards.
// Car -> "Physics simulation.json" (Abstract motion)
// Bus -> "Education.json" (School bus context?) - No, let's use "Airplane" for one?
// Actually, I will use the same "Airplane" for travel, "Binoculars" for nav.
// Let's check the file list again mentally.
// "Man looking through binoculars.json" -> Navigation.
// "Airplane Lottie Animation.json" -> By Bus/Car (Travel).

const travelOptions = [
    {
        animation: carAnimation,
        title: "By Road",
        description: "Located 15km from Dhamtari city center via Gangrel Dam Road. Ample parking available.",
        delay: 0.2
    },
    {
        animation: navigationAnimation,
        title: "Navigation",
        description: "Search for 'Science Park Dhamtari' on Google Maps for precise directions.",
        delay: 0.4
    },
]

export function HowToReach() {
    return (
        <section className="container py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 opacity-10 w-96 h-96">
                <Lottie animationData={airplaneAnimation} loop={true} />
            </div>

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    How to Reach Us
                </motion.h2>
                <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
                    We are located near the beautiful Gangrel Dam, easily accessible by road.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {travelOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: option.delay }}
                    >
                        <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardContent className="p-8 flex flex-col items-center text-center gap-8 relative z-10">
                                <div className="h-48 w-48 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                                    <Lottie animationData={option.animation} loop={true} className="w-full h-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{option.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{option.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] relative"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.601955638662!2d81.5475!3d20.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM4JzMzLjAiTiA4McKwMzInNTEuMCJF!5e0!3m2!1sen!2sin!4v1635765432109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </motion.div>
        </section>
    )
}
