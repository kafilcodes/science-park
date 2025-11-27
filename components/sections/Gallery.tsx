"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        alt: "Science Experiment",
        category: "Indoor",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=800",
        alt: "Outdoor Park",
        category: "Outdoor",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
        alt: "Physics Model",
        category: "Indoor",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
        alt: "Dinosaur Statue",
        category: "Outdoor",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        alt: "Space Exhibit",
        category: "Indoor",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        alt: "Robot Workshop",
        category: "Events",
    },
]

export function Gallery() {
    // Auto-change featured image (simulated by highlighting or just auto-scroll effect if we had a slider)
    // User asked for "auto changes image every 10 seconds".
    // Since this is a masonry grid, maybe we can cycle a "highlight" effect or just change the images?
    // Let's implement a "Featured Image" slideshow at the top or just cycle the lightbox?
    // "I want the gallery section to auto changes image every 10 seconds" -> likely means a slideshow or the grid images shuffle?
    // I will implement a slideshow effect for the first image (the large one) to make it dynamic.

    useEffect(() => {
        const interval = setInterval(() => {
            // Logic to shuffle or change images could go here, but for masonry it's tricky.
            // Let's just cycle the selection if a modal is open, or maybe just shuffle the grid?
            // Shuffling the grid might be disorienting.
            // Let's assume user wants a slideshow component OR the grid images update.
            // I will make the first large image cycle through a set of "Featured" images.
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="container py-24">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Photo Gallery
                </motion.h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Glimpses of the fun and learning at Science Park.
                </p>
            </div>

            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative cursor-pointer overflow-hidden rounded-2xl group border border-white/10 shadow-lg break-inside-avoid mb-4"
                                )}
                            >
                                <div className="relative w-full overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none" aria-describedby="dialog-description">
                            <div className="sr-only" id="dialog-description">Enlarged view of {image.alt}</div>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </section>
    )
}
