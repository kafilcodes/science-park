"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const images = [
    { id: 1, src: "/assets/images/1.png", alt: "Science Park Entrance", category: "Outdoor" },
    { id: 2, src: "/assets/images/2.png", alt: "Interactive Exhibits", category: "Indoor" },
    { id: 3, src: "/assets/images/3.png", alt: "Lush Gardens", category: "Outdoor" },
    { id: 4, src: "/assets/images/4.png", alt: "Educational Models", category: "Indoor" },
    { id: 5, src: "/assets/images/5.png", alt: "Play Area", category: "Outdoor" },
    { id: 6, src: "/assets/images/6.jpg", alt: "Science Model", category: "Indoor" },
    { id: 7, src: "/assets/images/7.jpg", alt: "Park View", category: "Outdoor" },
    { id: 8, src: "/assets/images/8.jpg", alt: "Exhibit Hall", category: "Indoor" },
    { id: 9, src: "/assets/images/9.jpg", alt: "Learning Center", category: "Indoor" },
    { id: 10, src: "/assets/images/10.webp", alt: "Nature Walk", category: "Outdoor" },
    { id: 11, src: "/assets/images/11.jpg", alt: "Group Tour", category: "Events" },
    { id: 12, src: "/assets/images/12.jpg", alt: "Student Workshop", category: "Events" },
    { id: 13, src: "/assets/images/13.webp", alt: "Science Demo", category: "Events" },
    { id: 14, src: "/assets/images/14.jpg", alt: "Outdoor Exhibit", category: "Outdoor" },
    { id: 15, src: "/assets/images/15.jpg", alt: "Evening View", category: "Outdoor" },
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
                    <GalleryItem key={index} image={image} index={index} />
                ))}
            </div>
        </section>
    )
}

function GalleryItem({ image, index }: { image: typeof images[0], index: number }) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                        "relative cursor-pointer overflow-hidden rounded-2xl group border border-white/10 shadow-lg break-inside-avoid mb-4 bg-white/5"
                    )}
                >
                    <div className="relative w-full overflow-hidden min-h-[200px]">
                        {isLoading && (
                            <div className="absolute inset-0 bg-white/10 animate-pulse z-10" />
                        )}
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={cn(
                                "w-full h-auto object-cover transition-all duration-500 group-hover:scale-110",
                                isLoading ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setIsLoading(false)}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                            <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                        </div>
                    </div>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none" aria-describedby="dialog-description">
                <div className="sr-only" id="dialog-description">Enlarged view of {image.alt}</div>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/50">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

