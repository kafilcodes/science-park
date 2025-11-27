"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, FlaskConical, Image as ImageIcon, Map as MapIcon, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Marquee } from "@/components/ui/Marquee"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4">
            {/* Marquee Section */}
            <div className="w-full max-w-7xl mb-2 rounded-full overflow-hidden">
                <Marquee text="Welcome to Science Park Dhamtari! Explore the wonders of science and nature. | Opening Hours: 10:00 AM - 6:00 PM | Special Exhibits on Weekends!" speed={30} className="py-1 text-primary font-medium" />
            </div>

            {/* Main Navbar */}
            <div
                className={cn(
                    "w-full max-w-7xl rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 px-6 py-3 flex items-center justify-between",
                    isScrolled ? "bg-white/20 shadow-xl border-white/20" : "bg-white/5"
                )}
            >
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                    <span className="font-bold text-lg tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#about" className="flex items-center gap-2 transition-colors hover:text-teal-500 text-foreground/80 hover:scale-105">
                        <Info className="h-4 w-4" /> About
                    </Link>
                    <Link href="#exhibits" className="flex items-center gap-2 transition-colors hover:text-teal-500 text-foreground/80 hover:scale-105">
                        <FlaskConical className="h-4 w-4" /> Exhibits
                    </Link>
                    <Link href="#gallery" className="flex items-center gap-2 transition-colors hover:text-teal-500 text-foreground/80 hover:scale-105">
                        <ImageIcon className="h-4 w-4" /> Gallery
                    </Link>
                    <Link href="#how-to-reach" className="flex items-center gap-2 transition-colors hover:text-teal-500 text-foreground/80 hover:scale-105">
                        <MapIcon className="h-4 w-4" /> How to Reach
                    </Link>
                    <Link href="#contact" className="flex items-center gap-2 transition-colors hover:text-teal-500 text-foreground/80 hover:scale-105">
                        <Phone className="h-4 w-4" /> Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button asChild variant="default" size="sm" className="rounded-full px-6 hover:shadow-lg hover:bg-teal-500 hover:text-white hover:shadow-lg transition-all hover:scale-105 ">
                        <Link href="#contact" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Plan Visit
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="h-screen w-full border-none bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-8 items-center text-center">
                            <Link href="#about" className="flex items-center gap-3 text-2xl font-medium hover:text-primary transition-colors">
                                <Info className="h-6 w-6" /> About
                            </Link>
                            <Link href="#exhibits" className="flex items-center gap-3 text-2xl font-medium hover:text-primary transition-colors">
                                <FlaskConical className="h-6 w-6" /> Exhibits
                            </Link>
                            <Link href="#gallery" className="flex items-center gap-3 text-2xl font-medium hover:text-primary transition-colors">
                                <ImageIcon className="h-6 w-6" /> Gallery
                            </Link>
                            <Link href="#how-to-reach" className="flex items-center gap-3 text-2xl font-medium hover:text-primary transition-colors">
                                <MapIcon className="h-6 w-6" /> How to Reach
                            </Link>
                            <Link href="#contact" className="flex items-center gap-3 text-2xl font-medium hover:text-primary transition-colors">
                                <Phone className="h-6 w-6" /> Contact
                            </Link>
                            <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg">
                                <Link href="#contact">
                                    <Calendar className="mr-2 h-5 w-5" /> Plan Visit
                                </Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
